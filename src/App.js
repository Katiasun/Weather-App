import React from "react";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import Search from "./components/NewWeatherApp/search/search";
import "./App.css";

export default function App() {
  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* <WeatherApp /> */}
    </div>
  );
}
