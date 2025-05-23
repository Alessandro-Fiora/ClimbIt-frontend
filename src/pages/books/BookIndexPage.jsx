import { useState, useEffect } from "react";

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
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.titolo}</li>
        ))}
      </ul>
    </>
  );
}
