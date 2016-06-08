/**
 * Created by benja on 21/05/2016.
 */
var app;
app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.getElementById('scan').addEventListener('click', this.scan, false);
        //document.getElementById('encode').addEventListener('click', this.encode, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    //
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        


    },


    // Update DOM on a Received Event
    receivedEvent: function (id) {
        
    }


};

function validate(){
    location.href="index.html";
}