var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('disconnect', function(){
    console.log('disconnect')
    io.emit('user disconnect');
  });

  socket.on('send message', function(msg){
    console.log('get message')
    io.emit('get message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
