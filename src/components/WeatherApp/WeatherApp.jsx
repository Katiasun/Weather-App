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
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      setWeatherData(data);
      setErrorMsg("");
    } catch (error) {
      setWeatherData(null);
      setErrorMsg("Failed to fetch weather data. Please try again.");
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      searchWeather();
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="cityInput"
          placeholder="Search"
        />
        <div className="search-icon" onClick={handleSearch}>
          <img src={search_icon} alt="search" />
        </div>
      </div>

      {errorMsg && <div className="error-message">{errorMsg}</div>}

      {weatherData && (
        <>
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
        </>
      )}
    </div>
  );
}
