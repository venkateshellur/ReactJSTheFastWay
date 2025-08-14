import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  route,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
