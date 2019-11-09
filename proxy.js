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
// app.use(express.static(__dirname + "../M1/client/dist"));
// app.use(express.static(__dirname + "../M1/server.js"));
// app.use(express.static(__dirname + "../M1/node_modules"));

// var Serverone = "http://localhost:4000/";
// app.all("./M1/sever.js", function(req, res) {
//   console.log("server ali is running");
//   apiProxy.web(req, res, { target: Serverone });
// });
// app.get("/", (req, res) => {
//   console.log("//// hi");
//   request("http://localhost:4000/", function(err, response, body) {
//     if (!err && response.statusCode === 200) {
//       // console.log(body, "body");
//       res.send(body);
//     }
//     if (err) {
//       console.log(err);
//     }
//   });
// });

app.listen(port, () => console.log("proxy is listening on 7000"));

//console.log(`Server running on ${process.env.PORT} port, PID: ${process.pid}`);
