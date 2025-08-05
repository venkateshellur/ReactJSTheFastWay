import logo from './logo.svg';
import './App.css';
import './styles.css'; // Assuming you have a styles.css file for additional styles
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
     </div>
     <Footer />
    </div>
  );
}

export default App;
