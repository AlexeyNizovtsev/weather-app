import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { current, location } = weather;

  return (
    <>
      <div className={`weather-card ${!current?.is_day && "night"}`}>
        <div className="weather-header centered_text">
          <h2>
            {location?.name}, {location?.country}
          </h2>

          <p className="weather-date">
            {new Date().toLocaleDateString("en-EN", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>

        <div className="weather-main">
          <img
            src={current?.condition?.icon}
            alt={current?.condition?.text}
            className="weather-image"
          />

          <div className="centered_text">
            <span className="temp-current">{Math.round(current?.temp_c)}°</span>
            <div className="temp-feelslike">
              Feels like: {Math.round(current?.feelslike_c)}°
            </div>
          </div>
        </div>

        <p className="weather-description centered_text">
          {current?.condition?.text}
        </p>
      </div>
    </>
  );
}
