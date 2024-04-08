const API_KEY = "846835b5944fd4fcb97a2f94e760e085";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById("city");
const searchBTN = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const res = await fetch(API_URL + city + `&appid=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/cloudy.png";
            break;
        case "Clear":
            weatherIcon.src = "images/sunny.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Haze":
            weatherIcon.src = "images/haze.png";
            break;
        default:
            weatherIcon.src = ""; 
    }

    document.querySelector(".weather").style.display = "block";
}

searchBTN.addEventListener("click", (event) => {
    event.preventDefault();
    getWeather(cityInput.value);
});
