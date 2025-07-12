import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header/Header";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(city) {
    console.log(city);
    try {
      setLoading(true);
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=27f556f7c9a24ea7827141036251207&q=${city}&aqi=yes`
      );
      setWeather(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={fetchWeather} />
        {loading === true && <p>Loading...</p>}
        {loading === false && <p>{weather}</p>}
      </main>
    </>
  );
}
