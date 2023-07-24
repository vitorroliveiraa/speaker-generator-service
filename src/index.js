const db = require("./database/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const articleRouter = require("./route");

// const dotenv = require('dotenv');
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Node.js listening... ' + port);
})
// app.use("/articles", articleRouter);
