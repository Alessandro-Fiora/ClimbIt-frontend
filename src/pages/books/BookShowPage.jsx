import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookShowPage() {
  const [book, setBook] = useState(null);
  const { id: bookId } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/" + bookId)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <>
      <h1>Book show</h1>
      {book ? <h2>{book.titolo}</h2> : <h2>Nessun libro trovato</h2>}
    </>
  );
}
