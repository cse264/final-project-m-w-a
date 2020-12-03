const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchmear = new Schema(
  {
    message: {
      type: String
    },
    sender: {
      type: String
    },
    date: {
      type: Date
    },
  },
);

const Chat = mongoose.model('Chat', chatSchmear);

module.exports = Chat;
