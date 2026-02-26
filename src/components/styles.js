// Comprehensive Styles
export const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#0a0e27",
    color: "#e8e4d9",
  },

  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "3rem 5%",
    background: "rgba(10, 14, 39, 0.95)",
    backdropFilter: "blur(20px)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },

  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "2px",
    color: "#d4af37",
    textDecoration: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s ease",
    background: "transparent",
    border: "none",
    padding: 0,
  },

  navLinks: {
    display: "flex",
    gap: "5rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  navItem: {
    marginBottom: 0,
  },

  navLink: {
    textDecoration: "none",
    color: "#e8e4d9",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "0.5rem 0",
    borderBottom: "2px solid transparent",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
  },

  // Hero Section
  hero: {
    marginTop: "120px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f132e 100%)",
    padding: "5rem 5% 6rem 5%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },

  heroInner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "6rem",
    alignItems: "center",
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
  },

  heroContent: {
    zIndex: 2,
  },

  heroTag: {
    fontSize: "0.8rem",
    letterSpacing: "3px",
    color: "#d4af37",
    textTransform: "uppercase",
    marginBottom: "3rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },

  tagDot: {
    color: "#d4af37",
    fontSize: "1rem",
  },

  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "5.5rem",
    lineHeight: 1.1,
    marginBottom: "3rem",
    color: "#f5f1e8",
    fontWeight: 800,
    letterSpacing: "-2px",
  },

  heroHighlight: {
    color: "#d4af37",
  },

  heroDescription: {
    fontSize: "1.15rem",
    color: "#b8b5a8",
    marginBottom: "4rem",
    lineHeight: 1.9,
    fontWeight: 300,
    maxWidth: "550px",
  },

  ctaButtons: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    marginBottom: "4rem",
  },

  btnPrimary: {
    padding: "1.2rem 3rem",
    background: "#d4af37",
    color: "#0a0e27",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    letterSpacing: "2px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    position: "relative",
    overflow: "hidden",
    textTransform: "uppercase",
    borderRadius: "2px",
    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
  },

  btnSecondary: {
    padding: "1.2rem 3rem",
    border: "2px solid #d4af37",
    background: "transparent",
    color: "#d4af37",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    letterSpacing: "2px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    position: "relative",
    overflow: "hidden",
    textTransform: "uppercase",
    borderRadius: "2px",
  },

  heroMeta: {
    display: "flex",
    gap: "3rem",
    fontSize: "0.9rem",
    color: "#b8b5a8",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  heroVisual: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },

  imagePlaceholderHero: {
    width: "100%",
    aspectRatio: "1",
    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(167, 46, 46, 0.08) 100%)",
    border: "3px solid rgba(212, 175, 55, 0.25)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#b8b5a8",
    fontWeight: 300,
    position: "relative",
    overflow: "hidden",
  },

  heroDecoration: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    top: "-200px",
    right: "-200px",
    zIndex: 1,
  },

  // Section Styles
  sectionContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
  },

  concepts: {
    background: "linear-gradient(to bottom, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)",
    padding: "8rem 5%",
    position: "relative",
  },

  vietnam: {
    background: "linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)",
    padding: "8rem 5%",
    position: "relative",
  },

  solutions: {
    background: "#0a0e27",
    padding: "8rem 5%",
    position: "relative",
  },

  benefits: {
    background: "linear-gradient(to bottom, #1a1f3a 0%, #0a0e27 100%)",
    padding: "8rem 5%",
    position: "relative",
  },

  cta: {
    background: "linear-gradient(135deg, #a72e2e 0%, #8b2e2e 100%)",
    padding: "8rem 5%",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  ctaContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4rem",
    marginBottom: "2rem",
    color: "white",
    lineHeight: 1.1,
    fontWeight: 800,
  },

  ctaText: {
    fontSize: "1.15rem",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "2rem",
    lineHeight: 1.8,
    fontWeight: 300,
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "6rem",
    maxWidth: "700px",
    margin: "0 auto 6rem auto",
  },

  sectionTag: {
    fontSize: "0.8rem",
    letterSpacing: "3px",
    color: "#d4af37",
    textTransform: "uppercase",
    marginBottom: "2rem",
    fontWeight: 600,
    display: "block",
  },

  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3.8rem",
    marginBottom: "2rem",
    lineHeight: 1.2,
    color: "#f5f1e8",
    fontWeight: 800,
    letterSpacing: "-1px",
  },

  sectionDescription: {
    fontSize: "1.1rem",
    color: "#b8b5a8",
    lineHeight: 1.8,
    fontWeight: 300,
  },

  conceptsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "3.5rem",
  },

  conceptCard: {
    padding: "3.5rem",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "2px",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  conceptIcon: {
    fontSize: "3rem",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(212, 175, 55, 0.12)",
    borderRadius: "4px",
    transition: "all 0.4s ease",
  },

  conceptTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.8rem",
    color: "#f5f1e8",
    margin: 0,
    fontWeight: 700,
  },

  conceptText: {
    color: "#b8b5a8",
    fontSize: "0.95rem",
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  },

  vietnamWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "6rem",
    alignItems: "center",
  },

  vietnamImage: {
    aspectRatio: "4/5",
    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(167, 46, 46, 0.1) 100%)",
    border: "2px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#b8b5a8",
    position: "relative",
    overflow: "hidden",
  },

  vietnamContent: {
    paddingRight: "1rem",
  },

  contentTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    marginBottom: "2rem",
    color: "#f5f1e8",
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: "-1px",
  },

  vietnamText: {
    color: "#b8b5a8",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    marginBottom: "2.5rem",
    fontWeight: 300,
  },

  featuresList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  featureItem: {
    padding: "2rem 2rem 2rem 2.5rem",
    borderLeft: "4px solid #d4af37",
    borderRadius: "2px",
    transition: "all 0.4s ease",
  },

  featureTitle: {
    fontSize: "1.2rem",
    color: "#d4af37",
    marginBottom: "0.8rem",
    fontFamily: "'Playfair Display', serif",
    margin: 0,
    fontWeight: 700,
  },

  featureText: {
    color: "#b8b5a8",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    margin: 0,
    fontWeight: 300,
  },

  solutionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3rem",
  },

  solutionCard: {
    padding: "3.5rem",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "2px",
    position: "relative",
    overflow: "hidden",
  },

  solutionNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
    position: "relative",
    zIndex: 2,
    transition: "all 0.4s ease",
  },

  solutionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.6rem",
    color: "#f5f1e8",
    marginBottom: "1.2rem",
    position: "relative",
    zIndex: 2,
    fontWeight: 700,
  },

  solutionText: {
    color: "#b8b5a8",
    fontSize: "0.95rem",
    lineHeight: 1.8,
    position: "relative",
    zIndex: 2,
    fontWeight: 300,
  },

  benefitsLargeImage: {
    width: "100%",
    aspectRatio: "16/9",
    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(167, 46, 46, 0.08) 100%)",
    border: "2px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#b8b5a8",
    marginBottom: "5rem",
    position: "relative",
    overflow: "hidden",
  },

  benefitsStats: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2.5rem",
  },

  statItem: {
    textAlign: "center",
    padding: "3rem 2rem",
    border: "1px solid rgba(212, 175, 55, 0.1)",
    borderRadius: "2px",
    transition: "all 0.5s ease",
  },

  statNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    marginBottom: "1rem",
    fontWeight: 800,
    transition: "color 0.4s ease",
  },

  statLabel: {
    color: "#b8b5a8",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontWeight: 600,
  },

  footer: {
    background: "rgba(10, 14, 39, 0.9)",
    borderTop: "1px solid rgba(212, 175, 55, 0.1)",
    padding: "4rem 5%",
    textAlign: "center",
  },

  footerContent: {
    maxWidth: "1400px",
    margin: "0 auto",
  },

  footerBrand: {
    color: "#d4af37",
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.4rem",
    marginBottom: "1.5rem",
    fontWeight: 700,
    letterSpacing: "2px",
  },

  footerText: {
    color: "#b8b5a8",
    fontSize: "0.9rem",
    margin: "0.8rem 0",
    fontWeight: 300,
  },

  // Page Styles
  about: {
    background: "#0a0e27",
    minHeight: "100vh",
    padding: "6rem 5%",
  },

  contact: {
    background: "#0a0e27",
    minHeight: "100vh",
    padding: "6rem 5%",
  },

  pageTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4rem",
    marginBottom: "4rem",
    color: "#f5f1e8",
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: "-1px",
  },

  contentBlock: {
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  contentSubtitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.6rem",
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
    color: "#f5f1e8",
    fontWeight: 700,
  },

  contentText: {
    fontSize: "1rem",
    color: "#b8b5a8",
    lineHeight: 1.9,
    marginBottom: "2rem",
    fontWeight: 300,
  },

  contentList: {
    listStyleType: "none",
    paddingLeft: "1.5rem",
    marginBottom: "2.5rem",
  },

  contactWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  contactInfo: {
    paddingRight: "2rem",
  },

  infoItem: {
    marginBottom: "3rem",
    paddingBottom: "3rem",
    borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
  },

  contactForm: {
    background: "rgba(26, 31, 58, 0.6)",
    padding: "4rem",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    borderRadius: "4px",
    backdropFilter: "blur(10px)",
  },

  formGroup: {
    marginBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
  },

  formLabel: {
    color: "#d4af37",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  formInput: {
    background: "rgba(10, 14, 39, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    color: "#e8e4d9",
    padding: "1rem 1.5rem",
    borderRadius: "4px",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
  },

  successMessage: {
    marginTop: "2rem",
    padding: "1.5rem",
    background: "rgba(39, 174, 96, 0.15)",
    border: "1px solid #27ae60",
    borderRadius: "4px",
    color: "#27ae60",
    textAlign: "center",
    fontSize: "0.95rem",
    fontWeight: 600,
  },

  // Quiz Styles
  quizOption: {
    padding: "16px 20px",
    borderRadius: "12px",
    border: "2px solid rgba(212, 175, 55, 0.2)",
    background: "rgba(26, 31, 58, 0.6)",
    color: "#e8e4d9",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
  },

  quizOptionSelected: {
    border: "2px solid #d4af37",
    background: "rgba(212, 175, 55, 0.15)",
    color: "#d4af37",
    transform: "scale(1.02)",
  },

  quizOptionCorrect: {
    border: "2px solid #4ade80",
    background: "rgba(74, 222, 128, 0.15)",
    color: "#4ade80",
  },

  quizOptionWrong: {
    border: "2px solid #f87171",
    background: "rgba(248, 113, 113, 0.15)",
    color: "#f87171",
  },
};

// Animation Styles
export const ANIMATION_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@100;300;400;500;600;700&family=Crimson+Text:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.92);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  @keyframes pageTransitionIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
    }
  }

  .animate-fade-up {
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-fade-left {
    animation: fadeInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-fade-right {
    animation: fadeInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-slide-down {
    animation: slideInDown 0.6s ease-out;
  }

  .animate-scale {
    animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-bounce {
    animation: bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .page-enter {
    animation: pageTransitionIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  li {
    list-style: none;
    margin-bottom: 1.2rem;
    color: #b8b5a8;
    line-height: 1.9;
  }

  li strong {
    color: #d4af37;
  }
`;
