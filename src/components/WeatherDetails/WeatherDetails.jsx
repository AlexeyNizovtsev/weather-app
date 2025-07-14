import "./WeatherDetails.css";

export default function WeatherDetails({ weather }) {
  if (!weather) return null;

  const { current, location } = weather;

  return (
    <div className="weather-details">
      <div className="detail-item">
        <span className="detail-icon">💨</span>
        <span className="detail-value">{current?.wind_kph} km/h</span>
        <span className="detail-label">Wind</span>
      </div>

      <div className="detail-item">
        <span className="detail-icon">💧</span>
        <span className="detail-value">{current?.humidity}%</span>
        <span className="detail-label">Humidity</span>
      </div>

      <div className="detail-item">
        <span className="detail-icon">📊</span>
        <span className="detail-value">{current?.pressure_mb} hPa</span>
        <span className="detail-label">Pressure</span>
      </div>
    </div>
  );
}
