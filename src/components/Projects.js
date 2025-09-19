import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

// Import your images from assets
import antidrowsy from "../assets/antidrowsy.png";
import autofill from "../assets/autofill.png";
import bloodgroup from "../assets/bloodgroup.png";
import cetcell from "../assets/cetcell.png";
import formbuilder from "../assets/formbuilder.png";
import infosysprojectwork from "../assets/infosysprojectwork.png";
import neocampus from "../assets/neocampus.png";
import rentseelhub from "../assets/rentseelhub.png";
import sugarcane from "../assets/sugarcane.png";
import tourist from "../assets/tourist.png";

const projects = [
  {
    title: "Sugarcane Factory Management System",
    description: "Manages sugarcane production, inventory, and sales.",
    image: sugarcane,
    link: "https://github.com/anmol8070/Tourist-management-System.git",
  },
  {
    title: "RentSellHub",
    description: "Property management system for rent and sale listings.",
    image: rentseelhub,
    link: "https://github.com/anmol8070/Rent-Sell-Hub.git",
  },
  {
    title: "Tourist Management System",
    description: "System for booking trips, assigning service providers, and sending notifications.",
    image: tourist,
    link: "https://github.com/anmol8070/Tourist-Management-System",
  },
  {
    title: "Anti Drowsy System",
    description: "AI-based driver drowsiness detection.",
    image: antidrowsy,
    link: "https://github.com/anmol8070/AntiDrowsySystem",
  },
  {
    title: "NeoCampus",
    description: "Campus management system built with HTML & JS.",
    image: neocampus,
    link: "https://github.com/anmol8070/NeoCampus",
  },
  {
    title: "CET Admission Buddy",
    description: "Predicts college eligibility based on CET scores.",
    image: cetcell,
    link: "https://github.com/anmol8070/CET-Admission-Buddy",
  },
  {
    title: "Blood Group App",
    description: "Blood group finder built with Python.",
    image: bloodgroup,
    link: "https://github.com/anmol8070/bloodgroup_app",
  },
  {
    title: "Form Filling Android",
    description: "Android app for automated form filling.",
    image: autofill,
    link: "https://github.com/anmol8070/Form-Filling-Android",
  },
  {
    title: "Form Builder",
    description: "Custom form builder with JavaScript.",
    image: formbuilder,
    link: "https://github.com/anmol8070/Form-Builder",
  },
  {
    title: "Infosys Project Work",
    description: "Infosys-based Objective-C project work.",
    image: infosysprojectwork,
    link: "https://github.com/anmol8070/Infosys-Project-Work",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">🚀 Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                🔗 View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
