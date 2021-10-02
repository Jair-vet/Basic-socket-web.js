
// Referencias de HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

// Escuchar un evento
socket.on('connect', () =>{
    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';

});

socket.on('disconnect', () =>{
    // console.log('Desconectado del Servidor');

    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener('click', () =>{
    
    const mensaje = txtMensaje.value;
    // Mandando un objeto, tiene mas información 
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime(),
    }

    // Enviarle un mensaje al servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
    
})


