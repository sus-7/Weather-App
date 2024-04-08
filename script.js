const API_KEY="846835b5944fd4fcb97a2f94e760e085"

const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city=document.querySelector(".search input");
const searchBTN=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather weather-icon");

async function getWeather(city) {
    const res=await fetch(API_URL + city + `&appid=${API_KEY}`);
    var data=await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sunny.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }

    document.querySelector(".weather").style.display="block"
}

searchBTN.addEventListener("click", ()=>{
    getWeather(city.value);
})
