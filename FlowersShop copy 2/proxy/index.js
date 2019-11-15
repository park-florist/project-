const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
let port = 7000;
app.use(express.static(__dirname + "/public"));

const Item = require("./public/data").Item;
app.get("/items", (req, res) => {
  console.log("//// hi");
  
//   Item.find({})
//    .sort({ date: -1 })
   console.log("items inside the.Get server");
//   request("http://localhost:4005/", function(err, response, body) {
    Item.find({}).exec((err,content) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(content)});
  });


app.listen(port, () => console.log("proxy is listening on 7000"));

//console.log(`Server running on ${process.env.PORT} port, PID: ${process.pid}`);
