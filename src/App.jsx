import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import.meta.env.VITE_API_KEY;

export default function App() {
  const [defaultCity, setDefaultCity] = useState("Moscow");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCityByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        },

        (error) => {
          console.error("Ошибка геолокации:", error);
          fetchWeather("Moscow");
        }
      );
    } else {
      fetchWeather("Moscow");
    }
  }, []);

  const fetchCityByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${lat},${lon}`
      );
      const data = await response.json();
      setDefaultCity(data.location.name);
      fetchWeather(data.location.name);
    } catch (error) {
      console.error("Ошибка получения города:", error);
      fetchWeather("Москва");
    }
  };

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&aqi=no`
      );

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        {loading && <p>Loading...</p>}
        {!loading && <WeatherCard weather={weather} />}

        <WeatherDetails weather={weather} />
        <SearchBar onSearch={fetchWeather} defaultCity={defaultCity} />
      </main>
    </>
  );
}
