const mongoose = require("mongoose")

const CoordsSchema = new mongoose.Schema({
	url: {
    type: Array,
    required: true,
  }
})

const CoordsModel = mongoose.model("Coords", CoordsSchema)
module.exports = CoordsModel
