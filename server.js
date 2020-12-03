//express requirements
const express = require('express');
const app = express();

//http module
const http = require('http').Server(app);

//socket io
const socketio = require('socket.io')(http);

// Run when client connects
io.socket.on('connection', function(socket) {
  console.log("User Is Connected");
  
  socket.on('username', function(username) {
    socket.username = username;
    io.emit('is_online', '😼 <i>' + socket.username + ' joined the chat..</i>');
  });
  
  socket.on('disconnect', function(username) {
    socket.username = username;
    io.emit('is_online', '😿 <i>' + socket.username + ' joined the chat..</i>');
  });
  
  socket.on('disconnect', function(username) {
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });
  
});
const server = http.listen(3000, function() {
  console.log('listening on *:3000);
});
