const express = require("express");
const router = require("./router");
const { errorsHandler, logging } = require("./middleware");
const app = express();
app.use(express.json());
app.use("/api", router);
app.use(errorsHandler.errorHandler);
app.use(logging);
module.exports = app;
