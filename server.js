//express requirements
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./chat-schm.js');

//http module
const http = require('http').Server(app);

//socket io
const io = require('socket.io')(http);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://SCRAM:password1234@cluster0-shard-00-00.qlkv9.mongodb.net:27017,cluster0-shard-00-01.qlkv9.mongodb.net:27017,cluster0-shard-00-02.qlkv9.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-q65qop-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

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
    var tmp = new Chat({'message': message, 'sender': socket.username, 'date': Date.now()});
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    tmp.save(function (err, idk) {
        if (err) {
                console.log("Error saving message");
        }
    });
  });

});
const server = http.listen(3000);
