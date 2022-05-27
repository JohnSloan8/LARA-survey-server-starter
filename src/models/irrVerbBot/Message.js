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
  verb: {
    type: String,
    required: true,
  },
  tense: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    required: true,
  },
  question_no: {
    type: Number,
    required: true,
  },
	text: {
    type: String,
    required: false,
  },
  correct: {
    type: Boolean,
    required: false,
  },
  errorType: {
    type: Number,
    required: false,
  },
  timeTaken: {
    type: Number,
    required: false,
  },
})

const MessageModel = mongoose.model("message", MessageSchema)
module.exports = MessageModel
