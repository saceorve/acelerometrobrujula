var ac = {
    watchID: null,
    satisfactorio: function(acc){
     $('#acelerometro h2').html('X: '+acc.x+'<br>'+
          'Y: '+acc.y+'<br>'+
          'Z: '+acc.z);
     }, 
    error:  function(err){
     alert('Error'+err.code);
     },
    opc: {frequency: 500}
    iniciar: function(){
    If(ac.watchID == null){
    ac.watchID = navigator.accelerometer.watchAcceleration(ac.satisfactorio,ac.error,ac.opc);
    },
    detener: function(){
     if(ac.watchID){
      navigator.accelerometer.clearWatch(watchID);
ac.watchID = null;
$('#acelerometro h2').html('Detenido');
     }
    }
};