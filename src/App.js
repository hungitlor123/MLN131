import React, { useState } from "react";
import { styles, ANIMATION_STYLES } from "./components/styles";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isExiting, setIsExiting] = useState(false);

  const navigateTo = (page) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const scrollToSection = (sectionId) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div style={styles.app}>
      <style>{ANIMATION_STYLES}</style>

      {/* Navigation */}
      <nav style={styles.nav} className="animate-slide-down">
        <button
          type="button"
          onClick={() => navigateTo("home")}
          style={{ ...styles.logo, cursor: "pointer" }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "#d4af37")}
        >
          ⬢ MLN131
        </button>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <button
              type="button"
              onClick={() => scrollToSection("concepts")}
              style={styles.navLink}
            >
              Khái Niệm
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              type="button"
              onClick={() => scrollToSection("vietnam")}
              style={styles.navLink}
            >
              Việt Nam
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              type="button"
              onClick={() => scrollToSection("solutions")}
              style={styles.navLink}
            >
              Giải Pháp
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              type="button"
              onClick={() => navigateTo("about")}
              style={styles.navLink}
            >
              Chi Tiết
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              type="button"
              onClick={() => navigateTo("contact")}
              style={styles.navLink}
            >
              Ôn Tập
            </button>
          </li>
        </ul>
      </nav>

      <div className={isExiting ? "" : "page-enter"}>
        {currentPage === "home" && (
          <HomePage scrollToSection={scrollToSection} navigateTo={navigateTo} />
        )}
        {currentPage === "about" && <AboutPage navigateTo={navigateTo} />}
        {currentPage === "contact" && <ContactPage navigateTo={navigateTo} />}
      </div>

      {/* Chatbot */}
      <Chatbot />
            </div>
  );
}
