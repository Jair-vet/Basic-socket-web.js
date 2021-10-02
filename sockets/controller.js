

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = '123456';
        callback(id); //fecha: new Date().getTime()

        // broadcast le manda un mensaje a todos menos a quien lo esribe
        socket.broadcast.emit('enviar-mensaje', payload); // Mandarle mensaje a todos los usuarios
        // console.log(payload); Recibo el mensaje
    })

}



module.exports = {
    socketController   
}

