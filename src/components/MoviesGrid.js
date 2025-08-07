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

  const handleGenereChange = (e) => {
    setGenere(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenere = (movie, genere) => {
    console.log("matchesGenere called with:", movie, genere);
    return (
      genere === "All Genere" ||
      movie.genre.toLowerCase() === genere.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "bad":
        return movie.rating < 5;
      default:
        return true; // If no rating filter is applied
    }
  };

  const genereList = [...new Set(movies.map((movie) => movie.genre))].sort();

  const filteredMovis = movies.filter(
    (movie) =>
      matchesSearchTerm(movie, searchTerm) &&
      matchesGenere(movie, genere) &&
      matchesRating(movie, rating)
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
        {/* <div className="filter-slot">
          <label>Genre:</label>
          <select
            className="filter-dropdown"
            value={genere}
            onChange={handleGenereChange}
          >
            <option>All Genere</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Thriller</option>
          </select>
        </div> */}

        {/* Trying on my own to create the Genere list from the movies json file */}
        <div className="filter-slot">
          <label>Genre:</label>
          <select
            className="filter-dropdown"
            value={genere}
            onChange={handleGenereChange}
          >
            <option>All Genere</option>
            {genereList.map((genre) => (
              <option>{genre}</option>
            ))}
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating:</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>bad</option>
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
