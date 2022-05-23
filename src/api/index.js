const express = require('express');
const irrVerbBot = require('./irrVerbBot');
const router = express.Router();
const mongoose = require("mongoose")
const cors = require('cors')

router.use(cors())
router.use('/irrVerbBot', irrVerbBot);

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

module.exports = router;
