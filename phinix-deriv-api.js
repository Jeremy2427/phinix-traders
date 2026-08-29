/* =========================================
   PHINIX DERIV API CONNECTION
   =========================================

   Purpose:
   - Create one Deriv WebSocket connection.
   - Keep API communication separate from UI.
   - No account token is stored here.
   - No trades are placed by this module.
   ========================================= */

(function () {

    "use strict";

    const state = {

    connected: false,

    socket: null

};


    const listeners = {};


    function emit(event, data) {

        (listeners[event] || []).forEach(
            function (listener) {

                try {

                    listener(data);

                } catch (error) {

                    console.error(
                        "Phinix Deriv API listener error:",
                        error
                    );

                }

            }
        );

    }


    function on(event, listener) {

        if (
            typeof listener !== "function"
        ) {

            return function () {};

        }


        if (!listeners[event]) {

            listeners[event] = [];

        }


        listeners[event].push(listener);


        return function () {

            listeners[event] =
                (listeners[event] || [])
                    .filter(
                        function (item) {

                            return item !== listener;

                        }
                    );

        };

    }


    function connect() {

        


        /*
            Close an existing connection first.
        */

        if (state.socket) {

            try {

                state.socket.close();

            } catch (error) {

                console.warn(
                    "Previous socket could not be closed:",
                    error
                );

            }

        }




        /*
            Deriv WebSocket endpoint.
        */

        const url =
    "wss://api.derivws.com/trading/v1/options/ws/public";


        try {

            state.socket =
                new WebSocket(url);

        } catch (error) {

            emit(
                "error",
                {
                    message:
                        "Unable to create Deriv WebSocket.",
                    error:
                        error
                }
            );

            return false;

        }


        state.socket.onopen =
            function () {

                state.connected =
                    true;

                emit(
    "connected",
    {}
);
            };


        state.socket.onmessage =
            function (event) {

                let data;


                try {

                    data =
                        JSON.parse(
                            event.data
                        );

                } catch (error) {

                    emit(
                        "error",
                        {
                            message:
                                "Invalid Deriv WebSocket response.",
                            error:
                                error
                        }
                    );

                    return;

                }


                /*
                    Forward every API response.
                */

                emit(
                    "message",
                    data
                );


                /*
                    Deriv API-level errors.
                */

                if (data.error) {

                    emit(
                        "apiError",
                        data.error
                    );

                }

            };


        state.socket.onerror =
            function (error) {

                emit(
                    "error",
                    {
                        message:
                            "Deriv WebSocket error.",
                        error:
                            error
                    }
                );

            };


        state.socket.onclose =
            function () {

                state.connected =
                    false;

                emit(
                    "disconnected",
                    {}
                );

            };


        return true;

    }


    function send(request) {

        if (
            !state.socket ||
            state.socket.readyState !==
                WebSocket.OPEN
        ) {

            emit(
                "error",
                {
                    message:
                        "Deriv WebSocket is not connected."
                }
            );

            return false;

        }


        try {

            state.socket.send(
                JSON.stringify(request)
            );

            return true;

        } catch (error) {

            emit(
                "error",
                {
                    message:
                        "Failed to send Deriv request.",
                    error:
                        error
                }
            );

            return false;

        }

    }


    function disconnect() {

        if (state.socket) {

            try {

                state.socket.close();

            } catch (error) {

                console.warn(
                    "Deriv socket close error:",
                    error
                );

            }

        }


        state.socket =
            null;

        state.connected =
            false;

    }


    function isConnected() {

        return (
            state.connected === true
        );

    }


    function getState() {

    return {

        connected:
            state.connected

    };

    }


    window.PhinixDerivAPI = {

        on:
            on,

        connect:
            connect,

        send:
            send,

        disconnect:
            disconnect,

        isConnected:
            isConnected,

        getState:
            getState

    };

})();
