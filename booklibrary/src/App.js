import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";

function App() {
  return (
    <BooksProvider>
      <div>
        <Books></Books>
      </div>
    </BooksProvider>
  );
}

export default App;
