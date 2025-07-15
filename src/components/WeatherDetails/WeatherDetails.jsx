import "./WeatherDetails.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../locales/lang";

export default function WeatherDetails({ weather, loading }) {
  if (!weather) return null;

  const { current, location } = weather;
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className={`weather-details ${loading && `loading`}`}>
      <div className="detail-item">
        <span className="detail-icon">💨</span>
        <span className="detail-value">
          {current?.wind_kph} {t.windValue}
        </span>
        <span className="detail-label">{t.wind}</span>
      </div>

      <div className="detail-item">
        <span className="detail-icon">💧</span>
        <span className="detail-value">{current?.humidity}%</span>
        <span className="detail-label">{t.humidity}</span>
      </div>

      <div className="detail-item">
        <span className="detail-icon">📊</span>
        <span className="detail-value">
          {current?.pressure_mb} {t.pressureValue}
        </span>
        <span className="detail-label">{t.pressure}</span>
      </div>
    </div>
  );
}
