const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  try {
    const api_key = "2c58ee2dc33784a2788795ffd5ed5813";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then((response) =>
      response.json()
    );
    console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    const weatherCondition = weather_data.weather[0].main;
    if (weatherCondition === "Clouds") {
      weather_img.src = "cloud.png";
    } else if (weatherCondition === "Clear") {
      weather_img.src = "./clear.png";
    } else if (weatherCondition === "Snow") {
      weather_img.src = "./snow.png";
    } else if (weatherCondition === "Mist") {
      weather_img.src = "./mist.png";
    } else if (weatherCondition === "Rain") {
      weather_img.src = "./rain.png";
    }
    console.log(weatherCondition);
  } catch (error) {
    weather_img.src = "404.png";
    console.log("Error 404", error.message);
    alert(error.message);
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
