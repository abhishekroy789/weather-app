import React from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";

const WeatherApp = () => {
  return (
    <div className="weather-container">
      <form className="search-bar">
        <input
          type="text"
          placeholder="Enter your city..."
          className="search-value"
        />
        <div className="search-icon">
          <FiSearch />
        </div>
      </form>
      <div className="weather-details">
        <div className="weather-location">Bhilai, IN</div>
        <div className="local-time">
          Friday, 04 Nov 2022 | Local time : 02:08 PM
        </div>
        <div className="current-weather">
          <div className="temperature">25 *</div>
          <div className="temp-icon">
            <FiSearch />
          </div>
        </div>
        <div className="min-max-temp">
          <span>
            <FiSearch /> 25* / <FiSearch /> 25* | Feels Like 25*
          </span>
        </div>
        <div className="weather-description">clear</div>
      </div>
      <div className="sun-set-rise">
        <div className="sunrise">
          <span>
            <FiSearch />
          </span>
          <p>5:21 am</p>
          <p>Sun Rise</p>
        </div>
        <div className="sunrise">
          <span>
            <FiSearch />
          </span>
          <p>6:21 pm</p>
          <p>Sun Set</p>
        </div>
      </div>
      <div className="other-details">
        <span>
          <FiSearch /> Humidity : 50%
        </span>
        <span>
          <FiSearch /> Wind Speed : 5kmph
        </span>
      </div>
    </div>
  );
};

export default WeatherApp;
