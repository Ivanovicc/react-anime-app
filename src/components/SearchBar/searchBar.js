import { useState } from "react";
import { useLocation } from "wouter";
import { SearchRounded } from "@mui/icons-material";
/* Styles */
import "./searchBar.css";

export const SearchBar = () => {
  const [key, setKey] = useState("");
  const [, setLocation] = useLocation();

  const handleChange = (e) => {
    let value = e.target.value;
    setKey(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search_results/${key}`);
    setKey("");
    e.target.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-wrap">
        <input
          className="form-input"
          type="text"
          placeholder="Buscar..."
          onChange={handleChange}
          value={key}
          required
        />
        <button className="search-button" type="submit">
          <SearchRounded />
        </button>
      </div>
    </form>
  );
};
