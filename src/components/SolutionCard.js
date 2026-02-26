import React, { useState } from "react";
import { styles } from "./styles";

export default function SolutionCard({ number, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.solutionCard,
        background: isHovered
          ? "rgba(26, 31, 58, 0.95)"
          : "rgba(26, 31, 58, 0.6)",
        borderColor: isHovered
          ? "rgba(212, 175, 55, 0.4)"
          : "rgba(212, 175, 55, 0.15)",
        boxShadow: isHovered
          ? "0 25px 60px rgba(0, 0, 0, 0.4)"
          : "0 10px 30px rgba(0, 0, 0, 0.2)",
        transform: isHovered
          ? "translateY(-10px) scale(1.02)"
          : "translateY(0)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: `slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
        borderLeft: isHovered
          ? "6px solid #d4af37"
          : "6px solid rgba(212, 175, 55, 0.3)",
        paddingLeft: isHovered ? "3rem" : "3.5rem",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          ...styles.solutionNumber,
          color: isHovered ? "#fff" : "rgba(212, 175, 55, 0.3)",
          transition: "all 0.4s ease",
          fontSize: isHovered ? "3.5rem" : "3rem",
        }}
      >
        {number}
      </div>
      <h3 style={styles.solutionTitle}>{title}</h3>
      <p style={styles.solutionText}>{description}</p>
    </div>
  );
}
