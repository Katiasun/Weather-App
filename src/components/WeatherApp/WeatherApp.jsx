import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

export default function WeatherApp() {
  let api_key = "3512477515ba15b05eddaafcb9f76d39";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  const searchWeather = async () => {
    const inputValue = document.getElementsByClassName("cityInput");
    if (inputValue[0].value === 0) {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "&#37;";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "\u00B0C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clear_icon);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWeatherIcon(cloud_icon);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWeatherIcon(drizzle_icon);
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWeatherIcon(drizzle_icon);
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWeatherIcon(rain_icon);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWeatherIcon(rain_icon);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWeatherIcon(snow_icon);
    } else {
      setWeatherIcon(clear_icon);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={() => searchWeather()}>
          <img src={search_icon} alt="search" />
        </div>
      </div>

      <div className="weather-image">
        <img src={cloud_icon} alt="cloud" />
      </div>

      <div className="weather-temp">24</div>

      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img className="icon" src={humidity_icon} slt="#" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img className="icon" src={wind_icon} slt="#" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
