const express = require("express");
const {auth} = require('../middlewares/auth')

const router = express.Router();

const {privateRoute} = require('../controllers/private')

router.get("/priv", auth ,privateRoute)

module.exports = router;