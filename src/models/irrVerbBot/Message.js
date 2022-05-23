const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
	chat_id: {
    type: String,
    required: true,
  },
	user_id: {
    type: String,
    required: true,
  },
	text: {
    type: String,
    required: true,
  },
})

const MessageModel = mongoose.model("message", MessageSchema)
module.exports = MessageModel
