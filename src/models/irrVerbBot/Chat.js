const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
	user_id: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  }
})

const ChatModel = mongoose.model("chat", ChatSchema)
module.exports = ChatModel
