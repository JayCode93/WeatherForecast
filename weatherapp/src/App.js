import { useState } from "react";
import axios from "axios";
import Page from "./components/mainpage/Page.jsx";
import WeatherInfo from "./components/weather-info/WeatherInfo.jsx";


function App() {

  const API_key = '...';
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();



  const fetchWeather = async(e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    console.log(res);
    setWeather(res.data);
    }

  return (
    <div className="App">
      {weather ? (<WeatherInfo weather={weather}/>) : (<Page setCity={setCity} fetchWeather={fetchWeather} />)}
    </div>
  );
}

export default App;
