const apiKey = "ed4bae939c3f3a9dad43231fc703923c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchbox");
const searchBtn = document.querySelector("#searchbutton");
const weatherIcon = document.querySelector("#weather-icon");
const toggle = document.querySelector("#error");
toggle.style.display = "none";
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    if(response.status == 200){
        toggle.style.display = "none";
    }

    console.log(response.status);
    if(response.status == 404){
        document.querySelector("#error").style.display = "flex";
    }
    else{

        var data = await response.json();

        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp)  + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";


        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "/images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "/images/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "/images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "/images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "/images/mist.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "/images/snow.png";
        }
        
    }

    
    
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})