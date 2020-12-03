//express requirements
const express = require('express');
const app = express();

//http module
const http = require('http').Server(app);

//socket io
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('public/index.html');
});

// Run when client connects
io.sockets.on('connection', function(socket) {
  console.log("User Is Connected");
  
  socket.on('username', function(username) {
    socket.username = username;
    io.emit('is_online', '😼 <i>' + socket.username + ' joined the chat..</i>');
  });
  
  socket.on('disconnect', function(username) {
    socket.username = username;
    io.emit('is_online', '😿 <i>' + socket.username + ' left the chat..</i>');
  });
  
  socket.on('chat_message', function(message) {
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });
  
});
const server = http.listen(3000);
