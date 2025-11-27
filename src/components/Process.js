// --- CSS STYLES ---
const cssStyles = `
  .stories-section {
    background-color: #020617; /* Głęboka czerń/granat */
    background-image: radial-gradient(ellipse at 50% 100%, #1e293b 0%, #0d163eff 70%); /* Spotlight od dołu */
    padding: 5rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    overflow: hidden;
    position: relative;
  }

  /* Subtelna siatka w tle */
  .stories-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .stories-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .stories-title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 4rem;
    color: white;
    /* Gradient text matching Hero */
    background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    justify-items: center;
  }

  @media (min-width: 768px) {
    .stories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .stories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* --- PHONE MOCKUP STYLES (Dark Mode) --- */
  .phone-card {
    background-color: #0f172a; /* Dark background for the phone */
    width: 100%;
    max-width: 320px;
    height: 580px;
    border-radius: 30px;
    border: 8px solid #334155; /* Dark steel border */
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.2);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .phone-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 35px 60px -15px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.4);
    border-color: #475569;
  }

  /* Phone Header */
  .phone-header {
    background-color: #1e293b; /* Slate 800 */
    padding: 15px;
    border-bottom: 1px solid #334155;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 10;
  }

  .header-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #3b82f6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }

  .header-info {
    display: flex;
    flex-direction: column;
  }

  .header-name {
    font-size: 15px;
    font-weight: 600;
    color: #f1f5f9; /* White-ish */
  }

  .header-status {
    font-size: 12px;
    color: #60a5fa; /* Blue-400 */
  }

  /* Chat Area */
  .chat-area {
    flex: 1;
    background-color: #c1c7e0ff; /* Very dark slate */
    /* Dot pattern */
    background-image: radial-gradient(#1e293b 1.5px, transparent 1.5px);
    background-size: 20px 20px;
    padding: 20px 12px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Messages */
  .message {
    max-width: 85%;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.4;
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .msg-incoming {
    background-color: #1e293b; /* Slate 800 */
    align-self: flex-start;
    color: #e2e8f0;
    border-bottom-left-radius: 4px;
    border: 1px solid #334155;
  }

  .msg-outgoing {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); /* Blue Gradient */
    align-self: flex-end;
    color: white;
    border-bottom-right-radius: 4px;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  }

  .msg-time {
    font-size: 10px;
    color: #94a3b8;
    text-align: right;
    margin-top: 5px;
    opacity: 0.8;
  }

  /* Image Attachment Mockup */
  .msg-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    background-color: #0f172a;
    border: 1px solid #334155;
  }

  .trading-result {
    padding: 12px;
    background-color: #0f172a;
  }

  .result-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-family: monospace;
    font-size: 12px;
    color: #cbd5e1;
  }

  .profit-text {
    color: #4ade80; /* Neon Green for dark mode */
    font-weight: bold;
    text-shadow: 0 0 10px rgba(74, 222, 128, 0.2);
  }

  .symbol-text {
    font-weight: 700;
    color: #e2e8f0;
  }

  /* Input Area */
  .phone-input {
    background-color: #1e293b;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 1px solid #334155;
  }

  .input-fake {
    flex: 1;
    height: 36px;
    background-color: #0f172a;
    border-radius: 18px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    color: #64748b;
    font-size: 13px;
    border: 1px solid #334155;
  }

  .send-btn {
    width: 36px;
    height: 36px;
    background-color: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    transition: transform 0.2s;
  }
  
  .send-btn:hover {
    transform: scale(1.05);
  }
  
  /* Decoration Elements */
  .blur-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    background: #3b82f6;
    filter: blur(150px);
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
    border-radius: 50%;
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
        profit: "+ £1,240.50",
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
        profit: "+ £4,500.00",
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
        profit: "+ £892.00",
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
        profit: "+ £320.00",
      },
    ],
  },
  // --- NOWE HISTORIE ---
  // {
  //   name: "James B.",
  //   avatarColor: "#3b82f6", // Blue
  //   messages: [
  //     { type: "outgoing", text: "How's the small account growing?" },
  //     {
  //       type: "incoming",
  //       text: "Started with $200 last week, check this out now...",
  //       hasImage: true,
  //       profit: "+ $540.20",
  //     },
  //     { type: "incoming", text: "Nearly tripled it in 7 days! 🤯" },
  //   ],
  // },
  // {
  //   name: "Emily R.",
  //   avatarColor: "#ef4444", // Red
  //   messages: [
  //     {
  //       type: "incoming",
  //       text: "I was scared to trade news, but your live analysis helped so much.",
  //     },
  //     {
  //       type: "incoming",
  //       text: "Caught the whole drop!",
  //       hasImage: true,
  //       profit: "+ $2,105.00",
  //     },
  //     { type: "outgoing", text: "You executed it perfectly. Proud of you!" },
  //   ],
  // },
];

// --- SUB-KOMPONENT: Trading Result Mockup ---
const TradingResultImage = ({ profit }) => (
  <div className="msg-image">
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "8px",
        borderBottom: "1px solid #334155",
        fontSize: "11px",
        fontWeight: "bold",
        color: "#94a3b8",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#4ade80",
        }}
      ></span>{" "}
      MetaTrader 5
    </div>
    <div className="trading-result">
      <div className="result-row">
        <span className="symbol-text">XAUUSD buy</span>
        <span className="profit-text">{profit}</span>
      </div>
      <div className="result-row">
        <span className="symbol-text">GBPUSD sell</span>
        <span className="profit-text">+ £120.00</span>
      </div>
      <div
        className="result-row"
        style={{
          marginTop: "8px",
          borderTop: "1px dashed #334155",
          paddingTop: "8px",
        }}
      >
        <span>Total Profit:</span>
        <span className="profit-text" style={{ fontSize: "13px" }}>
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
        <div className="blur-glow" style={{ top: "10%", left: "5%" }}></div>
        <div
          className="blur-glow"
          style={{ bottom: "10%", right: "5%", background: "#3b82f6" }}
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
                      fontSize: "11px",
                      color: "#64748b",
                      marginBottom: "15px",
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
                      width="24"
                      height="24"
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
                      width="16"
                      height="16"
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
