import React, { useState } from "react";
import { styles } from "./styles";

export default function ConceptCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.conceptCard,
        background: isHovered
          ? "rgba(26, 31, 58, 0.95)"
          : "rgba(26, 31, 58, 0.7)",
        borderColor: isHovered
          ? "rgba(212, 175, 55, 0.5)"
          : "rgba(212, 175, 55, 0.2)",
        boxShadow: isHovered
          ? "0 30px 60px rgba(212, 175, 55, 0.15)"
          : "0 10px 30px rgba(0, 0, 0, 0.3)",
        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
        borderTop: isHovered ? "4px solid #d4af37" : "4px solid transparent",
        paddingTop: isHovered ? "2.5rem" : "3rem",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          ...styles.conceptIcon,
          animation: isHovered ? "bounceIn 0.6s ease-out" : "none",
          transform: isHovered ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {icon}
      </div>
      <h3 style={styles.conceptTitle}>{title}</h3>
      <p style={styles.conceptText}>{description}</p>
    </div>
  );
}
