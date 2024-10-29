import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBackground: React.FC = () => {
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [isWeatherBackground, setIsWeatherBackground] = useState(false);

  const API_KEY = 'YOUR_API_KEY';
  const CITY = 'Chicago';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`
        );
        const data = response.data;
        setWeather(data.weather[0].main); // e.g., "Clouds", "Rain"
        setTemperature(data.main.temp); // temperature in Fahrenheit
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const getBackgroundStyle = () => {
    if (!isWeatherBackground) return {}; // Default background style

    switch (weather) {
      case 'Clear':
        return { backgroundImage: 'url(/path-to-sunny-image.jpg)' };
      case 'Clouds':
        return { backgroundImage: 'url(/path-to-cloudy-image.jpg)' };
      case 'Rain':
        return { backgroundImage: 'url(/path-to-rainy-image.jpg)' };
      case 'Snow':
        return { backgroundImage: 'url(/path-to-snowy-image.jpg)' };
      default:
        return { backgroundColor: '#333' }; // Default color for unknown weather
    }
  };

  return (
    <div style={{ ...getBackgroundStyle(), height: '100vh', color: '#fff' }}>
      <div className="p-4">
        <button
          onClick={() => setIsWeatherBackground(!isWeatherBackground)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Toggle Weather Background
        </button>
        <h2>Weather in {CITY}: {weather}</h2>
        <h3>Temperature: {temperature}°F</h3>
      </div>
    </div>
  );
};

export default WeatherBackground;
