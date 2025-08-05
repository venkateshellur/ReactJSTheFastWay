import logo from './logo.svg';
import './App.css';
import './styles.css'; // Assuming you have a styles.css file for additional styles
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
     </div>
      <footer className="footer">
        <p>© 2023 Venky's React App Learning</p>
      </footer>
    </div>
  );
}

export default App;
