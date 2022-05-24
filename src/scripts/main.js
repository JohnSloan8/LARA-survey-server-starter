const getVerbScripts = require("./questions")
const MessageModel = require("../models/irrVerbBot/Message")

const getBotResponse = (msg, task) => {
  let setOfPossibleQuestions = getVerbScripts(task.verb, task.tense, task.form)
  let botResponse = new MessageModel({
    "chat_id": msg.chat_id,
    "user_id": "627e4a7d6fa530de58310a6d",
    "text": setOfPossibleQuestions[0].question
  }) 
  return botResponse
}

module.exports = getBotResponse
