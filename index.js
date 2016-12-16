var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send message', function(msg){
    console.log('message: ' + msg);

    io.emit('get message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
