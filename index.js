var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoDB
mongoose.connect('mongodb://localhost/rest_test');


//express
var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//Routes
app.get('/',function(req,res){
  res.send('working')
});
app.use('/api',require('./routes/api'));


//Start server
app.listen(3000);
console.log('node is running on port 3000')
