import { useState } from "react";

export default function SearchBar({ onSearch }) {
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
      <label htmlFor="search">Поиск города:</label>
      <input
        type="text"
        id="search"
        className="control"
        value={value}
        onChange={handleChange}
      />
      <button disabled={!trimmedValue} type="submit">
        Искать
      </button>
    </form>
  );
}
