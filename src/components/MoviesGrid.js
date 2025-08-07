import React, { useState, useEffect } from "react";

import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genere, setGenere] = useState("All Genere");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovis = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre:</label>
          <select>
            <option value="All Genere">All Genere</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating:</label>
          <select>
            <option value="All">All</option>
            <option value="8">Good</option>
            <option value="5">Ok</option>
            <option value="0">bad</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating:</label>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovis.map((filteredMovis) => (
          <MovieCard movie={filteredMovis} />
        ))}
      </div>
    </div>
  );
}
