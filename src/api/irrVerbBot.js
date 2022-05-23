const express = require('express');
const ChatModel = require("../models/irrVerbBot/Chat")
const UserModel = require("../models/irrVerbBot/User")
const MessageModel = require("../models/irrVerbBot/Message")
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
		"chat_id": req.body.chat_id,
		"user_id": req.body.user_id,
		"text": req.body.text
	});
	
	await newMessage.save();	

	let botResponse = new MessageModel({
		"chat_id": req.body.chat_id,
		"user_id": "627e4a7d6fa530de58310a6d",
		"text": "duirt tú, '" + req.body.text + "'"
	}) 

	await botResponse.save();	
	console.log('botResponse:', botResponse)

	res.json({
		text: botResponse.text,
		user_id: botResponse.user_id,
		chat_id: botResponse.chat_id,
	});
})

module.exports = router;
