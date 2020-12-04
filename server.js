//express requirements
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./chat-schm.js');

//http module
const http = require('http').Server(app);

//socket io
const io = require('socket.io')(http);

// admin 
var admin = null; 

var numberOfUsers = 0;

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

app.get('/messages', function (req, res) {
    Chat.find({}, function (err, data) {
      if (err) {
        console.log("Error retrieving messages");
        return;
      }
      res.send(data);
    });
});

// Run when client connects
io.sockets.on('connection', function(socket) {
  console.log("User Is Connected");

  socket.on('username', function(username) {
    socket.username = username;
    io.emit('is_online', '😼 <i>' + socket.username + ' joined the chat..</i>');
    numberOfUsers++;
    if (numberOfUsers===1) {
      admin = username; // make it global
    }
    console.log(numberOfUsers);
  });

  socket.on('disconnect', function(username) {
    socket.username = username;
    io.emit('is_online', '😿 <i>' + socket.username + ' left the chat..</i>');
    numberOfUsers--;
    console.log(numberOfUsers);
    if (numberOfUsers===0) {
      Chat.deleteMany({})
      .exec()
          .catch(err => {
            console.log(err);
          });
      console.log("foooo real neighbor");
    }
  });

  socket.on('chat_message', function(message) {
    // Generate a random number up to the number of people in the chat
    var nonce = Math.floor(Math.random() * numberOfUsers);
    // Only allow message to go through if number is less than 2,
    // to ensure that on average 2 people are speaking at most
    // at once on the chat.
    if (nonce < 5 || socket.username===admin) { 
        var tmp = new Chat({'message': message, 'sender': socket.username, 'date': Date.now()});
        if (socket.username===admin) {
          io.emit('chat_message', '<strong style="color:purple;">' + socket.username + '</strong>: ' + message);
        }
        else {
          io.emit('chat_message', '<strong style="color:green;">' + socket.username + '</strong>: ' + message);
        }
        tmp.save(function (err, idk) {
                if (err) {
                        console.log("Error saving message");
                }
        });
    }
  });

});
const server = http.listen(3000);
