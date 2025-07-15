import "./Header.css";
import logo from "../../assets/react.svg";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <header>
      <h3>Weather app</h3>

      <div className="lang-switch">
        <button
          onClick={() => setLanguage("ru")}
          className={language === "ru" && "active"}
        >
          RU
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={language === "en" && "active"}
        >
          EN
        </button>
        <div className="slider" data-lang={language}></div>
      </div>
    </header>
  );
}
