import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-80">
      <h2 className="text-xl font-semibold text-gray-800">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="w-16 h-16 mx-auto"
      />
      <p className="text-gray-600">
        Temperature: <span className="font-medium">{weather.main.temp}°C</span>
      </p>
      <p className="text-gray-600">
        Feels Like: <span className="font-medium">{weather.main.feels_like}°C</span>
      </p>
      <p className="text-gray-600">
        Weather: <span className="font-medium">{weather.weather[0].description}</span>
      </p>
      <p className="text-gray-600">
        Humidity: <span className="font-medium">{weather.main.humidity}%</span>
      </p>
      <p className="text-gray-600">
        Wind Speed: <span className="font-medium">{weather.wind.speed} m/s</span>
      </p>
    </div>
  );
}

export default WeatherCard;
