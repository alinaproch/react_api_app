import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>New Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.isbn13}>
            <Link to={`/books/${book.isbn13}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
