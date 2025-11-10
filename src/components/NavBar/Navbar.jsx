import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav__container">
        <Link to="/" className={`nav__logo ${isActive("/") ? "active" : ""}`}>
          JESSI MARIE CODES
        </Link>
        <ul className="nav__menu">
          <li className="nav__item">
            <Link
              to="/about"
              className={`nav__link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/my-work"
              className={`nav__link ${isActive("/my-work") ? "active" : ""}`}
            >
              my work
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className={`nav__link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
