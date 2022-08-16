
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(city_name){
    //let city_name = document.querySelector("#cityName").value;
            // Make a request for a user with a given ID
            axios.get(`https://api.weatherapi.com/v1/current.json?key=86a17675a3064c7084a162751221008&q=${city_name}&aqi=no`)
                .then(function (response) {
                    // handle success
                    let weatherData = response.data;
                    console.log(weatherData);
                    document.querySelector('.city').innerHTML = `${weatherData.location.name}, ${weatherData.location.region}`;
                    document.querySelector('.date').innerHTML = `${weatherData.current.last_updated}`;
                    document.querySelector('.temp').innerHTML = `${weatherData.current.feelslike_c} °C`;
                    document.querySelector('.weather').innerHTML = `${weatherData.current.condition.text}`;
                    console.log(document.querySelector('#img').src=`https://${weatherData.current.condition.icon}`);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
}