import React from "react";
import "./navbar.css";
import logo from "../images/sigma.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container header-inner ">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} className="d-inline-block align-top" alt="LOGO" />
          </NavLink>

          <button
            id="mybtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler mytoggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Acceuil
                </NavLink>
              </li>

              <li className="nav-item dropdown m-0">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="10,20"
                >
                  Collège
                </Link>
                <ul
                  className="dropdown-menu m-0 p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink to="/PremierAcCours" className="dropdown-item m-0">
                      1ère Année Collège
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink to="/DeuxiemeAcCours" className="dropdown-item">
                      2ème Année Collège
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink
                      to="/TroixiemeAcCours"
                      className="dropdown-item m-0"
                    >
                      3ème Année Collège
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="menu-item nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lycée
                </Link>
                <ul
                  className="dropdown-menu m-0 p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink to="/TronCommunSe" className="dropdown-item">
                      Tron Commun Sc
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink to="/PremierBacSe" className="dropdown-item">
                      1er Bac SE
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink to="/DeuxiemeBacPcSvt" className="dropdown-item">
                      2em Bac Pc-Svt
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Examen National
                </Link>
                <ul
                  className="dropdown-menu m-0 p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink to="c" className="dropdown-item">
                      2ème Bac Sc Ex
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink to="c" className="dropdown-item">
                      2ème Bac SM
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Concours
                </Link>
                <ul
                  className="dropdown-menu m-0 p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink to="c" className="dropdown-item">
                      Concours Bac
                    </NavLink>
                  </li>
                  <div className="dropdown-divider m-0"> </div>
                  <li>
                    <NavLink to="c" className="dropdown-item">
                      Concours Sup
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex d-sm-flex d-lg-flex d-md-flex d-xl-flex d-xxl-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Rechercher sur le site..."
              />
              <button type="submit" id="myBtnRecherche" className="btn">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
