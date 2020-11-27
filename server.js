const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const users = new Set();
const currUser;

function signupUser(id, username, password, chat) {
	// use a fetch to get this person or make a new person from mongo
	// then set currUser as it
	const user = {id, username, password, chat};
	users.add(user);
	return user;
}

function userLeave() {
	users.delete(currUser);
}

function getChatUsers() {
	return [...users].filter(i => i.chat == currUser.chat);
}

const botName = 'MWA Chat';

// Run when client connects
io.on('connection', socket => {
  socket.on('joinChat', ({ username, password, chat }) => {
    const user = signupUser(socket.id, username, password, chat);

    socket.join(user.chat);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to MWA Chat!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.chat)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.chat).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
