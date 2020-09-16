//user input to search for city
//make sure we have weather api

//use api to update html with city/weather info
//use api to update html with 5day forecast

//make a list of cities for history 

const apiKey = "&appid=84d5d594c8842f1a8ba61cc7db4edf08";
var forecastUrl = "http://api.openweathermap.org/data/2.5/weather?q="
var fiveDayUrl = "http://api.openweathermap.org/data/2.5/forecast?q="
var currentUvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" +
    apiKey +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude;
// var cityLatitude = data.latitude
// var cityLongitude = data.longitude

$(document).ready(function () {

    //click function to grab user input
    $("#search-btn").on("click", function () {
        var userInput = $("#city-input").val();

        console.log(userInput);
        searchWeather(userInput);
        getForcast(userInput);
        //currentUv(userInput);
    })

    //make a current weather ajax call
    function searchWeather(city) {
        $.ajax({
            type: "GET",
            url: forecastUrl + city + apiKey
        }).then(function (data) {
            console.log(data);
            name
            console.log(data.name);
            //date
            temp
            console.log(data.main.temp);
            humidity
            console.log(data.main.humidity);
            windSpeed
            console.log(data.wind.speed);
            uvIndex
            console.log(data.main.temp);
        })
    }

    function getForcast(city) {
        $.ajax({
            type: "GET",
            url: fiveDayUrl + city + apiKey
        }).then(function (data) {
            console.log(data);
        })
    }

    // function currentUv(city) {
    //     $.ajax({
    //         type: "GET",
    //         url: currentUvURL + city + apiKey + cityLatitude + cityLongitude
    //     }).then(function (data) {
    //         uvIndex
    //         console.log(data);
    //     })
    // }






})