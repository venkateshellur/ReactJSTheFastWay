import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css"; // Assuming you have a styles.css file for additional styles
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist"; // Importing Watchlist component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/Watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />}></Route>
            <Route path="/Watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
