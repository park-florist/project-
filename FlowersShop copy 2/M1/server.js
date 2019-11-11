const express = require("express");
let app = express();
// var httpProxy = require("http-proxy");
// var Proxy1 = require("../proxy");
const bodyParser = require("body-parser");
app.use(express.static("client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("../public"));

//var proxy = httpProxy.createProxyServer(options);
let port = 4001;
app.listen(port, function() {
  console.log("hi from 4001");
  console.log("lestining from 4001");
});
