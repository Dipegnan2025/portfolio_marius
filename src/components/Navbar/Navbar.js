import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">DIPEGNAN_PORTFOLIO</div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Compétences</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projets</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <a href="/CV-Dipegnan.pdf" download className="cv-btn" onClick={() => setIsOpen(false)}>📄 CV</a>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
