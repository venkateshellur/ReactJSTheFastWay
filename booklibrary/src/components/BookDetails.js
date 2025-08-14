import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);
  const book = books.find((b) => b.id === parseInt(bookId));

  if (books.length === 0) {
    return <div> Loading....</div>;
  }
  if (book == null) {
    return <div> Book not found for the provided id {bookId}</div>;
  } else
    return (
      <>
        <h1>Book found for the provided Book ID : {bookId}</h1>
        <h2>
          the book named '{book.title}' by the Author '{book.author}'
        </h2>
        <p>{book.description}</p>
      </>
    );
}
