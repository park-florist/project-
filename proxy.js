const express = require('express');
var sys = require('sys');
var url = require('url');
var http = require('http');
var request = require('request');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var apiProxy = httpProxy.createProxyServer();
var app = express();

app.use((req,res,next)=>{
    // res.handler('Access-Conrtoll-Aloow-Origin');
    next();
})

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/server'));
app.use(express.static(__dirname + '/node_modules'));

var Serverone = 'http://localhost:3000/';
app.all("/sever/index.js", function (req, res) {
    console.log('server ali is running');
    apiProxy.web(req, res, { target: Serverone })

})
app.get('/', (req, res) => {
    console.log("/////////////////////////// hi")
    request('http://localhost:3000/',function(err,response,body){
        if(!err && response.statusCode===200){
            console.log(body,"body")
            res.send(body);

        }
        if(err){
            console.log(err)
        }
    })
    // var Serverone = ;
    // app.all("/sever/index.js", function (req, res) {
    //     console.log('server ali is running');
    //     apiProxy.web(req, res, { target: Serverone })

    // })
});



app.listen(8000, () => console.log("proxy is listening on 8000"));

console.log(`Server running on ${process.env.PORT} port, PID: ${process.pid}`);


