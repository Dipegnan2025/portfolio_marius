import React from "react";
import sample from "../assets/sample.jpg";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Projet de Mise en place d'un Intranet",
      description:
        "Un système de communication interne (messagerie sécurisée, partage de documents, notifications).",
      image: sample,
      link: "#",
    },
    {
      title: "Portfolio personnel",
      description:
        "Mon premier site web développé avec React.js pour présenter mes projets et compétences.",
      image: sample,
      link: "#",
    },
    {
      title: "Application de gestion scolaire",
      description:
        "Développement d’un tableau de bord interactif pour la gestion des eleves, des notes et les Bulletins.",
      image: sample,
      link: "#",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Expériences Professionnelles</h1>
        <p className="projects-intro">
          Découvrez quelques-unes de mes réalisations techniques.  
          Chaque projet reflète ma passion pour la conception de solutions performantes et modernes.
        </p>

        <div className="projects-grid">
          {projects.map((p, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <img src={p.image} alt={p.title} className="project-image" />
              </div>
              <div className="project-content">
                <h2 className="project-title">{p.title}</h2>
                <p className="project-description">{p.description}</p>
                <a href={p.link} className="project-btn">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
