

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require('path');
var favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.use(express.static("public/"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

  res.sendFile(__dirname + "/home.html");

});
app.get("/test", function(req,res){

  res.sendFile(__dirname + "/test.html");

});
app.get("/learn", function(req,res){

  res.sendFile(__dirname + "/learn.html");

});

app.get("/tentang", function(req,res){

  res.sendFile(__dirname + "/tentang.html");

});

app.get("/carabermain", function(req,res){

  res.sendFile(__dirname + "/carabermain.html");

});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started at port 3000");
});
 
