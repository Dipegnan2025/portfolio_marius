import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Bienvenue</h1>
            <h2>Je suis <span className="highlight">TOURE DIPEGNAN MARIUS </span></h2>
            <p className="hero-subtitle">
              Administrateur Reseau et Système
              je déploie et maintiens
              des infrastructures modernes,sécurisées.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn primary">Découvrir mon parcours</Link>
              <Link to="/contact" className="btn secondary">Me contacter</Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/assets/photo.jpeg" alt="Portrait de MARIUS" className="profile-img" />
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <h2>Mes domaines d’expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <span className="icon">🌐</span>
            <h3>Administrateur Reseau et Système</h3>
            <p>configuration et maintenance de réseaux LAN, WAN.</p>
          </div>
          <div className="skill-card">
            <span className="icon">💻</span>
            <h3>Systèmes & Sécurité</h3>
            <p>Installation et gestion de systèmes Windows/Linux, sécurité réseau.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
