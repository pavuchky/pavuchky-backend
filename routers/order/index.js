const express = require("express");
const { controllerWrapper } = require("../../services");
const { addOrder } = require("../../controllers/addOrder");



const router = express.Router();

router.post("/", controllerWrapper(addOrder));
// console.log('Received request to /');

module.exports = router;