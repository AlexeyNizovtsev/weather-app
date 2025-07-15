import { useState } from "react";
import "./SearchBar.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../locales/lang";

export default function SearchBar({ onSearch, defaultCity }) {
  const [value, setValue] = useState("");
  const trimmedValue = value.trim();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  function handleChange(e) {
    setValue(
      () => e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (trimmedValue) {
      onSearch(trimmedValue);
    }
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder={t.searchHolder}
        value={value}
        onChange={handleChange}
      />
      <button disabled={!trimmedValue} type="submit">
        {t.searchBtn}
      </button>
    </form>
  );
}
