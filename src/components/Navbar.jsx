import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarHeight = 85; // height of your navbar in px

  // Scroll to the top of the page (Home)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  // Scroll to a section with offset for sticky navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - navbarHeight; // adjust for navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo gradient-animated">Anmol Nandavadekar</h1>

      {/* Desktop / Mobile Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button onClick={scrollToTop}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>

        {/* Social Links */}
        <a href="https://github.com/anmol8070" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anmoln" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
       
      </div>

      {/* Mobile Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
