const express = require("express");
const { controllerWrapper } = require("../../services");
const { addRewies } = require("../../controllers/addRewie");
const { handleUpload } = require("../../middlewares/uploadCloud");



const router = express.Router();

router.post("/", handleUpload, controllerWrapper(addRewies));

module.exports = router;