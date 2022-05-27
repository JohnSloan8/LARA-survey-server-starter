const express = require('express');
const ChatModel = require("../models/irrVerbBot/Chat")
const UserModel = require("../models/irrVerbBot/User")
const MessageModel = require("../models/irrVerbBot/Message")
const router = express.Router();
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/irrVerbBotDB")

router.get("/getMessages", async (req, res) => {
	MessageModel.find({"chat_id": req.query.chat_id}, async (err, result) => {
		if (err) {
			res.json(err)
		} else {
			let messages = []
			result.forEach(m => {
				messages.push(m)
			})
			res.json(messages)
		}
	})
})

router.post("/createMessage", async (req, res) => {

	const newMessage = new MessageModel({
		"chat_id": req.body.msg.chat_id,
		"user_id": req.body.msg.user_id,
		"verb": req.body.msg.verb,
		"tense": req.body.msg.tense,
		"form": req.body.msg.form,
		"question_no": req.body.msg.question_no,
	});
	await newMessage.save();	


	res.json(newMessage);

})

router.post("/updateMessage", async (req, res) => {

	console.log('req.body:', req.body)	
	let updatedMessage = req.body.msg
	MessageModel.updateOne({_id: updatedMessage._id }, {text: updatedMessage.text, correct: updatedMessage.correct}, async (err, result) => {
		console.log('result:', result)	
		//await newMessage.save();	
	})

	//res.json(updatedMessage);
	res.json({
		"this": "that"
	});

})

module.exports = router;
