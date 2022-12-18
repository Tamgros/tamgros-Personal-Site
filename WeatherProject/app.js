const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/WeatherProject'));

app.get("/", function(req,res){
    console.log("we here in weatherproject");
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req,res){
    console.log(req.body.cityName);

    const query = req.body.cityName;
    const apiKey = "cf96fc4a32798930d65e01cfcf2890b8";
    const unit = "metric";

    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey;
    https.get(weatherUrl, function(response){
        console.log(response.statusCode);
        console.log("hello");

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon 
            console.log(icon);
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>weather is " + weatherDescription + "</p>");
            res.write("<h1>The temp in" + query + " is " + temp + " deg C</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    });

});

app.post("/WeatherProject", function(req,res){
    console.log(req);
    res.send('hey');
});

app.listen(3000, function() {
    console.log("Server up and runing on 3000");
});