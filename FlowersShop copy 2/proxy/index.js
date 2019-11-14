const express = require("express");
// var sys = require("sys");
// var url = require("url");
// var http = require("http");
// var request = require("request");
// var httpProxy = require("http-proxy");
// var apiProxy = httpProxy.createProxyServer();
// var apiProxy = httpProxy.createProxyServer();
// var server1 = require("../M1/server.js");
var app = express();

// app.use((req, res, next) => {
//   // res.handler('Access-Conrtoll-Aloow-Origin');
//   next();
// });
let port = 7000;
app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log("proxy is listening on 7000"));

//console.log(`Server running on ${process.env.PORT} port, PID: ${process.pid}`);
