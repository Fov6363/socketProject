var socket = require('socket.io-client')('http://127.0.0.1:3000');
socket.on('connect', function(){
    socket.emit('event','niaho');
});
socket.on('event', function(data){
    console.log(`client event`);
    console.log(data);
});
socket.on('disconnect', function(){
    console.log(`client disconnect`);
});

