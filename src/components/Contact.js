import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* Contact Me Title */}
      <h2 className="contact-title">Contact Me</h2>

      {/* Contact Card */}
      <div className="contact-card">
        <h3 className="contact-name">Anmol Nandavadekar</h3>

        {/* Email */}
        <div className="contact-email">
          <span>Email:</span>
          <a href="mailto:anmolnandavadekar@gmail.com">anmolnandavadekar@gmail.com</a>
        </div>

        {/* Phone Number */}
        <div className="contact-phone">
          <span>Phone:</span>
          <a href="tel:+918857817038">+91 8857817038</a>
        </div>

        {/* Social Links */}
        <div className="contact-socials">
          <a href="https://github.com/anmol8070" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anmoln" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/__anm0l____" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        &copy; {new Date().getFullYear()} Anmol Nandavadekar. All rights reserved.
      </footer>
    </section>
  );
}
