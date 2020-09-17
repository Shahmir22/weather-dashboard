const apiKey = "&appid=84d5d594c8842f1a8ba61cc7db4edf08";
var forecastUrl = "http://api.openweathermap.org/data/2.5/weather?q="
var fiveDayUrl = "http://api.openweathermap.org/data/2.5/forecast?q="


$(document).ready(function () {

    //click function to grab user input
    $("#search-btn").on("click", function () {
        var userInput = $("#city-input").val();

        console.log(userInput);
        searchWeather(userInput);
        //getForcast(userInput);

    })

    //make a current weather ajax call
    function searchWeather(city) {
        $.ajax({
            type: "GET",
            url: forecastUrl + city + apiKey
        }).then(function (data) {

            var displayInfo = `<p class="city">City: ${data.name}</p>
            <p>Temp: ${data.main.temp}</p> <p>humidity: ${data.main.humidity}</p> <p>wind speed: ${data.wind.speed}</p>`;
            $("#current-weather-data").html(displayInfo);
            uvIndex(data.coord.lat, data.coord.lon);
        })
    }

    function example() {

    };

    function uvIndex(lat, lon) {
        var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon;
        $.ajax({
            type: "GET",
            url: uvURL + apiKey
        }).then(function (data) {
            console.log(data);
        })
    }
})