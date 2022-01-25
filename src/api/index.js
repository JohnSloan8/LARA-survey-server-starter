const express = require('express');
const emojis = require('./emojis');
const router = express.Router();
const mongoose = require("mongoose")
const CreatedSurveyModel = require("../models/CreatedSurveys")
const CoordModel = require("../models/PictureBookCoords")

mongoose.connect("mongodb+srv://john:Mongojaguar1@laracluster0.wpvro.mongodb.net/LARA-survey?retryWrites=true&w=majority")

router.get("/getCreatedSurveys", (req, res) => {
	CreatedSurveyModel.find({}, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})

router.get("/getSurveyById/:id", (req, res) => {
	CreatedSurveyModel.findById(req.params.id, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})

router.post("/createSurvey", async (req, res) => {
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


router.get("/getCoord", (req, res) => {
	CoordModel.find({}, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})

router.post("/createCoord", async (req, res) => {
	console.log('req.body:', req.body)
	const coord = req.body;
	const newCoord = new CoordModel(coord);
	await newCoord.save();
	res.json(coord);
})

router.get("/getCoordByURL/:id", (req, res) => {
	CoordModel.findById(req.params.id, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})

module.exports = router;
