const express = require("express");
const cors = require("cors");
const router = require("./router");
const { errorsHandler, logging } = require("./middleware");
const app = express();
app.use(express.json());
app.use("/api", router);
app.use(errorsHandler.errorHandler);
app.use(logging);
/*
app.use(
  cors({
    origin: "*",
  })
);*/

module.exports = app;
