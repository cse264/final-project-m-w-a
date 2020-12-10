const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.listen(80, function() {
	console.log('Server running on port 80');
=======
app.listen(process.env.PORT || 80, function() {
	console.log('Server running on port 3000');
>>>>>>> 723cbc41fd34084b0b4dac9f44558b7bcabf348b
});


