const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const orderRouter = require('./routers/order/index');
const partnerRouter = require('./routers/partner/index');
const rewieRouter = require('./routers/rewies/index');
const { errorHandlingMiddleware } = require("./middlewares/error-handling.middleware");



const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/order", orderRouter);
app.use("/partners", partnerRouter);
app.use("/rewie", rewieRouter);

app.use(errorHandlingMiddleware);

module.exports = app;

