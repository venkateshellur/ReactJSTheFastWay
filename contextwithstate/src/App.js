import "./App.css";
import ContentComponent from "./Components/ContentComponent";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ContentComponent></ContentComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
