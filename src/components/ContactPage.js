import React, { useState } from "react";
import { styles } from "./styles";

// 30 câu hỏi trắc nghiệm (không có prefix A.B.C.D)
const quizQuestions = [
  // PHẦN I: Quan điểm của Chủ nghĩa Mác – Lênin (10 câu)
  {
    question: "Theo chủ nghĩa Mác – Lênin, giai cấp công nhân ra đời và phát triển gắn liền với:",
    options: ["Nền kinh tế nông nghiệp", "Nền công nghiệp hiện đại", "Thương mại tự do", "Kinh tế tiểu thủ công"],
    correctAnswer: 1
  },
  {
    question: "Đặc điểm kinh tế cơ bản của giai cấp công nhân là:",
    options: ["Sở hữu tư liệu sản xuất chủ yếu", "Làm chủ doanh nghiệp tư nhân", "Không sở hữu tư liệu sản xuất và bán sức lao động", "Là tầng lớp trung lưu"],
    correctAnswer: 2
  },
  {
    question: "Về chính trị - xã hội, giai cấp công nhân có đặc điểm nổi bật là:",
    options: ["Tính cá nhân cao", "Tính tổ chức và kỷ luật cao", "Phụ thuộc vào tư sản", "Không có tinh thần hợp tác"],
    correctAnswer: 1
  },
  {
    question: "Sứ mệnh lịch sử của giai cấp công nhân là:",
    options: ["Phát triển kinh tế tư bản", "Xóa bỏ chế độ áp bức, xây dựng xã hội cộng sản", "Duy trì chế độ tư hữu", "Tăng lợi nhuận cho doanh nghiệp"],
    correctAnswer: 1
  },
  {
    question: "Nội dung kinh tế trong sứ mệnh lịch sử của GCCN là:",
    options: ["Tư nhân hóa tư liệu sản xuất", "Xác lập quan hệ sản xuất công hữu", "Mở rộng kinh tế cá thể", "Phát triển kinh tế tư nhân"],
    correctAnswer: 1
  },
  {
    question: "Nội dung chính trị trong sứ mệnh lịch sử là:",
    options: ["Thỏa hiệp với giai cấp tư sản", "Lật đổ chính quyền cũ, thiết lập nhà nước của nhân dân lao động", "Giữ nguyên bộ máy nhà nước cũ", "Trung lập chính trị"],
    correctAnswer: 1
  },
  {
    question: "Nội dung văn hóa – tư tưởng của sứ mệnh lịch sử là:",
    options: ["Duy trì hệ tư tưởng tư sản", "Xây dựng hệ giá trị công bằng, dân chủ, bình đẳng", "Xóa bỏ giáo dục", "Phát triển văn hóa tiêu dùng"],
    correctAnswer: 1
  },
  {
    question: "Điều kiện khách quan để GCCN thực hiện sứ mệnh là:",
    options: ["Có nhiều tài sản", "Đại diện cho lực lượng sản xuất tiên tiến", "Có số lượng nhỏ", "Phụ thuộc vào nông dân"],
    correctAnswer: 1
  },
  {
    question: "Điều kiện chủ quan quan trọng nhất là:",
    options: ["Có nhiều doanh nghiệp", "Có Đảng Cộng sản lãnh đạo", "Có tầng lớp trung lưu đông", "Có vốn đầu tư nước ngoài"],
    correctAnswer: 1
  },
  {
    question: "Liên minh cơ bản để thực hiện sứ mệnh là:",
    options: ["Công – thương", "Công – nông", "Nông – tư sản", "Trí thức – tư sản"],
    correctAnswer: 1
  },
  // PHẦN II: Giai cấp công nhân hiện nay (10 câu)
  {
    question: "Hiện nay GCCN vẫn là:",
    options: ["Lực lượng sản xuất hàng đầu", "Lực lượng yếu thế nhất", "Tầng lớp trung lưu chủ yếu", "Giai cấp sở hữu"],
    correctAnswer: 0
  },
  {
    question: "Biểu hiện của sự \"trí tuệ hóa\" là:",
    options: ["Công nhân giảm trình độ", "Công nhân tri thức ngày càng tăng", "Lao động thủ công tăng", "Giảm sử dụng công nghệ"],
    correctAnswer: 1
  },
  {
    question: "\"Trung lưu hóa\" nghĩa là:",
    options: ["Công nhân mất việc", "Một bộ phận tham gia sở hữu tư liệu sản xuất", "Không còn đấu tranh", "Trở thành tư sản hoàn toàn"],
    correctAnswer: 1
  },
  {
    question: "Trong các nước XHCN, GCCN giữ vai trò:",
    options: ["Đối lập với nhà nước", "Lãnh đạo xây dựng CNXH", "Trung lập chính trị", "Bị loại bỏ"],
    correctAnswer: 1
  },
  {
    question: "Ở các nước TBCN, GCCN đấu tranh chống:",
    options: ["Công nghiệp hóa", "Áp bức, bất công", "Phát triển khoa học", "Toàn cầu hóa"],
    correctAnswer: 1
  },
  {
    question: "Nội dung kinh tế của GCCN hiện nay là:",
    options: ["Ngừng sản xuất", "Quyết định sự tồn tại xã hội qua sản xuất vật chất", "Chỉ tham gia dịch vụ", "Phụ thuộc hoàn toàn tư sản"],
    correctAnswer: 1
  },
  {
    question: "Cuộc đấu tranh văn hóa hiện nay là giữa:",
    options: ["Công nghiệp và nông nghiệp", "CNXH và CNTB", "Đông và Tây", "Thành thị và nông thôn"],
    correctAnswer: 1
  },
  {
    question: "Xung đột lợi ích giữa GCCN và tư sản vẫn tồn tại do:",
    options: ["Khác biệt tôn giáo", "Vấn đề giá trị thặng dư", "Khác biệt văn hóa", "Khác biệt địa lý"],
    correctAnswer: 1
  },
  {
    question: "Yếu tố nào làm thay đổi cơ cấu GCCN hiện nay?",
    options: ["Cách mạng khoa học – công nghệ", "Giảm dân số", "Chiến tranh lạnh", "Nông nghiệp hóa"],
    correctAnswer: 0
  },
  {
    question: "Trong bối cảnh mới, GCCN cần:",
    options: ["Tách rời chính trị", "Nâng cao trình độ và bản lĩnh", "Phụ thuộc tư sản", "Giảm hợp tác"],
    correctAnswer: 1
  },
  // PHẦN III: Giai cấp công nhân Việt Nam (10 câu)
  {
    question: "GCCN Việt Nam ra đời từ:",
    options: ["Cách mạng công nghiệp 4.0", "Khai thác thuộc địa của Pháp", "Thời phong kiến", "Sau đổi mới 1986"],
    correctAnswer: 1
  },
  {
    question: "GCCN Việt Nam phát triển trong bối cảnh:",
    options: ["Công nghiệp phát triển cao", "Nước nông nghiệp lạc hậu", "Kinh tế tư bản phát triển", "Xã hội hậu công nghiệp"],
    correctAnswer: 1
  },
  {
    question: "Ưu thế chính trị của GCCN Việt Nam là:",
    options: ["Có nhiều vốn", "Sớm tiếp thu chủ nghĩa Mác – Lênin", "Có nhiều tài nguyên", "Không có lãnh đạo"],
    correctAnswer: 1
  },
  {
    question: "GCCN Việt Nam gắn bó mật thiết với:",
    options: ["Tư sản", "Nông dân", "Địa chủ", "Thương nhân"],
    correctAnswer: 1
  },
  {
    question: "Trong kinh tế hiện nay, GCCN Việt Nam là:",
    options: ["Lực lượng phụ", "Nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN", "Lực lượng trung lập", "Không quan trọng"],
    correctAnswer: 1
  },
  {
    question: "Động lực phát triển hiện nay là:",
    options: ["Lao động thủ công", "Khoa học – công nghệ", "Nông nghiệp truyền thống", "Kinh tế tự cung tự cấp"],
    correctAnswer: 1
  },
  {
    question: "Trong chính trị, GCCN Việt Nam cần:",
    options: ["Xa rời Đảng", "Giữ vững vai trò lãnh đạo của Đảng", "Trung lập", "Thỏa hiệp tư sản"],
    correctAnswer: 1
  },
  {
    question: "Một trong những nhiệm vụ văn hóa là:",
    options: ["Xóa bỏ bản sắc dân tộc", "Xây dựng văn hóa tiên tiến, đậm đà bản sắc dân tộc", "Phủ nhận tư tưởng Hồ Chí Minh", "Tách rời CN Mác – Lênin"],
    correctAnswer: 1
  },
  {
    question: "Giải pháp quan trọng xây dựng GCCN lớn mạnh là:",
    options: ["Giảm đào tạo", "Đẩy mạnh trí thức hóa công nhân", "Thu hẹp liên minh", "Giảm hội nhập"],
    correctAnswer: 1
  },
  {
    question: "Xây dựng GCCN Việt Nam là trách nhiệm của:",
    options: ["Chỉ riêng Đảng", "Toàn hệ thống chính trị và bản thân công nhân", "Doanh nghiệp nước ngoài", "Cá nhân lãnh đạo"],
    correctAnswer: 1
  }
];

// Hàm xáo trộn mảng Fisher-Yates
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Hàm random 10 câu hỏi từ 30 câu và xáo trộn đáp án
const getRandomQuestions = () => {
  // Random 10 câu hỏi
  const shuffledQuestions = shuffleArray(quizQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);
  
  // Xáo trộn đáp án cho mỗi câu hỏi
  return selectedQuestions.map(q => {
    const correctAnswerText = q.options[q.correctAnswer];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
    
    return {
      ...q,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex
    };
  });
};

export default function ContactPage({ navigateTo }) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setQuestions(getRandomQuestions());
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const handleAnswer = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswers(prev => [...prev, {
      question: questions[currentQuestion].question,
      selected: answerIndex,
      correct: questions[currentQuestion].correctAnswer,
      isCorrect
    }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const getOptionStyle = (index) => {
    if (!showResult) {
      return selectedAnswer === index ? { ...styles.quizOption, ...styles.quizOptionSelected } : styles.quizOption;
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return { ...styles.quizOption, ...styles.quizOptionCorrect };
    }
    
    if (selectedAnswer === index && index !== questions[currentQuestion].correctAnswer) {
      return { ...styles.quizOption, ...styles.quizOptionWrong };
    }
    
    return { ...styles.quizOption, opacity: 0.6 };
  };

  // Nếu chưa bắt đầu quiz - hiển thị trang chọn bắt đầu
  if (!quizStarted) {
    return (
      <>
        <section style={{ ...styles.contact, paddingTop: "160px" }} className="page-enter">
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
              Ôn
              <br />
              <span style={{ color: "#d4af37" }}>Tập</span>
            </h1>

            <div style={{ ...styles.contactWrapper, animationDelay: "0.2s" }} className="animate-fade-up">
              <div style={{ 
                ...styles.contactInfo, 
                textAlign: "center",
                padding: "60px 40px",
                background: "rgba(26, 31, 58, 0.6)",
                borderRadius: "20px",
                border: "1px solid rgba(212, 175, 55, 0.2)"
              }}>
                <div style={{ fontSize: "80px", marginBottom: "20px" }}>📝</div>
                <h2 style={{ ...styles.contentTitle, marginTop: 0, marginBottom: "20px" }}>
                  Trắc Nghiệm Ôn Tập
                </h2>
                <p style={{ ...styles.contentText, marginBottom: "30px", fontSize: "16px" }}>
                  Chương 2: Sứ mệnh lịch sử của giai cấp công nhân
                </p>
                <div style={{ 
                  background: "rgba(212, 175, 55, 0.1)", 
                  padding: "20px", 
                  borderRadius: "12px",
                  marginBottom: "30px"
                }}>
                  <p style={{ margin: 0, color: "#d4af37", fontWeight: 600 }}>
                    📋 Thông tin bài quiz:
                  </p>
                  <p style={{ margin: "10px 0 0", fontSize: "14px" }}>
                    • 30 câu hỏi trong ngân hàng<br/>
                    • 10 câu được chọn ngẫu nhiên mỗi lần<br/>
                    • Mỗi câu 1 điểm<br/>
                    • Kết quả sẽ hiển thị sau khi hoàn thành
                  </p>
                </div>
                <button
                  onClick={startQuiz}
                  style={{
                    ...styles.btnPrimary,
                    padding: "16px 50px",
                    fontSize: "18px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(212, 175, 55, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.15)";
                  }}
                >
                  🚀 Bắt Đầu Làm Bài
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
            <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
          </div>
        </footer>
      </>
    );
  }

  // Nếu hoàn thành quiz - hiển thị kết quả
  if (quizCompleted) {
    const percentage = (score / 10) * 100;
    let message = "";
    let emoji = "";
    
    if (percentage >= 80) {
      message = "Xuất sắc! Bạn đã nắm vững kiến thức!";
      emoji = "🏆";
    } else if (percentage >= 60) {
      message = "Làm tốt lắm! Tiếp tục cố gắng!";
      emoji = "👏";
    } else {
      message = "Cần ôn tập thêm nha!";
      emoji = "💪";
    }

    return (
      <>
        <section style={{ ...styles.contact, paddingTop: "160px" }} className="page-enter">
          <div style={styles.sectionContainer}>
            <button
              onClick={() => navigateTo("home")}
              style={{ ...styles.btnSecondary, marginBottom: "4rem" }}
              className="animate-fade-up"
            >
              ← Quay Lại Trang Chủ
            </button>

            <h1 style={styles.pageTitle} className="animate-fade-up">
              Kết
              <br />
              <span style={{ color: "#d4af37" }}>Quả</span>
            </h1>

            <div style={{ ...styles.contactWrapper, animationDelay: "0.2s" }} className="animate-fade-up">
              <div style={{ 
                ...styles.contactInfo, 
                textAlign: "center",
                padding: "60px 40px",
                background: "rgba(26, 31, 58, 0.6)",
                borderRadius: "20px",
                border: "1px solid rgba(212, 175, 55, 0.2)"
              }}>
                <div style={{ fontSize: "100px", marginBottom: "20px" }}>{emoji}</div>
                <h2 style={{ ...styles.contentTitle, marginTop: 0, marginBottom: "10px", fontSize: "28px" }}>
                  {message}
                </h2>
                <div style={{ 
                  fontSize: "72px", 
                  fontWeight: 700, 
                  color: percentage >= 60 ? "#4ade80" : "#f87171",
                  margin: "30px 0"
                }}>
                  {score}/10
                </div>
                <p style={{ ...styles.contentText, marginBottom: "30px" }}>
                  Bạn đã trả lời đúng {score} trên 10 câu hỏi
                </p>

                {/* Hiển thị chi tiết các câu trả lời */}
                <div style={{ textAlign: "left", marginTop: "30px" }}>
                  <h3 style={{ color: "#d4af37", marginBottom: "20px" }}>📝 Chi tiết đáp án:</h3>
                  {answers.map((answer, idx) => (
                    <div key={idx} style={{
                      background: answer.isCorrect ? "rgba(74, 222, 128, 0.1)" : "rgba(248, 113, 113, 0.1)",
                      border: `1px solid ${answer.isCorrect ? "rgba(74, 222, 128, 0.3)" : "rgba(248, 113, 113, 0.3)"}`,
                      borderRadius: "10px",
                      padding: "15px",
                      marginBottom: "12px"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <span style={{ 
                          color: answer.isCorrect ? "#4ade80" : "#f87171",
                          fontWeight: 700
                        }}>
                          {answer.isCorrect ? "✓" : "✗"}
                        </span>
                        <span style={{ fontWeight: 600 }}>Câu {idx + 1}:</span>
                      </div>
                      <p style={{ margin: 0, fontSize: "14px", color: "#a8a5a0" }}>
                        {answer.question}
                      </p>
                      <p style={{ margin: "8px 0 0", fontSize: "14px" }}>
                        <span style={{ color: "#4ade80" }}>✓ Đáp án đúng: </span>
                        {questions.find(q => q.question === answer.question)?.options[answer.correct]}
                      </p>
                      {!answer.isCorrect && (
                        <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#f87171" }}>
                          ✗ Bạn chọn: {questions.find(q => q.question === answer.question)?.options[answer.selected]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={startQuiz}
                  style={{
                    ...styles.btnPrimary,
                    padding: "16px 50px",
                    fontSize: "18px",
                    marginTop: "30px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  🔄 Làm Lại
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
            <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
          </div>
        </footer>
      </>
    );
  }

  // Hiển thị câu hỏi hiện tại
  const currentQ = questions[currentQuestion];

  return (
    <>
      <section style={{ ...styles.contact, paddingTop: "160px" }} className="page-enter">
        <div style={styles.sectionContainer}>
          <button
            onClick={() => navigateTo("home")}
            style={{ ...styles.btnSecondary, marginBottom: "2rem" }}
            className="animate-fade-up"
          >
            ← Quay Lại Trang Chủ
          </button>

          {/* Progress bar */}
          <div style={{
            background: "rgba(26, 31, 58, 0.6)",
            borderRadius: "12px",
            padding: "20px 30px",
            marginBottom: "30px",
            border: "1px solid rgba(212, 175, 55, 0.2)"
          }} className="animate-fade-up">
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginBottom: "10px"
            }}>
              <span style={{ color: "#d4af37", fontWeight: 600 }}>
                Câu hỏi {currentQuestion + 1} / 10
              </span>
              <span style={{ color: "#a8a5a0" }}>
                Điểm: {score}
              </span>
            </div>
            <div style={{
              height: "8px",
              background: "rgba(212, 175, 55, 0.2)",
              borderRadius: "4px",
              overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                width: `${((currentQuestion + 1) / 10) * 100}%`,
                background: "linear-gradient(90deg, #d4af37 0%, #a72e2e 100%)",
                borderRadius: "4px",
                transition: "width 0.3s ease"
              }} />
            </div>
          </div>

          <div style={{ ...styles.contactWrapper, animationDelay: "0.2s" }} className="animate-fade-up">
            <div style={{ 
              ...styles.contactInfo, 
              padding: "40px",
              background: "rgba(26, 31, 58, 0.6)",
              borderRadius: "20px",
              border: "1px solid rgba(212, 175, 55, 0.2)"
            }}>
              <h2 style={{ 
                ...styles.contentTitle, 
                marginTop: 0, 
                marginBottom: "30px",
                fontSize: "22px",
                lineHeight: 1.6
              }}>
                {currentQ.question}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={showResult}
                    style={getOptionStyle(idx)}
                  >
                    <span style={{ marginRight: "12px", fontWeight: 700, color: "#d4af37" }}>•</span>
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div style={{
                  marginTop: "25px",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  background: selectedAnswer === currentQ.correctAnswer 
                    ? "rgba(74, 222, 128, 0.15)" 
                    : "rgba(248, 113, 113, 0.15)",
                  border: `1px solid ${selectedAnswer === currentQ.correctAnswer 
                    ? "rgba(74, 222, 128, 0.3)" 
                    : "rgba(248, 113, 113, 0.3)"}`
                }}>
                  <p style={{ 
                    margin: 0, 
                    color: selectedAnswer === currentQ.correctAnswer ? "#4ade80" : "#f87171",
                    fontWeight: 600,
                    fontSize: "16px"
                  }}>
                    {selectedAnswer === currentQ.correctAnswer 
                      ? "✓ Chính xác!" 
                      : "✗ Chưa đúng!"}
                  </p>
                  {!showResult && selectedAnswer === currentQ.correctAnswer}
                </div>
              )}

              {showResult && (
                <button
                  onClick={handleNext}
                  style={{
                    ...styles.btnPrimary,
                    marginTop: "25px",
                    padding: "14px 40px"
                  }}
                >
                  {currentQuestion < questions.length - 1 ? "Câu tiếp theo →" : "Xem kết quả"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
        </div>
      </footer>
    </>
  );
}
