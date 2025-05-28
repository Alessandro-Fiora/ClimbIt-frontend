import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import BookResults from "../../components/BookResults";

export default function BookIndexPage() {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const filter = location.state?.filter?.toLowerCase() || "";

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [filter]);

  const filteredBooks = filter
    ? books.filter((book) => {
        const titolo = book.titolo?.toLowerCase() || "";
        const sottotitolo = book.sottotitolo?.toLowerCase() || "";
        const autore = book.autore?.toLowerCase() || "";
        const categorie = Array.isArray(book.categories)
          ? book.categories
              .map((cat) => cat.nome?.toLowerCase() || "")
              .join(" ")
          : "";
        const regione = book.region?.nome.toLowerCase() || "";

        return (
          titolo.includes(filter) ||
          autore.includes(filter) ||
          sottotitolo.includes(filter) ||
          categorie.includes(filter) ||
          regione.includes(filter)
        );
      })
    : books;

  return (
    <>
      <div className="container">
        <div className="intestazione pt-4">
          {filteredBooks && filteredBooks.length > 0 && (
            <>
              <h1 className="mb-3 fw-bold">Pubblicazioni</h1>
              <h2 className="h6">Totale risultati: {books.length}</h2>
              <hr />
            </>
          )}
        </div>

        {filteredBooks && filteredBooks.length > 0 ? (
          <BookResults books={filteredBooks} />
        ) : (
          <div className="container text-center p-5 min-vh-100">
            <h1>Nessun risultato trovato</h1>
          </div>
        )}
      </div>
    </>
  );
}
