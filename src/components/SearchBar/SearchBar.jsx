import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, defaultCity }) {
  const [value, setValue] = useState("");
  const trimmedValue = value.trim();

  function handleChange(e) {
    setValue(() => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (trimmedValue) {
      onSearch(trimmedValue);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="City..."
        value={value}
        onChange={handleChange}
      />
      <button disabled={!trimmedValue} type="submit">
        Search
      </button>
    </form>
  );
}
