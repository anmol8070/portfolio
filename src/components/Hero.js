import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/Hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "../anmol.jpg";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "💻 I'm a Software Developer",
      "🚀 I build AI-powered Web Experiences",
      "🌐 Passionate about Full-Stack Development",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="hero">
      {/* Left Side - Image */}
      <motion.div
        className="hero-image"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={myPhoto} alt="profile" />
      </motion.div>

      {/* Right Side - Info */}
      <motion.div
        className="hero-content"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className="gradient-text">Anmol Ashok Nandavadekar</span>
        </h1>

        {/* Typing Animation */}
        <h2 className="typing-text">
          {text}
          <Cursor cursorColor="#4cafef" />
        </h2>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href="https://drive.google.com/uc?export=download&id=1XTh8TeNeUVEBtCuPrg_h0cYexDc_jhGA"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-primary">📄 Download Resume</button>
          </a>
          <a href="#projects">
            <button className="btn-secondary">💻 View Projects</button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/anmoln"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anmol8070"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
