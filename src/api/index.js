const express = require('express');
const emojis = require('./emojis');
const router = express.Router();
const mongoose = require("mongoose")
const CreatedSurveyModel = require("../models/CreatedSurveys")

mongoose.connect("mongodb+srv://john:Mongojaguar1@laracluster0.wpvro.mongodb.net/LARA-survey?retryWrites=true&w=majority")

router.get("/api/v1/getCreatedSurveys", (req, res) => {
	CreatedSurveyModel.find({}, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})

router.post("/api/v1/createSurvey", async (req, res) => {
	console.log('req.body:', req.body)
	const createdSurvey = req.body;
	const newCreatedSurvey = new CreatedSurveyModel(createdSurvey);
	await newCreatedSurvey.save();
	res.json(createdSurvey);
})

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);

module.exports = router;
