import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import BookResults from "../../components/BookResults";
import Pill from "../../components/Pill";

export default function BookShowPage() {
  const [book, setBook] = useState(null);
  const [books, setBooks] = useState([]);
  const { id: bookId } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));

    fetch(import.meta.env.VITE_BACKEND_URL + "/" + bookId)
      .then((res) => res.json())
      .then((data) => setBook(data));

    window.scrollTo(0, 0);
  }, [bookId]);

  return (
    <>
      <section id="show-section" className="my-5">
        <div className="container">
          {book ? (
            <div className="row">
              <div className="col-4">
                <img
                  className="copertina img-fluid"
                  src={book.immagine}
                  alt=""
                />
              </div>
              <div className="col-8">
                <div className="row g-auto">
                  <div className="col-8">
                    <h1 className="fw-bold">{book.titolo}</h1>
                    <h5 className="mb-3">{book.sottotitolo}</h5>
                    <h6 className="fw-light mb-4">{book.autore}</h6>
                    <h6 className="mb-4">€ {book.prezzo},00</h6>
                  </div>
                  <div className="col-4"></div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      {book.categories &&
                        book.categories.map((cat) => (
                          <Pill
                            isCategory={true}
                            text={cat.nome}
                            key={cat.id}
                          />
                        ))}

                      <Pill
                        isCategory={false}
                        text={book.region.nome}
                        key={book.region.id}
                      />
                    </div>
                    <div className="col-12">
                      <div
                        className="accordion accordion-flush"
                        id="bookShowAccordion"
                      >
                        {book.descrizione && (
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed ps-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                Descrizione
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse"
                            >
                              <div className="accordion-body">
                                <p>{book.descrizione}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed ps-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Dettagli
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body">
                              <ul>
                                <li>ISBN: {book.isbn}</li>
                                <li>Pagine: {book.pagine}</li>
                                {book.dataPubblicazione && (
                                  <li th:if="*{dataPubblicazione != null}">
                                    Data di pubblicazione:{" "}
                                    {book.dataPubblicazione}
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="text-center">Nessun risultato trovato</h2>
          )}
        </div>
      </section>
      <section className="preview pt-3 pb-5">
        <div className="container">
          <h2 className="h1 fw-bold mt-5">Ti potrebbero interessare:</h2>
        </div>
        <BookResults
          books={books.filter((book) => String(book.id) !== String(bookId))}
          limit={8}
        />
      </section>
    </>
  );
}
