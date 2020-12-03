const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "blank for now";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
