//Acelerómetro
var ac = {
    watchID: null,
    satifactorio: function(acc){
        $('#acelerometro h2').html('X: ' + acc.x + '<br>' +
                                   'Y: ' + acc.y + '<br>' +
                                   'Z: ' + acc.z);
    },
    error: function(err){
        alert('Acelerometro Error: '+err.code);
    },
    opc: { frequency: 500 },
    iniciar: function(){
        if(ac.watchID == null)
            ac.watchID = navigator.accelerometer.watchAcceleration(ac.satifactorio,ac.error,ac.opc);
    },
    detener: function(){
        if(ac.watchID){
            navigator.accelerometer.clearWatch(ac.watchID);
            ac.watchID = null;
            $('#acelerometro h2').html('Detenido');
        }
    }
};