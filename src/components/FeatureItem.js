import React, { useState } from "react";
import { styles } from "./styles";

export default function FeatureItem({ title, text, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.featureItem,
        background: isHovered
          ? "rgba(212, 175, 55, 0.08)"
          : "rgba(26, 31, 58, 0.5)",
        borderLeftColor: isHovered ? "#fff" : "#d4af37",
        transform: isHovered ? "translateX(15px)" : "translateX(0)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: `slideUp 0.7s ease-out ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4
        style={{
          ...styles.featureTitle,
          color: isHovered ? "#fff" : "#d4af37",
        }}
      >
        {title}
      </h4>
      <p style={styles.featureText}>{text}</p>
    </div>
  );
}
