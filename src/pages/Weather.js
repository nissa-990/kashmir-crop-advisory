import API_URL from "../api";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

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

import { FaBell, FaRobot, FaTimes, FaChevronDown } from "react-icons/fa";

import "./Weather.css";


// ======================================================
// DISTRICTS
// ======================================================

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


// ======================================================
// DISTRICT COORDINATES
// ======================================================

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


// ======================================================
// WEATHER DESCRIPTIONS
// ======================================================

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


// ======================================================
// WEATHER ICON
// ======================================================

const getWeatherIcon = (code, size = 110) => {
  if (code === 0) {
    return <WiDaySunny size={size} color="#FDB813" />;
  }

  if (code === 1 || code === 2) {
    return <WiCloud size={size} color="#ffffff" />;
  }

  if (code === 3) {
    return <WiCloud size={size} color="#e3e3e3" />;
  }

  if (code >= 45 && code <= 48) {
    return <WiFog size={size} color="#d8d8d8" />;
  }

  if (code >= 51 && code <= 67) {
    return <WiRain size={size} color="#4FC3F7" />;
  }

  if (code >= 71 && code <= 77) {
    return <WiSnow size={size} color="#ffffff" />;
  }

  if (code >= 80 && code <= 82) {
    return <WiRain size={size} color="#4FC3F7" />;
  }

  if (code >= 95) {
    return <WiThunderstorm size={size} color="#FFD54F" />;
  }

  return <WiCloud size={size} />;
};


// ======================================================
// DAY NAME
// ======================================================

const getDayName = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-IN", {
    weekday: "short",
  });
};


// ======================================================
// WEATHER COMPONENT
// ======================================================

function Weather() {

  const [district, setDistrict] = useState("Srinagar");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [weather, setWeather] = useState(null);

  const [advisory, setAdvisory] = useState(null);

  const [showAdvisory, setShowAdvisory] = useState(false);

  const [advisoryLoading, setAdvisoryLoading] = useState(false);

  const [advisoryError, setAdvisoryError] = useState("");

  const [error, setError] = useState("");

  const dropdownRef = useRef(null);


  // ======================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ======================================================

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);


  // ======================================================
  // FETCH WEATHER
  // ======================================================

  useEffect(() => {

    const fetchWeather = async () => {

      try {

        const { latitude, longitude } =
          districtCoordinates[district];


        const url =
          `https://api.open-meteo.com/v1/forecast?` +
          `latitude=${latitude}` +
          `&longitude=${longitude}` +
          `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,surface_pressure` +
          `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
          `&forecast_days=7`;


        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Weather API request failed.");
        }


        const data = await response.json();

        setWeather(data);

        setError("");


      } catch (err) {

        console.error("Weather error:", err);

        setError("Unable to fetch weather.");

      }

    };


    fetchWeather();

  }, [district]);


  // ======================================================
  // OPEN AI ADVISORY
  // ======================================================

  const openAdvisory = async () => {

    // Open modal immediately
    setShowAdvisory(true);

    // Clear previous advisory
    setAdvisory(null);

    // Clear previous error
    setAdvisoryError("");

    // Start loading
    setAdvisoryLoading(true);


    try {

      if (!weather) {
        throw new Error("Weather data is not available yet.");
      }


      const advisoryResponse = await fetch(
        `${API_URL}/weather-advisory`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            district,
            current: weather.current,
            daily: weather.daily,
          }),
        }
      );


      // Try to read JSON response
      let advisoryData;

      try {

        advisoryData = await advisoryResponse.json();

      } catch (jsonError) {

        throw new Error(
          "The backend returned an invalid response."
        );

      }


      // Backend returned HTTP error
      if (!advisoryResponse.ok) {

        throw new Error(
          advisoryData?.error ||
          `Backend error (${advisoryResponse.status})`
        );

      }


      // Backend response does not contain advisory
      if (
        !advisoryData ||
        typeof advisoryData.advisory !== "string" ||
        advisoryData.advisory.trim() === ""
      ) {

        throw new Error(
          "The AI backend returned an empty advisory."
        );

      }


      // Successful advisory
      setAdvisory({
        advisory: advisoryData.advisory.trim(),
      });


    } catch (err) {

      console.error("AI Advisory error:", err);

      setAdvisoryError(
        err.message ||
        "Unable to generate the AI advisory."
      );

    } finally {

      setAdvisoryLoading(false);

    }

  };


  // ======================================================
  // CLOSE ADVISORY
  // ======================================================

  const closeAdvisory = () => {

    setShowAdvisory(false);

    setAdvisory(null);

    setAdvisoryError("");

  };


  // ======================================================
  // WEATHER ERROR
  // ======================================================

  if (error) {

    return (

      <div className="weather-container">

        <div className="weather-card">

          <h2>Weather Updates</h2>

          <p style={{ color: "red" }}>
            {error}
          </p>

        </div>

      </div>

    );

  }


  // ======================================================
  // WEATHER LOADING
  // ======================================================

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


  // ======================================================
  // MAIN PAGE
  // ======================================================

  return (

    <>


      {/* ==================================================
          AI ADVISORY MODAL
      ================================================== */}

      {showAdvisory &&

        ReactDOM.createPortal(

          <div
            className="modern-modal-overlay"
            onClick={closeAdvisory}
          >

            <div
              className="modern-modal-card"
              onClick={(e) => e.stopPropagation()}
            >


              {/* HEADER */}

              <div className="modern-modal-header">

                <div className="modal-title-group">

                  <div className="ai-badge-icon">
                    <FaRobot />
                  </div>


                  <div>

                    <h2>
                      AI Crop Advisory
                    </h2>

                    <p className="modal-subtitle-text">
                      Real-time agricultural insights for {district}
                    </p>

                  </div>

                </div>


                <button
                  className="modern-close-btn"
                  onClick={closeAdvisory}
                >
                  <FaTimes />
                </button>

              </div>


              {/* BODY */}

              <div className="modern-modal-body">


                {/* LOADING */}

                {advisoryLoading && (

                  <div className="modal-loading-state">

                    <div className="spinner"></div>

                    <p>
                      Generating smart agricultural advisory...
                    </p>

                  </div>

                )}


                {/* ERROR */}

                {!advisoryLoading && advisoryError && (

                  <div className="modern-advisory-content">

                    <strong>
                      ⚠️ Unable to generate advisory
                    </strong>

                    <br />
                    <br />

                    {advisoryError}

                    <br />
                    <br />

                    Please try again in a moment.

                  </div>

                )}


                {/* SUCCESS */}

                {!advisoryLoading &&
                  !advisoryError &&
                  advisory && (

                    <div className="modern-advisory-content">

                      {advisory.advisory}

                    </div>

                  )}

              </div>

            </div>

          </div>,

          document.body

        )}



      {/* ==================================================
          MAIN WEATHER CONTAINER
      ================================================== */}

      <div className="weather-container">


        <h1 className="page-title">
          🌤 Weather Updates
        </h1>


        <p className="page-subtitle">
          Get the latest weather updates for Kashmir Districts
        </p>


        {/* ==================================================
            DISTRICT SELECTOR
        ================================================== */}

        <div className="selector-box">

          <label>
            Select District:
          </label>


          <div
            className="custom-select-wrapper"
            ref={dropdownRef}
          >

            <button
              type="button"
              className="custom-select-trigger"
              onClick={() =>
                setIsDropdownOpen(!isDropdownOpen)
              }
            >

              <span>
                {district}
              </span>


              <FaChevronDown
                className={`select-chevron ${
                  isDropdownOpen ? "open" : ""
                }`}
              />

            </button>


            {isDropdownOpen && (

              <ul className="custom-select-menu">

                {districts.map((item) => (

                  <li
                    key={item}
                    className={`custom-select-option ${
                      item === district ? "selected" : ""
                    }`}
                    onClick={() => {

                      setDistrict(item);

                      setIsDropdownOpen(false);

                    }}
                  >

                    {item}

                  </li>

                ))}

              </ul>

            )}

          </div>

        </div>


        {/* ==================================================
            AI ADVISORY NOTIFICATION
        ================================================== */}

        <div
          className="advisory-notification"
          onClick={openAdvisory}
        >

          <div className="notification-icon">

            <FaBell />

            <span className="notification-badge">
              1
            </span>

          </div>


          <div className="notification-text">

            <h3 className="notification-title">
              Weather Alert
            </h3>

            <p className="notification-subtitle">
              Click here to view weather-based crop recommendations.
            </p>

          </div>

        </div>


        {/* ==================================================
            WEATHER MAIN CARD
        ================================================== */}

        <div className="weather-card">


          <div className="top-section">


            {/* LEFT */}

            <div className="left-section">

              <h2>
                {district}
              </h2>


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

                <h1>
                  {weather.current.temperature_2m}°C
                </h1>


                <div className="big-icon">

                  {getWeatherIcon(
                    weather.current.weather_code,
                    120
                  )}

                </div>

              </div>


              <h3 className="weather-description">

                {
                  weatherDescriptions[
                    weather.current.weather_code
                  ]
                }

              </h3>

            </div>


            {/* RIGHT */}

            <div className="right-section">

              <div className="weather-info-grid">


                {/* FEELS LIKE */}

                <div className="info-item">

                  <WiThermometer
                    size={35}
                    color="#3b82f6"
                  />

                  <div>

                    <span>
                      Feels Like
                    </span>

                    <h4>
                      {weather.current.apparent_temperature}°C
                    </h4>

                  </div>

                </div>


                {/* HUMIDITY */}

                <div className="info-item">

                  <WiHumidity
                    size={35}
                    color="#3b82f6"
                  />

                  <div>

                    <span>
                      Humidity
                    </span>

                    <h4>
                      {weather.current.relative_humidity_2m}%
                    </h4>

                  </div>

                </div>


                {/* WIND */}

                <div className="info-item">

                  <WiStrongWind
                    size={35}
                    color="#3b82f6"
                  />

                  <div>

                    <span>
                      Wind Speed
                    </span>

                    <h4>
                      {weather.current.wind_speed_10m} km/h
                    </h4>

                  </div>

                </div>


                {/* PRESSURE */}

                <div className="info-item">

                  <WiThermometer
                    size={35}
                    color="#3b82f6"
                  />

                  <div>

                    <span>
                      Pressure
                    </span>

                    <h4>
                      {Math.round(
                        weather.current.surface_pressure
                      )} hPa
                    </h4>

                  </div>

                </div>


                {/* UV */}

                <div className="info-item">

                  ☀️

                  <div>

                    <span>
                      UV Index
                    </span>

                    <h4>
                      Moderate
                    </h4>

                  </div>

                </div>


                {/* VISIBILITY */}

                <div className="info-item">

                  👁️

                  <div>

                    <span>
                      Visibility
                    </span>

                    <h4>
                      10 km
                    </h4>

                  </div>

                </div>


              </div>

            </div>

          </div>


          {/* ==================================================
              7 DAY FORECAST
          ================================================== */}

          <h2 className="forecast-heading">
            7-Day Forecast
          </h2>


          <div className="forecast-cards">

            {weather.daily.time.map((date, index) => (

              <div
                className="forecast-card"
                key={date}
              >

                <h4>
                  {getDayName(date)}
                </h4>


                <p className="forecast-date">

                  {new Date(date).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                    }
                  )}

                </p>


                <div className="forecast-icon">

                  {getWeatherIcon(
                    weather.daily.weather_code[index],
                    55
                  )}

                </div>


                <p className="forecast-desc">

                  {
                    weatherDescriptions[
                      weather.daily.weather_code[index]
                    ]
                  }

                </p>


                <div className="forecast-temp">

                  <span className="max-temp">

                    {Math.round(
                      weather.daily.temperature_2m_max[index]
                    )}°

                  </span>


                  <span className="slash">
                    /
                  </span>


                  <span className="min-temp">

                    {Math.round(
                      weather.daily.temperature_2m_min[index]
                    )}°

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </>

  );

}


export default Weather;