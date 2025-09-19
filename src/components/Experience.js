import React from "react";
import { FaLaptopCode, FaRocket } from "react-icons/fa"; // Icons
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {/* Digital Microsys */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <div className="timeline-icon dm-icon">
              <FaLaptopCode />
            </div>
            <div className="title-row">
              <h3>
                Java Fullstack Developer Intern
              </h3>
              <span className="badge">6 Months</span>
            </div>
            <h4 className="company-name">Digital Microsys Technologies</h4>
            <span className="duration">Mar 2025 - Oct 2025</span>
            <p>
              Worked on Java Fullstack projects using HTML, CSS, JS, Java, JSP, JDBC, and
              Oracle backend.
            </p>
          </div>
        </div>

        {/* Infosys */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <div className="timeline-icon infosys-icon">
              <FaLaptopCode />
            </div>
            <div className="title-row">
              <h3>
                MERN Stack Intern
              </h3>
              <span className="badge">3 Months</span>
            </div>
            <h4 className="company-name">Infosys Springboard</h4>
            <span className="duration">Jul 2023 - Sep 2023</span>
            <p>
              Worked on MERN stack projects, focusing on frontend React and
              backend Node.js APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
