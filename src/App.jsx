import './App.css'
import React, {useState} from "react"
import SearchBar from "./components/SearchBar";


function App() {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    setCity(e.target.value); // update 'city' property when the input changes
  };


  return (
    <div className= "weather-app">
      <h1>Weather Guide</h1>

      {/* passing props to SearchBar*/}
      <SearchBar 
        city={city} 
        onCityChange={setCity} 
        onSearch={handleSearch} />
      <p>Search for a city to get its weather details.</p>
      
       <p>Searching weather for: {city}</p>
    </div>
  )

}

export default App
