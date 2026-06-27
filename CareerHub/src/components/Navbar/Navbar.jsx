import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">CH</span>
          CareerHub
          <span className="navbar__logo-lite">Lite</span>
        </a>

        <nav className="navbar__links">
          <a href="#" className="navbar__link navbar__link--active">
            Home
          </a>
          <a href="#" className="navbar__link">
            Jobs
          </a>
          <a href="#" className="navbar__link">
            Companies
          </a>
          <a href="#" className="navbar__link">
            About
          </a>
        </nav>

        <div className="navbar__actions">
          <button className="btn btn--ghost navbar__signin">Sign In</button>

          <button
            className={`navbar__burger ${isMenuOpen ? "is-open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-panel ${isMenuOpen ? "is-open" : ""}`}>
        <a href="#" className="navbar__link navbar__link--active">
          Home
        </a>
        <a href="#" className="navbar__link">
          Jobs
        </a>
        <a href="#" className="navbar__link">
          Companies
        </a>
        <a href="#" className="navbar__link">
          About
        </a>
        <button className="btn btn--primary navbar__mobile-signin">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
