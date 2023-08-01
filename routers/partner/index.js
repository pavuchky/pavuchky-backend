const express = require("express");
const { controllerWrapper } = require("../../services");
const { addPartner } = require("../../controllers/addPartner");



const router = express.Router();

router.post("/", controllerWrapper(addPartner));

module.exports = router;