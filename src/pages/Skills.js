import React, { useEffect, useRef } from "react";
import "./../styles/global.css";

const Skills = () => {
  const skills = [
    { name: "Windows serveur", level: 80 },
    { name: "Gestion Reseau", level: 50 },
    { name: "Maintenance preventive", level: 80 },
    { name: "Architecture Reseau", level: 60 },
    { name: "Virtualisation", level: 70 },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            entry.target.style.width = `${skills[index].level}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills container">
      <h2>Mes Compétences</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-level"
                ref={(el) => (skillRefs.current[index] = el)}
                data-index={index}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
