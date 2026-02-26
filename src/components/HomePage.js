import React from "react";
import { styles } from "./styles";
import ConceptCard from "./ConceptCard";
import FeatureItem from "./FeatureItem";
import SolutionCard from "./SolutionCard";
import StatItem from "./StatItem";

export default function HomePage({ scrollToSection, navigateTo }) {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent} className="animate-fade-left">
            <div style={styles.heroTag} className="animate-fade-up">
              <span style={styles.tagDot}>●</span>
              Chủ Nghĩa Xã Hội Khoa Học
            </div>

            <h1
              style={{ ...styles.heroTitle, animationDelay: "0.15s" }}
              className="animate-fade-up"
            >
              Sứ Mệnh
              <br />
              <span style={styles.heroHighlight}>Lịch Sử</span>
              <br />
              của Giai Cấp
              <br />
              <span style={styles.heroHighlight}>Công Nhân</span>
            </h1>

            <p
              style={{ ...styles.heroDescription, animationDelay: "0.3s" }}
              className="animate-fade-up"
            >
              Khám phá vai trò quyết định của giai cấp công nhân trong việc dẫn
              dắt nhân loại tiến tới một xã hội công bằng, văn minh và tiến bộ
              hơn.
            </p>

            <div
              style={{ ...styles.ctaButtons, animationDelay: "0.45s" }}
              className="animate-fade-up"
            >
              <button
                onClick={() => scrollToSection("benefits")}
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(212, 175, 55, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(212, 175, 55, 0.15)";
                }}
              >
                Khám Phá Ngay
              </button>

              <button
                onClick={() => navigateTo("about")}
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#d4af37";
                }}
              >
                Xem Nội Dung
              </button>
            </div>

            <div
              style={{ ...styles.heroMeta, animationDelay: "0.6s" }}
              className="animate-fade-up"
            >
              <span>📊 Nội Dung Chuyên Sâu</span>
              <span>🎓 AI Chatbot</span>
            </div>
          </div>

          <div
            style={{ ...styles.heroVisual, animationDelay: "0.2s" }}
            className="animate-fade-right"
          >
            <div style={styles.imagePlaceholderHero}>
              <img src="/anh-hero.jpg" alt="Giai cấp công nhân"
                   style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />
            </div>
            <div style={styles.heroDecoration}></div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section style={styles.concepts} id="concepts">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Nền Tảng Lý Thuyết</span>
            <h2 style={styles.sectionTitle}>
              Quan Điểm
              <br />
              <span style={{ color: "#d4af37" }}>Cơ Bản</span>
            </h2>
            <p style={styles.sectionDescription}>
              Những khái niệm nền tảng của Chủ nghĩa Mác - Lênin về giai cấp
              công nhân
            </p>
          </div>

          <div style={styles.conceptsGrid}>
            {[
              {
                icon: "📚",
                title: "Khái Niệm Giai Cấp",
                description:
                  "Giai cấp công nhân là một tập đoàn xã hội ổn định, phát triển cùng với nền công nghiệp hiện đại.",
              },
              {
                icon: "⚡",
                title: "Sứ Mệnh Lịch Sử",
                description:
                  "Lãnh đạo nhân dân lao động xóa bỏ chế độ áp bức và xây dựng xã hội cộng sản.",
              },
              {
                icon: "🔧",
                title: "Điều Kiện Thực Hiện",
                description:
                  "Yêu cầu Đảng Cộng sản lãnh đạo và xây dựng khối liên minh công - nông.",
              },
            ].map((card, idx) => (
              <ConceptCard
                key={idx}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={idx * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vietnam Section */}
      <section style={styles.vietnam} id="vietnam">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Thực Tiễn Đất Nước</span>
            <h2 style={styles.sectionTitle}>
              Giai Cấp Công Nhân
              <br />
              <span style={{ color: "#d4af37" }}>Việt Nam</span>
            </h2>
            <p style={styles.sectionDescription}>
              Đặc thù và vai trò của giai cấp công nhân Việt Nam trong bối cảnh
              phát triển
            </p>
          </div>

          <div style={styles.vietnamWrapper}>
            <div style={styles.vietnamImage} className="animate-fade-left">
              <img src="/anh-viet-nam.jpg" alt="Công nhân Việt Nam"
                   style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />
            </div>

            <div
              style={{ ...styles.vietnamContent, animationDelay: "0.2s" }}
              className="animate-fade-right"
            >
              <h2 style={styles.contentTitle}>
                Đặc <span style={{ color: "#d4af37" }}>Điểm Đặc Thù</span>
              </h2>
              <p style={styles.vietnamText}>
                Giai cấp công nhân Việt Nam ra đời từ cuộc khai thác thuộc địa
                của Pháp, phát triển trong một nước nông nghiệp lạc hậu. Nhưng
                với ưu thế chính trị, sớm tiếp thu chủ nghĩa Mác - Lênin.
              </p>

              <div style={styles.featuresList}>
                {[
                  {
                    title: "💰 Vai Trò Kinh Tế",
                    text: "Nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN.",
                  },
                  {
                    title: "🏛️ Vai Trò Chính Trị",
                    text: "Giữ vững vai trò lãnh đạo của Đảng, ngăn chặn suy thoái tư tưởng.",
                  },
                  {
                    title: "🎨 Vai Trò Văn Hóa",
                    text: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
                  },
                ].map((feat, idx) => (
                  <FeatureItem
                    key={idx}
                    title={feat.title}
                    text={feat.text}
                    delay={idx * 0.15}
                  />
                ))}
              </div>

              <button
                onClick={() => navigateTo("about")}
                style={{
                  ...styles.btnSecondary,
                  animationDelay: "0.5s",
                  marginTop: "3rem",
                }}
                className="animate-fade-up"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#d4af37";
                }}
              >
                Tìm Hiểu Chi Tiết
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={styles.solutions} id="solutions">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Chiến Lược Phát Triển</span>
            <h2 style={styles.sectionTitle}>
              Giải Pháp
              <br />
              <span style={{ color: "#d4af37" }}>Xây Dựng</span>
            </h2>
            <p style={styles.sectionDescription}>
              Những biện pháp xây dựng giai cấp công nhân Việt Nam lớn mạnh
            </p>
          </div>

          <div style={styles.solutionsGrid}>
            {[
              {
                number: "01",
                title: "Nâng Cao Nhận Thức",
                description:
                  "Nâng cao nhận thức về vai trò lãnh đạo của giai cấp công nhân trong xã hội.",
              },
              {
                number: "02",
                title: "Liên Minh Ba Tầng Lớp",
                description:
                  "Tăng cường liên minh công - nông - trí thức và doanh nhân.",
              },
              {
                number: "03",
                title: "Phát Triển Kinh Tế",
                description:
                  "Gắn với chiến lược phát triển kinh tế - xã hội và hội nhập quốc tế.",
              },
              {
                number: "04",
                title: "Đào Tạo & Bồi Dưỡng",
                description:
                  "Đẩy mạnh đào tạo, không ngừng trí thức hóa giai cấp công nhân.",
              },
            ].map((sol, idx) => (
              <SolutionCard
                key={idx}
                number={sol.number}
                title={sol.title}
                description={sol.description}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefits} id="benefits">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Tác Động Xã Hội</span>
            <h2 style={styles.sectionTitle}>
              Tầm Ảnh Hưởng &<br />
              <span style={{ color: "#d4af37" }}>Lợi Ích</span>
            </h2>
            <p style={styles.sectionDescription}>
              Những tác động tích cực khi xây dựng giai cấp công nhân lớn mạnh
            </p>
          </div>

          <div style={styles.benefitsLargeImage} className="animate-bounce">
            <img src="/anh-loi-ich.jpg" alt="Tầm ảnh hưởng"
                 style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />
          </div>

          <div style={styles.benefitsStats}>
            {[
              { number: "100%", label: "Tham Gia Sản Xuất" },
              { number: "99%", label: "Kỷ Luật Tổ Chức" },
              { number: "98%", label: "Tính Cách Mạng" },
              { number: "∞", label: "Tiềm Năng Vô Hạn" },
            ].map((stat, idx) => (
              <StatItem
                key={idx}
                number={stat.number}
                label={stat.label}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent} className="animate-fade-up">
          <h2 style={styles.ctaTitle} className="animate-fade-up">
            Hãy Cùng
            <br />
            Xây Dựng
            <br />
            Tương Lai
          </h2>
          <p
            style={{ ...styles.ctaText, animationDelay: "0.15s" }}
            className="animate-fade-up"
          >
            Giai cấp công nhân là lực lượng quyết định để dẫn dắt nhân loại tiến
            tới một xã hội công bằng, văn minh và tiến bộ hơn.
          </p>
          <button
            onClick={() => navigateTo("contact")}
            style={{
              ...styles.btnPrimary,
              marginTop: "2rem",
              background: "white",
              color: "#a72e2e",
              animationDelay: "0.3s",
            }}
            className="animate-fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            Ôn Tập Ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>Chủ Nghĩa Xã Hội Khoa Học</p>
          <p style={styles.footerText}>
            Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân
          </p>
          <p
            style={{
              ...styles.footerText,
              marginTop: "2rem",
              color: "#d4af37",
              fontSize: "0.85rem",
            }}
          >
            © 2024 Nội Dung Chuyên Sâu | Tất cả quyền được bảo lưu
          </p>
        </div>
      </footer>
    </>
  );
}
