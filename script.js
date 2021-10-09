var dateEl = $("#date");
var searchButtonsEl = $("#searchButtons");
var cityEl = $("#city");
var tempEl = $("#temp");
var windEl = $("#wind");
var humidityEl = $("#humidity");
var uvindexEl = $("#uvindex");
var forecastBoxesEl = $("forecastBoxes");
var requestURLCurrent = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
var apiKey = "08157eb7bf124d84be0bcf2de1830379"
var searchCityButtonEl = $("#searchCityButton")


dateEl.val(moment().format("MMM Do YY"));

function searchCity(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.dir(data)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,daily,hourly,alerts&appid=${apiKey}`)
            .then(responseOne => responseOne.json())
            .then(dataOne => console.dir(dataOne))
    })

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.dir(data)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,current, hourly,alerts&appid=${apiKey}`)
            .then(responseOne => responseOne.json())
            .then(dataOne => console.dir(dataOne))
    })
}

searchCityButtonEl.on("submit",function(event) { 
    event.preventDefault() 
    console.dir(event)
    searchCity(event.target[0].value)})


    searchCity("Dallas")


