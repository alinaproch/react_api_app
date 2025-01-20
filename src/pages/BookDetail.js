 import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function BookDetail() {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setLoading(false);
      });
  }, [isbn]);

  if (loading) return <Loader />;

  if (!book) return <div>Book not found</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.subtitle}</p>
      <p>Authors: {book.authors}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Year: {book.year}</p>
      <p>Price: {book.price}</p>
    </div>
  );
}

export default BookDetail;
