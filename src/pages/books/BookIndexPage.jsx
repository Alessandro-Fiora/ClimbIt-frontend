import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import BookResults from "../../components/BookResults";

export default function BookIndexPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Books Index</h1>

        {books && books.length > 0 ? (
          <BookResults books={books} />
        ) : (
          <h2>Nessun libro trovato</h2>
        )}
      </div>
    </>
  );
}
