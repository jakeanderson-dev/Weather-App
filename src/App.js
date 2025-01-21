import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  // State to hold the current date and time
  const [currentTime, setCurrentTime] = useState('');

  // Function to capitalize the first letter of each word
  const capitalizeWeatherDescription = (description) => {
    return description
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to fetch weather data
  const fetchWeatherData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=393e0ad784aed68d59c3300db59d67ff&units=${unit}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  }, [city, unit]);

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      setCurrentTime(current.toLocaleString()); // Format the current date and time
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <div className="input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="input-field"
          />
          <button onClick={fetchWeatherData} className="btn">Get Weather</button>
        </div>

        {/* Toggle Unit Button */}
        <button onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')} className="btn">
          Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>

        {loading && <p className="loading">Loading...</p>}

        {weatherData && !loading && (
          <div className="weather-card">
            <h2>{weatherData.name}</h2>
            <p className="description">
              {capitalizeWeatherDescription(weatherData.weather[0].description)}
            </p>

            {/* Display the weather icon */}
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />

            {/* Displaying Temperature Based on Unit */}
            <p className="temperature">
              {unit === 'metric'
                ? `${weatherData.main.temp}°C`
                : `${weatherData.main.temp}°F`}
            </p>

            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>

            {/* Display the current date and time */}
            <p className="time">{currentTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

