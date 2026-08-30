/* =========================================
   PHINIX DERIV BRIDGE
   =========================================

   Purpose:
   - Connect the Phinix Engine to the Deriv API layer.
   - Receive public market data.
   - Keep UI, engine, and API responsibilities separate.
   - NO authorization.
   - NO contract purchase.
   - NO real-money trading.
   ========================================= */

(function () {

    "use strict";


    const bridge = {

    connected: false,

    lastMessage: null,

    lastTick: null,

    tickListeners: []

};

    function handleConnected() {

    bridge.connected =
        true;

    console.log(
        "Phinix: Connected to Deriv."
    );


    /*
        Subscribe to live tick data.

        This is public market data only.
        No account or trading action.
    */

    PhinixDerivAPI.send({

    ticks:
        "1HZ100V",

    subscribe:
        1,

    req_id:
        1

});

    }


    function handleDisconnected() {

        bridge.connected =
            false;

        console.log(
            "Phinix: Disconnected from Deriv."
        );

    }


    function handleError(error) {

        console.error(
            "Phinix Deriv error:",
            error
        );

    }


    function handleMessage(data) {

        bridge.lastMessage =
            data;


        /*
            Keep this stage read-only.

            We are only observing public
            market data. No trading request
            is sent here.
        */

        if(
            data &&
            data.tick
        ){

            bridge.lastTick =
                data.tick;

           bridge.tickListeners.forEach(
    function(listener){

        try{

            listener(
                data.tick
            );

        }catch(error){

            console.error(
                "Phinix tick listener error:",
                error
            );

        }

    }
);

            console.log(
                "Phinix Deriv tick:",
                data.tick
            );

        }

    }


    function connect() {

        if(
            typeof PhinixDerivAPI ===
            "undefined"
        ){

            console.error(
                "PhinixDerivAPI is not loaded."
            );

            return false;

        }


        if(
            PhinixDerivAPI.isConnected()
        ){

            return true;

        }


        PhinixDerivAPI.on(
            "connected",
            handleConnected
        );


        PhinixDerivAPI.on(
            "disconnected",
            handleDisconnected
        );


        PhinixDerivAPI.on(
            "error",
            handleError
        );


        PhinixDerivAPI.on(
            "message",
            handleMessage
        );


        return (
            PhinixDerivAPI.connect()
        );

    }


    function disconnect() {

        if(
            typeof PhinixDerivAPI ===
            "undefined"
        ){

            return false;

        }


        PhinixDerivAPI.disconnect();

        bridge.connected =
            false;

        return true;

    }


    function isConnected() {

        return (
            bridge.connected === true
        );

    }


    function getLastTick() {

        return bridge.lastTick;

    }


window.PhinixDerivBridge = {

    connect:
        connect,

    disconnect:
        disconnect,

    isConnected:
        isConnected,

    getLastTick:
        getLastTick,

    onTick:
        function(listener){

            if(
                typeof listener !==
                "function"
            ){

                return false;

            }

            bridge.tickListeners.push(
                listener
            );

            return true;

        }

};
   
})();
