import React, { useState } from "react";
import { styles } from "./styles";

export default function StatItem({ number, label, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.statItem,
        background: isHovered
          ? "rgba(26, 31, 58, 0.9)"
          : "rgba(26, 31, 58, 0.5)",
        borderColor: isHovered
          ? "rgba(212, 175, 55, 0.4)"
          : "rgba(212, 175, 55, 0.15)",
        boxShadow: isHovered
          ? "0 15px 40px rgba(212, 175, 55, 0.2)"
          : "0 5px 15px rgba(0, 0, 0, 0.2)",
        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: `bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{ ...styles.statNumber, color: isHovered ? "#fff" : "#d4af37" }}
      >
        {number}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}
