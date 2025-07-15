import "./WeatherCard.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../locales/lang";

export default function WeatherCard({ weather, loading }) {
  if (!weather) return null;

  const { current, location } = weather;
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <>
      <div
        className={`weather-card ${current?.is_day ? "day" : "night"} ${
          loading && "loading"
        }`}
      >
        <div className="weather-header centered_text">
          <h2>
            {location?.name}, {location?.country}
          </h2>

          <p className="weather-date">
            {new Date().toLocaleDateString(t.date, {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
            {"," + location?.localtime.slice(10)}
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
              {t.feels} {Math.round(current?.feelslike_c)}°
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
