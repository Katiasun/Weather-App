import React from "react";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import Search from "./components/NewWeatherApp/search/search";

export default function App() {
  return (
    <div className="container">
      <Search />
      {/* <WeatherApp /> */}
    </div>
  );
}
