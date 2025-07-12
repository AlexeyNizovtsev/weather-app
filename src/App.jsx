import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header/Header";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=27f556f7c9a24ea7827141036251207&q=${city}&aqi=no`
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
        <SearchBar onSearch={fetchWeather} />
        {loading && <p>Loading...</p>}
        {!loading && <WeatherCard weather={weather} />}
      </main>
    </>
  );
}
