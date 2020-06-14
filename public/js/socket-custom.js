let socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');
    
});

// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
    
});

// Enviar informacion
socket.emit('enviarMensaje', {
    // usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function( resp ){
    console.log(resp);
    
});

// Escuchar informacion
socket.on('enviarMensaje', function(res) {
    console.log(res);
    
})