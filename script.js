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
        // console.dir(data);
        // console.log();
        dateEl.text("City: " + data.name);
        tempEl.children()[0].innerText = data.main.temp;
        windEl.children()[0].innerText = data.wind.speed;
        humidityEl.children()[0].innerText = data.main.humidity;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,daily,hourly,alerts&appid=${apiKey}`)
            .then(responseOne => responseOne.json())
            .then(dataOne => { 
                
                // console.dir(dataOne);
                // console.dir(dataOne.main);
                // console.log(tempEl, windEl, cityEl, humidityEl)
                // tempEl.children("span").text() = dataOne.main.temp;                
                // cityEl.children("span").text() = dataOne.main.city;
                // humidityEl.children("span").text() = dataOne.main.humidity;
                // windEl.children("span").text() = dataOne.main.temp;
                //tempEl[0].innerText=dataOne.main.temp
                //cityEl[0].innerText=dataOne.main.city
                




            })
    })

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.dir(data)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,current, hourly,alerts&appid=${apiKey}`)
            .then(responseOne => responseOne.json())
            .then(dataOne => {
                console.dir(dataOne.daily[0]);
                console.dir(dataOne.daily[1]);
                console.dir(dataOne.daily[2]);
                console.dir(dataOne.daily[3]);
                console.dir(dataOne.daily[4]);
                console.log(dataOne);
                
                for(let k = 0; k<5; k++){
                    let fiveDay = document.querySelectorAll('.container') ;
                    let temp;
                    let wind;
                    let humidity;
                    let uv;

                    temp = dataOne.daily[k].temp.day;
                    wind = dataOne.daily[k].wind_speed;
                    humidity = dataOne.daily[k].humidity;
                    uv = dataOne.daily[k].uvi;

                    // console.log(element.children);
                    fiveDay[k].children[1].innerText = "temp:" + temp;
                    fiveDay[k].children[2].innerText = "wind:" + wind;
                    fiveDay[k].children[3].innerText = "humidity:" + humidity;
                    fiveDay[k].children[4].innerText = "uv:" + uv;
                   

                }


            })
    })
}

const buttonName = document.getElementById('searchInput');



searchCityButtonEl.on( "submit",function(event) { 
    event.preventDefault() 
    console.dir(event)
    searchCity(event.target[0].value);
    console.log(searchCityButtonEl[0][0].value);
    let buttonTitle = searchCityButtonEl[0][0].value;
    let newLi = document.createElement('li');
    let newButton = document.createElement('button');
    newLi.appendChild(newButton);
    newButton.innerText = buttonTitle;
    newButton.classList.add('search-items');
    searchButtonsEl.append(newLi);
    
})


    searchCity("Dallas")


