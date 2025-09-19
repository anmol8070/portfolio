import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", percent: 90 },
      { name: "CSS", percent: 85 },
      { name: "JavaScript", percent: 70 },
      { name: "React JS", percent: 75 },
      { name: "jQuery", percent: 70 },
    ],
    middle: [
      { name: "Java", percent: 80 },
      { name: "JDBC", percent: 80 },
      { name: "Servlet", percent: 60 },
      { name: "JSP", percent: 75 },
    ],
    backend: [
      { name: "PHP", percent: 85 },
      { name: "C#", percent: 60 },
      { name: "ASP.NET", percent: 60 },
    ],
    database: [
      { name: "Oracle DB", percent: 85 },
      { name: "SQL", percent: 79 },
      { name: "PL/SQL", percent: 75 },
    ],
  };

  const renderSkills = (skillArray, category) =>
    skillArray.map((skill, index) => (
      <div key={index} className="skill">
        <div className="skill-header">
          <span>{skill.name}</span>
          <span>{skill.percent}%</span>
        </div>
        <div className="skill-bar">
          <div
            className={`skill-progress ${category}`}
            style={{ width: `${skill.percent}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">💻 My Skills</h2>

      <div className="skills-category">
        <h3>Frontend</h3>
        {renderSkills(skills.frontend, "frontend")}
      </div>

      <div className="skills-category">
        <h3>Middle (Java & Middleware)</h3>
        {renderSkills(skills.middle, "middle")}
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        {renderSkills(skills.backend, "backend")}
      </div>

      <div className="skills-category">
        <h3>Database</h3>
        {renderSkills(skills.database, "database")}
      </div>
    </section>
  );
}
