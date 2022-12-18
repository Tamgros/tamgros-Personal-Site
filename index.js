const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/WeatherProject", function(req,res){
    res.sendFile(__dirname + "/WeatherProject/index.html");
});

// TODO: instart app.post("/WeatherProject", soemthign?)


app.get("/Drums", function(req,res){
    res.sendFile(__dirname + "/Drum Kit Starting Files/index.html");
});


app.get("/Balance", function(req,res){
    res.sendFile(__dirname + "/jQuery/index.html");
});

app.listen(3000, function() {
    console.log("Server up and runing on 3000");
});