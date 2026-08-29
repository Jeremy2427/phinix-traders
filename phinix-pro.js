/* =========================================
   PHINIX PRO BOT
   Settings State
   ========================================= */

let phTargetProfit = 0;
let phStopLoss = 0;

let phTradeType = "Over / Under";
let phDurationType = "Ticks";
let phDurationValue = 1;

let phPrediction = 4;
let phPurchase = "Odd";

let phAllowBulkPurchase = false;


/* =========================================
   READ PHINIX PRO SETTINGS
   ========================================= */

function readPhinixProSettings(){

    const stakeInput =
        document.getElementById("phStakeInput");

    const targetInput =
        document.getElementById("profitInput");

    const lossInput =
        document.getElementById("lossInput");

    const martingaleSelect =
        document.getElementById("martingaleSelect");

    const tradeType =
        document.getElementById("tradeType");


    /* STAKE */

    if(stakeInput){

        const value =
            Number(stakeInput.value);

        if(value > 0){

            phBaseStake = value;

        }

    }


    /* CURRENT STAKE */

    phCurrentStake =
        phBaseStake;


    /* TARGET PROFIT */

    if(targetInput){

        phTargetProfit =
            Number(targetInput.value) || 0;

    }


    /* STOP LOSS */

    if(lossInput){

        phStopLoss =
            Number(lossInput.value) || 0;

    }


    /* MARTINGALE */

    if(martingaleSelect){

        if(martingaleSelect.value === "OFF"){

            phMartingale = 0;

        }else{

            phMartingale =
                Number(martingaleSelect.value) || 0;

        }

    }


    /* TRADE TYPE */

    if(tradeType){

        phTradeType =
            tradeType.value;

    }


    /* OTHER SETTINGS */

    const durationType =
        document.getElementById("durationType");

    const durationValue =
        document.getElementById("durationValue");

    const prediction =
        document.getElementById("predictionSelect");

    const purchase =
        document.getElementById("purchaseSelect");

    const bulkPurchase =
        document.getElementById("bulkPurchaseSelect");

    const numberTrades =
        document.getElementById("numberTradesSelect");


    if(durationType)
        phDurationType = durationType.value;


    if(durationValue)
        phDurationValue =
            Number(durationValue.value) || 1;


    if(prediction)
        phPrediction =
            Number(prediction.value);


    if(purchase)
        phPurchase =
            purchase.value;


    if(bulkPurchase)
        phAllowBulkPurchase =
            bulkPurchase.value === "Yes";


    if(numberTrades)
        phNumberOfTrades =
            Number(numberTrades.value) || 1;


    /* RESET TRADE COUNTER */

    phTradesCompleted = 0;

       /* SEND SETTINGS TO PHINIX ENGINE */

    if(
        typeof PhinixEngine !== "undefined"
    ){

        PhinixEngine.readSettings({

            stake:
                phBaseStake,

            targetProfit:
                phTargetProfit,

            stopLoss:
                phStopLoss,

            martingale:
                phMartingale,

            tradeType:
                phTradeType,

            durationType:
                phDurationType,

            durationValue:
                phDurationValue,

            prediction:
                phPrediction,

            purchase:
                phPurchase,

            allowBulkPurchase:
                phAllowBulkPurchase

        });

    }

      }


/* =========================================
   PHINIX PRO TRADE ENGINE
   ========================================= */

function startPhinixProEngine(){

    /* Read all settings first */
    readPhinixProSettings();

       /* START THE NEW PHINIX ENGINE */

    if(
        typeof PhinixEngine !== "undefined"
    ){

        const started =
            PhinixEngine.start();

        if(!started){

            phBotRunning = false;

            return;

        }

    }

    /* Make sure stake is valid */
    if(phBaseStake <= 0){

        alert("Please enter a valid stake.");

        return;

    }


    /* Start with the base stake */
    phCurrentStake =
        phBaseStake;

    phTradesCompleted = 0;

    phBotRunning = true;


    /* Clear an old timer */
    if(phInterval){

        clearInterval(phInterval);

    }





        /*
        TRADE EXECUTION
        ----------------
        The new PhinixEngine now controls
        bot state and risk rules.

        Real Deriv execution will be
        connected in the next stage.

        Do NOT start the old simulated
        Math.random() trade loop here.
    */

    if(
        typeof PhinixEngine === "undefined"
    ){

        alert(
            "Phinix trading engine is not loaded."
        );

        phBotRunning = false;

        return;

    }

}


/* =========================================
   DURATION
   ========================================= */

function getPhinixProInterval(){

    if(phDurationType === "Seconds"){

        return phDurationValue * 1000;

    }


    if(phDurationType === "Minutes"){

        return phDurationValue * 60000;

    }


    /*
        Ticks are simulated here.
        We use a short interval because
        real Deriv tick timing will be
        connected later.
    */

    return 1500;

}


/* =========================================
   EXECUTE ONE TRADE
   ========================================= */

function executePhinixProTrade(){

    if(!phBotRunning){

        return;

    }

       /* =========================================
       PHINIX ENGINE RESULT BRIDGE
       ========================================= */

    if(
        typeof PhinixEngine === "undefined"
    ){

        return;

    }


    /*
        Stop before creating another trade
        if the requested number of trades
        has already been reached.
    */

    if(
        phTradesCompleted >=
        phNumberOfTrades
    ){

        stopPhinixProEngine();

        return;

    }


    /*
        Create the simulated result.
        This will later be replaced by
        the real Deriv contract result.
    */

    const win =
        Math.random() > 0.35;


    const tradeStake =
        phCurrentStake;


    /*
        Simulated 74% payout.
    */

    const pnl =
        win
        ? tradeStake * 0.74
        : -tradeStake;


    /*
        Update existing Phinix statistics
        if those variables exist.
    */

    if(typeof phStake !== "undefined"){

        phStake += tradeStake;

    }


    if(typeof phPayout !== "undefined"){

        phPayout +=
            win
            ? tradeStake + pnl
            : 0;

    }


    if(typeof phRuns !== "undefined"){

        phRuns++;

    }


    if(win){

        if(typeof phWon !== "undefined")
            phWon++;

    }else{

        if(typeof phLost !== "undefined")
            phLost++;

    }


    if(typeof phProfit !== "undefined"){

        phProfit += pnl;

    }


    /*
        Save transaction.
    */

    if(typeof phTransactions !== "undefined"){

        phTransactions.push({

            type:
                win
                ? "📈"
                : "📉",

            entry:
                (735 + Math.random())
                .toFixed(2),

            pnl:
                pnl,

            stake:
                tradeStake,

            win:
                win

        });

    }


    phTradesCompleted++;


    /*
        MARTINGALE
    */

    if(win){

        /*
            After a win:
            return to the original stake.
        */

        phCurrentStake =
            phBaseStake;

    }

    else if(phMartingale > 0){

        /*
            After a loss:
            multiply the NEXT trade's stake.
        */

        phCurrentStake =
            tradeStake *
            phMartingale;

    }

    else{

        /*
            Martingale OFF.
        */

        phCurrentStake =
            phBaseStake;

    }


    /*
        UPDATE JOURNAL
    */

    if(typeof phJournal !== "undefined"){

        phJournal += `
🎯 Signal Found
${win ? "💰 Contract Won" : "❌ Contract Lost"}
Stake: ${tradeStake.toFixed(2)} USD
P/L: ${pnl.toFixed(2)} USD
`;

    }


    /*
        UPDATE EXISTING UI.
    */

    if(typeof renderPhinixTransactions === "function")
        renderPhinixTransactions();

    if(typeof renderPhinixJournal === "function")
        renderPhinixJournal();

    if(typeof updatePhinixStats === "function")
        updatePhinixStats();

    if(typeof updatePhinixResultsPanel === "function")
        updatePhinixResultsPanel();


    /*
        TARGET PROFIT
    */

    if(
        phTargetProfit > 0 &&
        typeof phProfit !== "undefined" &&
        phProfit >= phTargetProfit
    ){

        stopPhinixProEngine();

        return;

    }


    /*
        STOP LOSS
    */

    if(
        phStopLoss > 0 &&
        typeof phProfit !== "undefined" &&
        phProfit <= -phStopLoss
    ){

        stopPhinixProEngine();

        return;

    }

}


/* =========================================
   STOP / PAUSE ENGINE
   ========================================= */

function stopPhinixProEngine(){

    if(phInterval){

        clearInterval(phInterval);

        phInterval = null;

    }


    phBotRunning = false;


    /*
        Use the existing stop/start
        function if your running screen
        already has one.
    */

    if(typeof updatePhinixRunningStatus === "function"){

        updatePhinixRunningStatus(false);

    }

      }

/* =========================================
   PHINIX PRO RUN BUTTON
   ========================================= */

function startPhinixProBot(){

    /*
        Open the existing Phinix Pro
        running screen first.
    */

    if(typeof openPhinixRunningScreen === "function"){

        openPhinixRunningScreen();

    }else{

        alert("Phinix Pro running screen could not be opened.");

        return;

    }


    /*
        Read the settings AFTER the
        running screen has opened.
    */

    setTimeout(function(){

        readPhinixProSettings();

        startPhinixProEngine();

    }, 300);

}


/* =========================================
   PHINIX ENGINE RESULT HANDLER
   ========================================= */

function handlePhinixEngineTradeResult(result){

    if(
        typeof PhinixEngine === "undefined"
    ){

        return;

    }

    if(
        !result ||
        typeof result !== "object"
    ){

        return;

    }

    /*
        Send the completed contract result
        to the central Phinix engine.
    */

    PhinixEngine.recordTrade({

        stake:
            Number(result.stake) || 0,

        payout:
            Number(result.payout) || 0,

        profit:
            Number(result.profit) || 0,

        won:
            result.won === true,

        contractId:
            result.contractId || null,

        symbol:
            result.symbol || null

    });

}
