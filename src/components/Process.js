// --- CSS STYLES ---
const cssStyles = `
  .stories-section {
    background-color: #151922;
    padding: 5rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    overflow: hidden;
  }

  .stories-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .stories-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 4rem;
    color: white;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    justify-items: center;
  }

  @media (min-width: 768px) {
    .stories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .stories-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* --- PHONE MOCKUP STYLES --- */
  .phone-card {
    background-color: #ffffff; /* Tło aplikacji czatu (Telegram default bg is image, but white/light gray is fine for mockup) */
    width: 100%;
    max-width: 280px;
    height: 500px;
    border-radius: 20px;
    border: 8px solid #1e293b; /* Ramka telefonu */
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  /* Phone Header (Status Bar + App Header) */
  .phone-header {
    background-color: #f8f9fa;
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 10;
  }

  .header-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #3b82f6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  .header-info {
    display: flex;
    flex-direction: column;
  }

  .header-name {
    font-size: 14px;
    font-weight: 600;
    color: #111827;
  }

  .header-status {
    font-size: 11px;
    color: #3b82f6;
  }

  /* Chat Area */
  .chat-area {
    flex: 1;
    background-color: #e5ddd5; /* WhatsApp-like bg color or Telegram pattern */
    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 15px 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  /* Messages */
  .message {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 1.4;
    position: relative;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  .msg-incoming {
    background-color: #ffffff;
    align-self: flex-start;
    color: #111827;
    border-bottom-left-radius: 4px;
  }

  .msg-outgoing {
    background-color: #dcf8c6; /* WhatsApp green-ish */
    align-self: flex-end;
    color: #111827;
    border-bottom-right-radius: 4px;
  }

  .msg-time {
    font-size: 10px;
    color: #9ca3af;
    text-align: right;
    margin-top: 4px;
  }

  /* Image Attachment Mockup */
  .msg-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 5px;
    overflow: hidden;
    background-color: #f3f4f6;
    border: 1px solid #e5e7eb;
  }

  .trading-result {
    padding: 10px;
  }

  .result-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    font-family: monospace;
    font-size: 11px;
  }

  .profit-text {
    color: #16a34a; /* Green */
    font-weight: bold;
  }

  .symbol-text {
    font-weight: 700;
    color: #374151;
  }

  /* Input Area (Fake) */
  .phone-input {
    background-color: #f0f2f5;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .input-fake {
    flex: 1;
    height: 30px;
    background-color: white;
    border-radius: 15px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    color: #9ca3af;
    font-size: 12px;
  }

  .send-btn {
    width: 30px;
    height: 30px;
    background-color: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Decoration Elements */
  .blur-glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #00c075;
    filter: blur(100px);
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }
`;

// --- DANE DO MAKIET ---

const storiesData = [
  {
    name: "Alex M.",
    avatarColor: "#8b5cf6", // Purple
    messages: [
      {
        type: "incoming",
        text: "Just closed the XAUUSD trade. Unbelievable results for this week!",
        hasImage: true,
        profit: "+ $1,240.50",
      },
      { type: "outgoing", text: "Great work Alex! Consistency is key 🔥" },
    ],
  },
  {
    name: "Sarah K.",
    avatarColor: "#ec4899", // Pink
    messages: [
      { type: "outgoing", text: "How is the challenge going Sarah?" },
      {
        type: "incoming",
        text: "Passed phase 1 today! Thanks to your signals.",
        hasImage: true,
        profit: "+ $4,500.00",
      },
      { type: "incoming", text: "Sending proof now 👇" },
    ],
  },
  {
    name: "David Trading",
    avatarColor: "#f59e0b", // Orange
    messages: [
      {
        type: "incoming",
        text: "Another TP hit on Gold. This strategy is printing money.",
        hasImage: true,
        profit: "+ $892.00",
      },
      { type: "outgoing", text: "Love to see it! Keep compounding." },
      { type: "incoming", text: "🚀🚀" },
    ],
  },
  {
    name: "Michael J.",
    avatarColor: "#10b981", // Green
    messages: [
      { type: "outgoing", text: "Did you catch the morning move?" },
      {
        type: "incoming",
        text: "Yes sir! 50 pips secured. Done for the day.",
        hasImage: true,
        profit: "+ $320.00",
      },
    ],
  },
];

// --- SUB-KOMPONENT: Trading Result Mockup ---
const TradingResultImage = ({ profit }) => (
  <div className="msg-image">
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "5px",
        borderBottom: "1px solid #eee",
        fontSize: "10px",
        fontWeight: "bold",
        color: "#555",
      }}
    >
      MetaTrader 4 Positions
    </div>
    <div className="trading-result">
      <div className="result-row">
        <span className="symbol-text">XAUUSD buy</span>
        <span className="profit-text">{profit}</span>
      </div>
      <div className="result-row">
        <span className="symbol-text">GBPUSD sell</span>
        <span className="profit-text">+ $120.00</span>
      </div>
      <div
        className="result-row"
        style={{
          marginTop: "5px",
          borderTop: "1px dashed #ccc",
          paddingTop: "5px",
        }}
      >
        <span>Total Profit:</span>
        <span className="profit-text" style={{ fontSize: "12px" }}>
          {profit}
        </span>
      </div>
    </div>
  </div>
);

// --- KOMPONENT GŁÓWNY ---

const SuccessStories = () => {
  return (
    <>
      <style>{cssStyles}</style>
      <section className="stories-section">
        {/* Dekoracyjne tło */}
        <div className="blur-glow" style={{ top: "20%", left: "10%" }}></div>
        <div
          className="blur-glow"
          style={{ bottom: "20%", right: "10%", background: "#3b82f6" }}
        ></div>

        <div className="stories-container">
          <h2 className="stories-title">Real Success Stories</h2>

          <div className="stories-grid">
            {storiesData.map((story, index) => (
              <div key={index} className="phone-card">
                {/* Phone Header */}
                <div className="phone-header">
                  <div
                    className="header-avatar"
                    style={{ backgroundColor: story.avatarColor }}
                  >
                    {story.name.charAt(0)}
                  </div>
                  <div className="header-info">
                    <span className="header-name">{story.name}</span>
                    <span className="header-status">online</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="chat-area">
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      color: "#9ca3af",
                      marginBottom: "10px",
                    }}
                  >
                    Today
                  </div>

                  {story.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`message ${
                        msg.type === "incoming"
                          ? "msg-incoming"
                          : "msg-outgoing"
                      }`}
                    >
                      {msg.hasImage && (
                        <TradingResultImage profit={msg.profit} />
                      )}
                      {msg.text}
                      <div className="msg-time">10:{30 + idx} AM</div>
                    </div>
                  ))}
                </div>

                {/* Fake Input */}
                <div className="phone-input">
                  <div style={{ color: "#3b82f6" }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <div className="input-fake">Message...</div>
                  <div className="send-btn">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
