import React, { useState, useRef, useEffect } from "react";

// Hàm parse Markdown để hiển thị đúng định dạng
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY || "";
const parseMarkdown = (text) => {
  if (!text) return null;
  
  // Tách text thành các phần theo **
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    // Kiểm tra nếu là text in đậm (**text**)
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} style={{ color: "#d4af37", fontWeight: 700 }}>
          {boldText}
        </strong>
      );
    }
    return part;
  });
};

const SYSTEM_PROMPT = `Bạn là một trợ lý học tập chuyên về môn "Chủ Nghĩa Xã Hội Khoa Học" với chủ đề "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân".

NỘI DUNG CHÍNH ĐƯỢC PHÉP TRẢ LỜI (Trả lời CHÍNH XÁC theo nội dung bên dưới):

I. QUAN ĐIỂM CƠ BẢN CỦA CHỦ NGHĨA MÁC - LÊNIN VỀ GIAI CẤP CÔNG NHÂN VÀ SỨ MỆNH LỊCH SỬ THẾ GIỚI

1. Khái niệm và đặc điểm:
- Giai cấp công nhân (GCCN) là tập đoàn xã hội phát triển cùng nền công nghiệp hiện đại
- Về kinh tế: Không sở hữu tư liệu sản xuất chủ yếu, phải bán sức lao động
- Về chính trị - xã hội: Có tính tổ chức, kỷ luật cao, tinh thần hợp tác, là giai cấp cách mạng triệt để nhất

2. Nội dung sứ mệnh lịch sử:
- Kinh tế: Tạo tiền đề vật chất - kỹ thuật, xác lập quan hệ sản xuất công hữu
- Chính trị: Lật đổ chính quyền cũ, thiết lập nhà nước của nhân dân lao động
- Văn hóa - tư tưởng: Xây dựng hệ giá trị công bằng, dân chủ, bình đẳng

3. Điều kiện thực hiện:
- Khách quan: Đại diện lực lượng sản xuất tiên tiến
- Chủ quan: Phải có Đảng Cộng sản lãnh đạo, xây dựng khối liên minh công - nông

II. GIAI CẤP CÔNG NHÂN VÀ VIỆC THỰC HIỆN SỨ MỆNH LỊCH SỬ HIỆN NAY

1. Điểm tương đồng và biến đổi:
- Tương đồng: GCCN vẫn là lực lượng sản xuất hàng đầu, xung đột lợi ích với tư sản vẫn tồn tại
- Biến đổi: "Trí tuệ hóa" (công nhân tri thức tăng), "Trung lưu hóa" (một bộ phận tham gia sở hữu)

2. Thực hiện sứ mệnh trong bối cảnh mới:
- Ở nước XHCN: GCCN lãnh đạo xây dựng CNXH
- Ở nước TBCN: Đấu tranh chống áp bức, bất công
- Văn hóa: Đấu tranh lý thuyết giữa CNXH và CNTB

III. SỨ MỆNH LỊCH SỬ CỦA GIAI CẤP CÔNG NHÂN VIỆT NAM

1. Đặc điểm đặc thù:
- Ra đời từ khai thác thuộc địa của Pháp, phát triển trong nước nông nghiệp lạc hậu
- Ưu thế: Sớm tiếp thu chủ nghĩa Mác - Lênin, có Đảng lãnh đạo
- Gắn bó mật thiết với nông dân

2. Nội dung sứ mệnh hiện nay:
- Kinh tế: Nguồn nhân lực chính phát triển KT thị trường định hướng XHCN
- Chính trị: Giữ vững vai trò lãnh đạo của Đảng
- Văn hóa: Xây dựng văn hóa tiên tiến, đậm đà bản sắc dân tộc

3. Giải pháp:
- Nâng cao nhận thức vai trò lãnh đạo GCCN
- Tăng cường liên minh công - nông - trí thức
- Đẩy mạnh trí thức hóa giai cấp công nhân

QUY TẮC TRẢ LỜI:
- Trả lời NGẮN GỌN, đúng trọng tâm theo nội dung trên
- Dùng dấu • để liệt kê
- KHÔNG được thêm thông tin ngoài nội dung đã cho
- Nếu câu hỏi ngoài chủ đề: "Xin lỗi, tôi chỉ hỗ trợ về nội dung Chương 2: Sứ mệnh lịch sử của giai cấp công nhân"

Hãy trả lời bằng tiếng Việt, thân thiện!`;

const chatStyles = {
  chatButtonContainer: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 9999,
  },
  chatButton: {
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #d4af37 0%, #a72e2e 100%)",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatWindow: {
    position: "fixed",
    bottom: "110px",
    right: "30px",
    width: "380px",
    height: "520px",
    background: "rgba(10, 14, 39, 0.98)",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    animation: "fadeInUp 0.3s ease-out",
  },
  chatHeader: {
    padding: "16px 20px",
    background: "linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)",
    borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#d4af37",
    fontWeight: 600,
    fontSize: "15px",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "#b8b5a8",
    fontSize: "18px",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "4px",
    transition: "all 0.2s",
  },
  chatMessages: {
    flex: 1,
    overflow: "auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  message: {
    display: "flex",
    width: "100%",
  },
  messageBubble: {
    maxWidth: "85%",
    padding: "12px 16px",
    fontSize: "14px",
    lineHeight: 1.6,
    wordBreak: "break-word",
  },
  chatInput: {
    padding: "14px",
    borderTop: "1px solid rgba(212, 175, 55, 0.2)",
    display: "flex",
    gap: "10px",
    background: "rgba(26, 31, 58, 0.5)",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: "24px",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    background: "rgba(10, 14, 39, 0.8)",
    color: "#e8e4d9",
    fontSize: "14px",
    outline: "none",
    fontFamily: "'Poppins', sans-serif",
  },
  sendButton: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#d4af37",
    border: "none",
    color: "#0a0e27",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Xin chào! Tôi là trợ lý học tập về Chương 2: Sứ mệnh lịch sử của giai cấp công nhân. Bạn cần hỗ trợ gì về nội dung này?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: "user", content: userMessage }
      ];

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "openai/gpt-4o-mini",
          "messages": apiMessages,
          "max_tokens": 500
        })
      });

      const result = await response.json();
      
      if (result.choices && result.choices[0]) {
        const assistantMessage = result.choices[0].message.content;
        setMessages(prev => [...prev, { role: "assistant", content: assistantMessage }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "Xin lỗi, có lỗi xảy ra. Bạn thử lại sau nhé!" }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Xin lỗi, có lỗi kết nối. Bạn thử lại sau nhé!" }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div style={chatStyles.chatButtonContainer}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={chatStyles.chatButton}
          title="Chat với trợ lý học tập"
        >
          {isOpen ? "✕" : "💬"}
        </button>
      </div>

      {isOpen && (
        <div style={chatStyles.chatWindow}>
          <div style={chatStyles.chatHeader}>
            <span>📚 Trợ lý học tập MLN131</span>
            <button 
              onClick={() => setIsOpen(false)} 
              style={chatStyles.closeButton}
            >
              ✕
            </button>
          </div>
          
          <div style={chatStyles.chatMessages}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                style={{
                  ...chatStyles.message,
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div style={{
                  ...chatStyles.messageBubble,
                  background: msg.role === "user" ? "#d4af37" : "rgba(26, 31, 58, 0.9)",
                  color: msg.role === "user" ? "#0a0e27" : "#e8e4d9",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  whiteSpace: "pre-wrap",
                }}>
                  {msg.role === "assistant" ? parseMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={chatStyles.message}>
                <div style={{...chatStyles.messageBubble, background: "rgba(26, 31, 58, 0.9)", color: "#d4af37"}}>
                  Đang trả lời...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={chatStyles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập câu hỏi..."
              style={chatStyles.input}
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              style={chatStyles.sendButton}
              disabled={isLoading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
