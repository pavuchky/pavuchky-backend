const { controllerWrapper } = require("./controller-wrapper.service");
const { createHttpException } = require("./create-http-exception.service");







module.exports = {
    createHttpException,
    controllerWrapper,
};