import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookIndexPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h1>Books Index</h1>
      {books ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={"/books/" + book.id}>{book.titolo}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Nessun libro trovato</h2>
      )}
    </>
  );
}
