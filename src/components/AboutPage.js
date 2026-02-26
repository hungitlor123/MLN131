import React from "react";
import { styles } from "./styles";

export default function AboutPage({ navigateTo }) {
  return (
    <>
      <section
        style={{ ...styles.about, paddingTop: "160px" }}
        className="page-enter"
      >
        <div style={styles.sectionContainer}>
          <button
            onClick={() => navigateTo("home")}
            style={{ ...styles.btnSecondary, marginBottom: "4rem" }}
            className="animate-fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ← Quay Lại Trang Chủ
          </button>

          <h1 style={styles.pageTitle} className="animate-fade-up">
            Chi Tiết
            <br />
            <span style={{ color: "#d4af37" }}>Nội Dung</span>
          </h1>

          <div
            style={{ ...styles.contentBlock, animationDelay: "0.2s" }}
            className="animate-fade-up"
          >
            <h2 style={{ ...styles.contentTitle, marginTop: 0 }}>
              I. Quan Điểm Cơ Bản của Chủ Nghĩa Mác - Lênin
            </h2>

            <h3 style={styles.contentSubtitle}>1. Khái Niệm và Đặc Điểm</h3>
            <p style={styles.contentText}>
              Giai cấp công nhân (GCCN) không chỉ là những người làm việc trong
              nhà máy, mà là một tập đoàn xã hội ổn định, phát triển cùng với
              nền công nghiệp hiện đại.
            </p>
            <ul style={styles.contentList}>
              <li>
                <strong>Về kinh tế - xã hội:</strong> Họ là những người vận hành
                các công cụ sản xuất hiện đại, có tính xã hội hóa cao. Điểm mấu
                chốt là họ không sở hữu tư liệu sản xuất chủ yếu và phải bán sức
                lao động.
              </li>
              <li>
                <strong>Về chính trị - xã hội:</strong> Do làm việc trong môi
                trường đại công nghiệp, GCCN có tính tổ chức, kỷ luật cao, tinh
                thần hợp tác và là giai cấp cách mạng triệt để nhất.
              </li>
            </ul>

            <h3 style={styles.contentSubtitle}>2. Nội Dung Sứ Mệnh Lịch Sử</h3>
            <p style={styles.contentText}>
              Sứ mệnh của GCCN là lãnh đạo nhân dân lao động đấu tranh xóa bỏ
              chế độ áp bức, bất công, xóa bỏ CNTB để xây dựng xã hội cộng sản
              văn minh.
            </p>
            <ul style={styles.contentList}>
              <li>
                <strong>Kinh tế:</strong> Tạo tiền đề vật chất - kỹ thuật và xác
                lập quan hệ sản xuất công hữu.
              </li>
              <li>
                <strong>Chính trị:</strong> Lật đổ chính quyền cũ, thiết lập nhà
                nước của nhân dân lao động để cải tạo xã hội.
              </li>
              <li>
                <strong>Văn hóa - tư tưởng:</strong> Xây dựng hệ giá trị mới như
                công bằng, dân chủ, bình đẳng và củng cố ý thức hệ tiên tiến của
                GCCN.
              </li>
            </ul>

            <h3 style={styles.contentSubtitle}>3. Điều Kiện Thực Hiện</h3>
            <ul style={styles.contentList}>
              <li>
                <strong>Khách quan:</strong> Do địa vị kinh tế là đại diện cho
                lực lượng sản xuất tiên tiến và đặc điểm chính trị là giai cấp
                kỷ luật, bản chất quốc tế.
              </li>
              <li>
                <strong>Chủ quan:</strong> GCCN phải phát triển về số lượng,
                chất lượng; quan trọng nhất là phải có Đảng Cộng sản lãnh đạo và
                xây dựng được khối liên minh công - nông.
              </li>
            </ul>

            <h2 style={styles.contentTitle}>II. Giai Cấp Công Nhân Việt Nam</h2>

            <h3 style={styles.contentSubtitle}>1. Đặc Điểm Đặc Thù</h3>
            <p style={styles.contentText}>
              GCCN Việt Nam là sản phẩm của một quá trình công nghiệp hóa đặc
              biệt. Ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển
              trong một nước nông nghiệp lạc hậu, công nghệ thấp.
            </p>
            <ul style={styles.contentList}>
              <li>
                Ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong
                một nước nông nghiệp lạc hậu, công nghệ thấp.
              </li>
              <li>
                <strong>Ưu thế chính trị:</strong> Sớm tiếp thu chủ nghĩa Mác -
                Lênin, có Đảng và lãnh tụ sáng suốt lãnh đạo, luôn vững vàng và
                kiên quyết nhất.
              </li>
              <li>
                <strong>Quan hệ mật thiết:</strong> Gắn bó máu thịt với dân tộc
                và giai cấp nông dân.
              </li>
            </ul>

            <h3 style={styles.contentSubtitle}>2. Nội Dung Sứ Mệnh Hiện Nay</h3>
            <ul style={styles.contentList}>
              <li>
                <strong>Kinh tế:</strong> Là nguồn nhân lực chính phát triển
                kinh tế thị trường định hướng XHCN, lấy khoa học - công nghệ làm
                động lực.
              </li>
              <li>
                <strong>Chính trị:</strong> Giữ vững vai trò lãnh đạo của Đảng,
                ngăn chặn suy thoái tư tưởng, "tự diễn biến", "tự chuyển hóa".
              </li>
              <li>
                <strong>Văn hóa:</strong> Xây dựng nền văn hóa tiên tiến, đậm đà
                bản sắc dân tộc; bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin
                và tư tưởng Hồ Chí Minh.
              </li>
            </ul>

            <h3 style={styles.contentSubtitle}>
              3. Giải Pháp Xây Dựng GCCN Việt Nam Lớn Mạnh
            </h3>
            <p style={styles.contentText}>
              Để thực hiện thắng lợi sứ mệnh, chúng ta cần:
            </p>
            <ol style={styles.contentList}>
              <li>Nâng cao nhận thức về vai trò lãnh đạo của GCCN.</li>
              <li>
                Tăng cường liên minh công - nông - trí thức và doanh nhân.
              </li>
              <li>
                Gắn xây dựng GCCN với chiến lược phát triển kinh tế - xã hội và
                hội nhập quốc tế.
              </li>
              <li>
                Đẩy mạnh đào tạo, bồi dưỡng, không ngừng trí thức hóa giai cấp
                công nhân.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>© 2024 Nội Dung Chuyên Sâu</p>
        </div>
      </footer>
    </>
  );
}
