import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Searchbar from "../../components/Searchbar";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL_CATEGORIES)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid logo-img"
              src="src/assets/img/logo.png"
              alt=""
            />
            <span className="text-light">ClimbIt</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="books"
                >
                  Pubblicazioni
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorie
                </a>
                <ul className="dropdown-menu p-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        className="dropdown-item"
                        to={"categories/" + cat.id}
                      >
                        {cat.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="about"
                >
                  Chi siamo
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <Searchbar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
