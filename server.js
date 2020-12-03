//socket io
const socketio = require('socket.io');

//http module
const http = require('http').Server(app);

//express requirements
const express = require('express');
const app = express();
const dateTime = require("simple-datetime-formater");
const bodyParser = require("body-parser");
const chatRouter = require("./route/chatroute");
const loginRouter = require("./route/loginRoute");

const port = 3000;

// Set static folder
app.use(express.static(__dirname + "public"));

//socket io
socket = io(http);

const users = new Set();


const botName = 'MWA Chat';

// Run when client connects
socket.on('connection', socket => {
  console.log("User Is Connected");
  
  socket.on("disconnect", function() {
    console.log("User disconnected");
  });
  
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });
  
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });
  
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg });

    //save chat to the database
    connect.then(db => {
      console.log("connected correctly to the server");
      let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

      chatMessage.save();
    });
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
