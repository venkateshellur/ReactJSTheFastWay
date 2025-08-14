import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BooksContext } from "../BooksContext";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";
  const books = useContext(BooksContext);

  //Try using this Query string and check console if the URLSearchParams is logged to console along with the search string 'Venky
  //http://localhost:3000/?search=Venky
  useEffect(() => {
    console.log(query);
    console.log(search);
  });

  return (
    <div>
      <h1> All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
