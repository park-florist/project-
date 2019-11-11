const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let app = express();

// app.use(express.static("client/dist"));
// app.use(bodyParser.urlencoded({ extended: false }));
const URI = require("../config/keys").mongoURI;
mongoose.connect(URI, { useNewUrlParser: true });
app.use(bodyParser.json({ extended: false }));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected db!");
});
let port = process.env.PORT || 7001;
app.listen(port, function() {
  console.log("hi from 7001");
  console.log("lestining from 7001");
});
