import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <div className="float-left">
            <span className="temperature">19</span>
            <span className="units">
              °C | <a href="weather.js">°F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 0%</li>
          <li>Humidity: 77%</li>
          <li>Wind: 8 km/h</li>
        </ul>
      </div>
    </div>
  );
}
