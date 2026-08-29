/* =========================================
   PHINIX TRADING ENGINE FOUNDATION
   dbtraders-build

   Purpose:
   - Separate bot state/control from the UI.
   - Keep risk rules in one place.
   - Prepare the site for real Deriv WebSocket execution.
   - Do NOT simulate wins/losses here.
   ========================================= */

(function(){
    "use strict";

    const state = {
        running: false,
        paused: false,

        settings: {
            stake: 0,
            targetProfit: 0,
            stopLoss: 0,
            martingale: 0,
            tradeType: "Over / Under",
            durationType: "Ticks",
            durationValue: 1,
            prediction: 4,
            purchase: "Odd",
            allowBulkPurchase: false
        },

        stats: {
            trades: 0,
            wins: 0,
            losses: 0,
            profit: 0,
            stake: 0,
            payout: 0
        }
    };

    const listeners = {};

    function emit(event, data){

        (listeners[event] || []).forEach(function(listener){

            try {

                listener(data);

            } catch(error){

                console.error(
                    "Phinix engine listener error:",
                    error
                );

            }

        });

    }

    function on(event, listener){

        if(typeof listener !== "function")
            return function(){};

        if(!listeners[event]){
            listeners[event] = [];
        }

        listeners[event].push(listener);

        return function(){

            listeners[event] =
                (listeners[event] || []).filter(
                    function(item){
                        return item !== listener;
                    }
                );

        };

    }

    function readSettings(source){

        const settings = source || {};

        state.settings.stake =
            Number(settings.stake) || 0;

        state.settings.targetProfit =
            Number(settings.targetProfit) || 0;

        state.settings.stopLoss =
            Number(settings.stopLoss) || 0;

        state.settings.martingale =
            Number(settings.martingale) || 0;

        state.settings.tradeType =
            settings.tradeType ||
            "Over / Under";

        state.settings.durationType =
            settings.durationType ||
            "Ticks";

        state.settings.durationValue =
            Number(settings.durationValue) || 1;

        state.settings.prediction =
            Number(settings.prediction);

        state.settings.purchase =
            settings.purchase ||
            "Odd";

        state.settings.allowBulkPurchase =
            settings.allowBulkPurchase === true;

        emit(
            "settings",
            getSnapshot()
        );

        return getSnapshot();

    }

    function validateSettings(){

        const errors = [];

        const s = state.settings;

        if(s.stake <= 0){

            errors.push(
                "Stake must be greater than 0."
            );

        }

        if(s.targetProfit < 0){

            errors.push(
                "Target profit cannot be negative."
            );

        }

        if(s.stopLoss < 0){

            errors.push(
                "Stop loss cannot be negative."
            );

        }

        if(s.martingale < 0){

            errors.push(
                "Martingale cannot be negative."
            );

        }

        if(s.durationValue <= 0){

            errors.push(
                "Duration must be greater than 0."
            );

        }

        return {

            valid:
                errors.length === 0,

            errors:
                errors

        };

    }

    function resetStats(){

        state.stats = {

            trades: 0,
            wins: 0,
            losses: 0,
            profit: 0,
            stake: 0,
            payout: 0

        };

        emit(
            "reset",
            getSnapshot()
        );

    }

    function start(){

        const validation =
            validateSettings();

        if(!validation.valid){

            emit(
                "error",
                validation.errors
            );

            return false;

        }

        state.running = true;
        state.paused = false;

        emit(
            "start",
            getSnapshot()
        );

        return true;

    }

    function pause(){

        if(!state.running)
            return false;

        state.paused = true;

        emit(
            "pause",
            getSnapshot()
        );

        return true;

    }

    function resume(){

        if(!state.running)
            return false;

        state.paused = false;

        emit(
            "resume",
            getSnapshot()
        );

        return true;

    }

    function stop(reason){

        state.running = false;
        state.paused = false;

        emit(
            "stop",
            {
                reason:
                    reason || "manual",

                snapshot:
                    getSnapshot()
            }
        );

        return true;

    }

    function shouldStop(){

        const profit =
            Number(state.stats.profit) || 0;

        const s =
            state.settings;

        if(
            s.targetProfit > 0 &&
            profit >= s.targetProfit
        ){

            return {

                stop: true,

                reason:
                    "target-profit"

            };

        }

        if(
            s.stopLoss > 0 &&
            profit <= -s.stopLoss
        ){

            return {

                stop: true,

                reason:
                    "stop-loss"

            };

        }

        return {

            stop: false,
            reason: null

        };

    }

    /*
       Receives a REAL contract result.

       No random result is generated
       by this engine.
    */

    function recordTrade(result){

        if(
            !result ||
            typeof result !== "object"
        ){

            return false;

        }

        const stake =
            Number(result.stake) || 0;

        const payout =
            Number(result.payout) || 0;

        const profit =
            Number(
                result.profit !== undefined
                    ? result.profit
                    : payout - stake
            ) || 0;

        const won =
            result.won === true;

        state.stats.trades += 1;

        state.stats.stake +=
            stake;

        state.stats.payout +=
            payout;

        state.stats.profit +=
            profit;

        if(won){

            state.stats.wins += 1;

        }else{

            state.stats.losses += 1;

        }

        emit(
            "trade",
            {
                result:
                    result,

                snapshot:
                    getSnapshot()
            }
        );

        const stopDecision =
            shouldStop();

        if(stopDecision.stop){

            stop(
                stopDecision.reason
            );

        }

        return true;

    }

    function getNextStake(
        lastTradeWon,
        lastStake
    ){

        const base =
            state.settings.stake;

        const previous =
            Number(lastStake) ||
            base;

        const multiplier =
            state.settings.martingale;

        if(
            lastTradeWon ||
            multiplier <= 0
        ){

            return base;

        }

        return previous *
            multiplier;

    }

    function getSnapshot(){

        return JSON.parse(
            JSON.stringify(state)
        );

    }

    window.PhinixEngine = {

        on:
            on,

        readSettings:
            readSettings,

        validateSettings:
            validateSettings,

        start:
            start,

        pause:
            pause,

        resume:
            resume,

        stop:
            stop,

        resetStats:
            resetStats,

        recordTrade:
            recordTrade,

        shouldStop:
            shouldStop,

        getNextStake:
            getNextStake,

        getSnapshot:
            getSnapshot

    };

})();
