import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="books">
                  Pubblicazioni
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorie
                </a>
                <ul className="dropdown-menu p-2">
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Categoria stampata dinamicamente da fetch
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
