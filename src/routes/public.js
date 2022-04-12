const express = require("express");

const router = express.Router();

const {publicRoute} = require('../controllers/public')

router.route("/pub").get(publicRoute)

module.exports = router;