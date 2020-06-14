const {io} = require('../server')



io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administridor',
        mensaje: 'Bienvenido a esta aplicacion'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
        
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if(mensaje.usuario){
        //     callback('Todo salio bien')
        // }else{

        //     callback('Todo salio mal');
        // }
    } )


    
})