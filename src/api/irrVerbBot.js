const express = require('express');
const ChatModel = require("../models/irrVerbBot/Chat")
const UserModel = require("../models/irrVerbBot/User")
const MessageModel = require("../models/irrVerbBot/Message")
const getBotResponse = require('../scripts/main')
const router = express.Router();
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/irrVerbBotDB")

router.get("/getMessages", async (req, res) => {
	MessageModel.find({"chat_id": "627e4e836fa530de58310a81"}, async (err, result) => {
		if (err) {
			res.json(err)
		} else {
			let messages = []
			result.forEach(m => {
				messages.push({
					chat_id: m.chat_id,
    			user_id: m.user_id,
    			text: m.text
				})
			})
			res.json(messages)
		}
	})
})

router.post("/createMessage", async (req, res) => {

	const newMessage = new MessageModel({
		"chat_id": req.body.msg.chat_id,
		"user_id": req.body.msg.user_id,
		"text": req.body.msg.text
	});
	await newMessage.save();	

	let botResponse = getBotResponse(req.body.msg, req.body.task)
	await botResponse.save();	

	res.json({
		text: botResponse.text,
		user_id: botResponse.user_id,
		chat_id: botResponse.chat_id,
	});

})

module.exports = router;
