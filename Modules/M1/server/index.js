
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path =require ('path'); 
const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({ extended: false }));

 app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/items', function (req, res) {
	console.log(req.body , 'THIS IS THE ITEM');
	// items.saving(req.body);

});
app.get('/items', function (req, res) {
	console.log("hi from GET")


     
});
   

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

