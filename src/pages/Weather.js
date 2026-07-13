import { useState, useEffect } from "react";
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";
import { FaBell } from "react-icons/fa";

import "./Weather.css";

const districts = [
  "Srinagar",
  "Anantnag",
  "Baramulla",
  "Budgam",
  "Bandipora",
  "Ganderbal",
  "Kupwara",
  "Kulgam",
  "Pulwama",
  "Shopian",
];

const districtCoordinates = {
  Srinagar: { latitude: 34.0837, longitude: 74.7973 },
  Anantnag: { latitude: 33.7311, longitude: 75.1487 },
  Baramulla: { latitude: 34.198, longitude: 74.3636 },
  Budgam: { latitude: 34.015, longitude: 74.7229 },
  Bandipora: { latitude: 34.4173, longitude: 74.6431 },
  Ganderbal: { latitude: 34.23, longitude: 74.78 },
  Kupwara: { latitude: 34.526, longitude: 74.261 },
  Kulgam: { latitude: 33.645, longitude: 75.019 },
  Pulwama: { latitude: 33.875, longitude: 74.899 },
  Shopian: { latitude: 33.715, longitude: 74.835 },
};

const weatherDescriptions = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Dense Drizzle",
  61: "Light Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  71: "Light Snow",
  73: "Snow",
  75: "Heavy Snow",
  80: "Rain Showers",
  81: "Heavy Showers",
  82: "Violent Rain",
  95: "Thunderstorm",
};

const getWeatherIcon = (code, size = 110) => {
  if (code === 0) return <WiDaySunny size={size} color="#FDB813" />;

  if (code === 1 || code === 2)
    return <WiCloud size={size} color="#ffffff" />;

  if (code === 3)
    return <WiCloud size={size} color="#e3e3e3" />;

  if (code >= 45 && code <= 48)
    return <WiFog size={size} color="#d8d8d8" />;

  if (code >= 51 && code <= 67)
    return <WiRain size={size} color="#4FC3F7" />;

  if (code >= 71 && code <= 77)
    return <WiSnow size={size} color="#ffffff" />;

  if (code >= 80 && code <= 82)
    return <WiRain size={size} color="#4FC3F7" />;

  if (code >= 95)
    return <WiThunderstorm size={size} color="#FFD54F" />;

  return <WiCloud size={size} />;
};

const getDayName = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-IN", {
    weekday: "short",
  });
};

function Weather() {
  const [district, setDistrict] = useState("Srinagar");
  const [weather, setWeather] = useState(null);
  const [advisory, setAdvisory] = useState(null);
  const [showAdvisory, setShowAdvisory] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { latitude, longitude } = districtCoordinates[district];

        const url =
          `https://api.open-meteo.com/v1/forecast?` +
          `latitude=${latitude}` +
          `&longitude=${longitude}` +
          `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,surface_pressure` +
          `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
          `&forecast_days=7`;

        const response = await fetch(url);

        const data = await response.json();

        setWeather(data);
        // Send weather data to Flask
const advisoryResponse = await fetch("http://localhost:5000/weather-advisory", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    district,
    current: data.current,
    daily: data.daily,
  }),
});

const advisoryData = await advisoryResponse.json();

console.log("AI Response:", advisoryData);

setAdvisory(advisoryData);

        setError("");
      } catch (err) {
        console.error(err);

        setError("Unable to fetch weather.");
      }
    };

    fetchWeather();
  }, [district]);
    if (error) {
    return (
      <div className="weather-container">
        <div className="weather-card">
          <h2>Weather Updates</h2>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-container">
        <div className="weather-card">
          <h2>Weather Updates</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="weather-container">

{showAdvisory && (
  <div
    className="advisory-overlay"
    onClick={() => setShowAdvisory(false)}
  >

    <div
      className="advisory-popup"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="popup-header">

        <h2>🔔 AI Crop Advisory</h2>

        <button
          className="close-popup"
          onClick={() => setShowAdvisory(false)}
        >
          ✕
        </button>

      </div>

      <div className="popup-content">

        {advisory ? (

          <pre>{advisory.advisory}</pre>

        ) : (

          <p>Loading advisory...</p>

        )}

      </div>

    </div>

  </div>
)}
    <h1 className="page-title">
      🌤 Weather Updates
    </h1>

    <p className="page-subtitle">
      Get the latest weather updates for Kashmir Districts
    </p>

    <div className="selector-box">

      <label>Select District:</label>

      <select
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      >
        {districts.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

    </div>

<div
  className="advisory-notification"
  onClick={() => setShowAdvisory(!showAdvisory)}
>

  <div className="notification-icon">
    <FaBell />
     <span className="notification-badge">
        1
    </span>
  </div>

  <div className="notification-text">
    <span className="notification-title">
     <h3>Weather Alert</h3> 
    </span>

    <span className="notification-subtitle">
      <p>Click here to view weather-based crop recommendations.</p>
    </span>
  </div>

</div>

    <div className="weather-card">

      <div className="top-section">


        <div className="left-section">

          <h2>{district}</h2>

          <p className="date-time">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
            {" | "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <div className="temperature-row">

            <h1>{weather.current.temperature_2m}°C</h1>

            <div className="big-icon">
              {getWeatherIcon(weather.current.weather_code, 120)}
            </div>

          </div>

          <h3 className="weather-description">
            {weatherDescriptions[weather.current.weather_code]}
          </h3>

        </div>

        <div className="right-section">
            <div className="weather-info-grid">

  <div className="info-item">
    <WiThermometer size={35} color="#3b82f6" />
    <div>
      <span>Feels Like</span>
      <h4>{weather.current.apparent_temperature}°C</h4>
    </div>
  </div>

  <div className="info-item">
    <WiHumidity size={35} color="#3b82f6" />
    <div>
      <span>Humidity</span>
      <h4>{weather.current.relative_humidity_2m}%</h4>
    </div>
  </div>

  <div className="info-item">
    <WiStrongWind size={35} color="#3b82f6" />
    <div>
      <span>Wind Speed</span>
      <h4>{weather.current.wind_speed_10m} km/h</h4>
    </div>
  </div>

  <div className="info-item">
    <WiThermometer size={35} color="#3b82f6" />
    <div>
      <span>Pressure</span>
      <h4>{Math.round(weather.current.surface_pressure)} hPa</h4>
    </div>
  </div>

  <div className="info-item">
    ☀️
    <div>
      <span>UV Index</span>
      <h4>Moderate</h4>
    </div>
  </div>

  <div className="info-item">
    👁️
    <div>
      <span>Visibility</span>
      <h4>10 km</h4>
    </div>
  </div>

</div>

</div>

</div>


<h2 className="forecast-heading">
  7-Day Forecast
</h2>

<div className="forecast-cards">
{weather.daily.time.map((date, index) => (
  <div className="forecast-card" key={date}>

    <h4>{getDayName(date)}</h4>

    <p className="forecast-date">
      {new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      })}
    </p>

    <div className="forecast-icon">
      {getWeatherIcon(weather.daily.weather_code[index], 55)}
    </div>

    <p className="forecast-desc">
      {weatherDescriptions[weather.daily.weather_code[index]]}
    </p>

    <div className="forecast-temp">

      <span className="max-temp">
        {Math.round(weather.daily.temperature_2m_max[index])}°
      </span>

      <span className="slash">
        /
      </span>

      <span className="min-temp">
        {Math.round(weather.daily.temperature_2m_min[index])}°
      </span>

    </div>

  </div>
))}

</div>

</div>

</div>
);
}

export default Weather;