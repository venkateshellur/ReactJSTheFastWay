import React from 'react';
import './App.css';
import './styles.css'; // Assuming you have a styles.css file for additional styles
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <MoviesGrid />
     </div>
     <Footer />
    </div>
  );
}

export default App;
