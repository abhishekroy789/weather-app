import React, { useEffect, useState } from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const WeatherApp = () => {
  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [userLocation, setuserLocation] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [country, setCountry] = useState("");
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await res.data;

      setDegrees(data.main.temp);
      setLocation(data.name);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setCountry(data.sys.country);
      setMaxTemp(data.main.temp_max);
      setMinTemp(data.main.temp_min);
      setFeelsLike(data.main.feels_like);
      setDataFetched(true);
    } catch (err) {
      console.log(err);
      alert("Please enter a valid location");
    }
  };

  const defaultDataFetched = async () => {
    if (!dataFetched) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=bhilai&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await res.data;

      setDegrees(data.main.temp);
      setLocation(data.name);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setCountry(data.sys.country);
      setMaxTemp(data.main.temp_max);
      setMinTemp(data.main.temp_min);
      setFeelsLike(data.main.feels_like);
    }
  };

  useEffect(() => {
    defaultDataFetched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var showDate = new Date();
  var displayDate = showDate.toDateString();
  var displayTime = showDate.getHours() + ":" + showDate.getMinutes();

  return (
    <div className="weather-container">
      <form className="search-bar" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Enter your city..."
          className="search-value"
          onChange={(e) => setuserLocation(e.target.value)}
        />
        <div className="search-icon" onClick={fetchData}>
          <FiSearch />
        </div>
      </form>
      <div className="weather-details">
        <div className="weather-location">
          {location}, {country}
        </div>
        <div className="local-time">
          {displayDate} | {displayTime}
        </div>
        <div className="current-weather">
          <div className="temperature">{degrees}°C</div>
          <span className="temp-icon">
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="weather icon"
            />
          </span>
        </div>
        <div className="min-max-temp">
          <span>
            <FiSearch /> {minTemp}°C / <FiSearch /> {maxTemp}°C | Feels Like :{" "}
            {feelsLike}
            °C
          </span>
        </div>
        <div className="weather-description">{description}</div>
      </div>
    </div>
  );
};

export default WeatherApp;
