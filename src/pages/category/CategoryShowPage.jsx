import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BookResults from "../../components/BookResults";

export default function CategoryShowPage() {
  const [category, setCategory] = useState(null);
  const { id: catId } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL_CATEGORIES + "/" + catId)
      .then((res) => res.json())
      .then((data) => setCategory(data));

    window.scrollTo(0, 0);
  }, [catId]);

  return (
    <>
      <div className="container">
        {/* {category ? } */}
        {category ? (
          <>
            <div className="intestazione pt-4 pb-4">
              <h1 className="mb-3 fw-bold">{category.nome}</h1>
              {category.books && category.books.length > 0 && (
                <h2 className="h6">
                  Totale risultati: {category.books.length}
                </h2>
              )}
            </div>
            <hr />
            {category.books && category.books.length > 0 ? (
              <BookResults books={category.books} />
            ) : (
              <h2>Nessun libro trovato</h2>
            )}
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="loading p-5">Caricamento...</h1>
          </div>
        )}
      </div>
    </>
  );
}
