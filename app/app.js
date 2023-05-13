"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

app.set("views", "./src/views");
app.set("view engine", "ejs");

//라우팅
const home = require("./src/routes/home");
app.use("/", home);

module.exports = app;
