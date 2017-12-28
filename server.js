var server = require('http').createServer();
var io = require('socket.io')(server);
const map = new Map();
io.on('connection', function(client){
  map.set(client.id,client);
  client.on('event', function(data){
    for(let has_client of map.values()){
        has_client.emit('event',data);
    }
  });
  client.on('disconnect', function(){
    map.delete(client.id);
  });
});

server.listen(3000);