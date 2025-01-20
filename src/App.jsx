import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setError(""); // Clear any previous error
    setLoading(true); // Set loading state

    try {
      const API_KEY = "9cc70a19ff5babdaed8d53dbd1d5cfb9";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherList((prevList) => [...prevList, response.data]);
      setCity("");
    } catch (error) {
      setError("City not found or network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Header />
      <SearchBar city={city} onCityChange={setCity} onSearch={fetchWeather} />

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading State */}
      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {/* Weather Cards */}
      <main className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherList.map((weather, index) => (
          <WeatherCard key={index} weather={weather} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
