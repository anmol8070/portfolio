import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* About Me / Brief Info */}
      <div className="about-me">
        <h2 className="neon-title">
          <span className="highlight-name">About Me</span>
        </h2>   
        <p>
          I am <span className="highlight-name-inline">Anmol</span>, a passionate Fullstack Developer with experience in Java, MERN stack, and creating modern, interactive web applications. I enjoy problem-solving, learning new technologies, and building projects that make a difference.
        </p>
      </div>

      {/* Education Section */}
      <div className="education">
        <h2 className="section-title">Education</h2>

        {/* M.Tech */}
        <div className="education-card">
          <div className="edu-info">
            <h3>Master of Technology in Computer Science & Engineering</h3>
            <p></p>
            <span className="edu-year">2025 - Present</span>
          </div>
        </div>

        {/* B.Tech */}
        <div className="education-card">
          <div className="edu-info">
            <h3>Bachelor of Technology in Computer Science & Engineering</h3>
            <p>Ashokrao Mane Group of Institutions, Vathar Tarf Vadgaon</p>
            <span className="edu-year">2021 - 2025</span>
            <span className="edu-cgpa">CGPA: 8.39</span>
          </div>
        </div>

        {/* Higher Education */}
        <div className="education-card">
          <div className="edu-info">
            <h3>Higher Education</h3>
            <p>Guruvary M.B. Tupare Jr. College, Karwe</p>
            <span className="edu-year">2020 - 2021</span>
            <span className="edu-cgpa">Percentage: 91%</span>
          </div>
        </div>

        {/* Secondary Education */}
        <div className="education-card">
          <div className="edu-info">
            <h3>Secondary Education</h3>
            <p>Mahatma Fule Vidyalaya, Majre Karwe</p>
            <span className="edu-year">2018 - 2019</span>
            <span className="edu-cgpa">Percentage: 90%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
