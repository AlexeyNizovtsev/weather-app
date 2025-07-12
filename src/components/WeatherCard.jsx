export default function WeatherCard({ weather }) {
  return (
    <>
      <h2>
        {weather?.location?.name}, {weather?.location?.country}{" "}
      </h2>
      <h4>Данные на {weather?.current?.last_updated}</h4>

      <img src={weather?.current?.condition?.icon} alt="" />

      <div></div>
    </>
  );
}
