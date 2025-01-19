import './App.css'
import {useState} from "react"

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    setCity(e.target.value); // update 'city' property when the input changes
  };


  return (
    <div className= "weather-app">
      <h1>Weather Guide</h1>
      {/* Your Weather App UI goes here */}
      <p>Search for a city to get its weather details.</p>
      <input 
        type="text"
        placeholder='Enter a city'
        value={city}
        onChange={handleSearch}
       />
       <p>Searching weather for: {city}</p>
    </div>
  )

}

export default App
