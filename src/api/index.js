const express = require("express");
const cors = require("cors");
const irrVerbBot = require("./irrVerbBot");
const router = express.Router();

router.use(cors());
router.use("/irrVerbBot", irrVerbBot);
// router.use("/storyData", storyData);

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

module.exports = router;
