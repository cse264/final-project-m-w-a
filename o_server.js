const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
	console.log('Server running on port 3000');
});


