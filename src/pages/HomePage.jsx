import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BookResults from "../components/BookResults";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <section id="jumbo-section">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <Link to="/books">
              <div className="carousel-item active">
                <img
                  src="/img/carousel/carousel_1.jpg"
                  className="carousel-img d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption carousel-caption-bottom d-block">
                  <h2 className="h1 fw-bold">Arrampicata, Trekking, Skialp</h2>
                  <h4 className="fw-bold">Abbiamo la guida che fa per te</h4>
                </div>
              </div>
            </Link>
            <Link to="/books/18">
              <div className="carousel-item">
                <img
                  src="/img/carousel/carousel_2.jpg"
                  className="carousel-img carousel-img-top d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption carousel-caption-top d-block">
                  <h2 className="h1 fw-bold">Valtellina Rock Pareti</h2>
                  <h4 className="fw-bold">Arrampicate classiche e moderne</h4>
                </div>
              </div>
            </Link>
            <Link to="/books">
              <div className="carousel-item">
                <img
                  src="/img/carousel/carousel_3.jpg"
                  className="carousel-img d-block w-100"
                  alt="..."
                />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption d-block">
                  <h2 className="h1 fw-bold">Stufo delle solite falesie?</h2>
                  <h4 className="fw-bold">
                    Scopri tutte le nostre guide di arrampicata
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id="presentation">
        <div className="container p-5">
          <div className="row">
            <div className="col-6">
              <h1 className="fw-bold p-5">
                Libri, guide e manuali di alpinismo, arrampicata, scialpinismo e
                outdoor
              </h1>
              <h6 className="ps-5">Versante Nord editore</h6>
            </div>
            <div className="col-6">
              <p className="fw-bold text-center p-5">
                Alcuni prodotti nelle categorie:
              </p>
              {/* INSERIRE PILLS CATEGORIE */}
            </div>
          </div>
        </div>
      </section>
      <section className="preview pt-3 pb-5">
        <BookResults books={books} limit={8} />
      </section>
    </>
  );
}
