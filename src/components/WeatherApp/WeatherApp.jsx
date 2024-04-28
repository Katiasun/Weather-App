import React from "react";
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

  function searchWeather() {
    const inputValue = document.getElementsByClassName("cityInput");
    if (inputValue[0].value === 0) {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue[0].value}&units=Metric&appid=3512477515ba15b05eddaafcb9f76d39`;
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={searchWeather}>
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
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
