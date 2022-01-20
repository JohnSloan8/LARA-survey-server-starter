const mongoose = require("mongoose")

const CreatedSurveySchema = new mongoose.Schema({
	Name: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  Story: {
    type: String,
    required: true,
  },
  How should sentences be selected: {
    type: String,
    required: true,
  },
  How many sentences in survey: {
    type: String,
    required: true,
  },
})

const CreatedSurveyModel = mongoose.model("CreatedSurveys", CreatedSurveySchema)
module.exports = CreatedSurveyModel
