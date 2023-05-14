/** @format */

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function getWeatherCondition(response) {
  console.log(response);
}

function search(event) {
  event.preventDefault();

  let apiKey = "3b5f3e51ce51ffad1f79b84acf0944ed";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  //let cityElement = document.querySelector("#city");
  // let cityInput = document.querySelector("#city-input");
  //cityElement.innerHTML = cityInput.value;

  axios.get(apiUrl).then(getWeatherCondition);
}

function convertFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;

  temperatureElement.innerHTML = 66;
}

function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let searchForm = document.querySelector("#search-form");
let fahrenheitLink = document.querySelector("#fahrenheit-link");
let celsiusLink = document.querySelector("#celsius-link");

dateElement.innerHTML = formatDate(currentTime);
searchForm.addEventListener("submit", search);
fahrenheitLink.addEventListener("click", convertFahrenheit);
celsiusLink.addEventListener("click", convertCelsius);
