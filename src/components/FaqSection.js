import { useState } from "react";

// --- CSS STYLES ---
const cssStyles = `
  .faq-section {
    background-color: #0b0f19; /* Bardzo ciemne tło z obrazka */
    padding: 4rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faq-container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  .faq-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: white;
  }

  /* Accordion Styles */
  .accordion-item {
    background-color: #1e2532; /* Kolor kafelka */
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    transition: background-color 0.3s ease;
  }

  .accordion-item:hover {
    background-color: #252d3d;
  }

  .accordion-header {
    width: 100%;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .accordion-icon {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 1rem;
  }

  .accordion-icon.rotate {
    transform: rotate(180deg);
  }

  .accordion-content {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-out;
    background-color: #1e2532;
  }

  .accordion-content-inner {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: #9ca3af;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* CTA Button Styles */
  .cta-container {
    margin-top: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .green-btn {
    background-color: #00c075; /* Zielony kolor z obrazka */
    color: #052e16;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.2s, background-color 0.2s;
    box-shadow: 0 4px 15px rgba(0, 192, 117, 0.3);
  }

  .green-btn:hover {
    background-color: #00d682;
    transform: translateY(-2px);
  }

  .btn-arrow {
    width: 20px;
    height: 20px;
    background-color: #052e16;
    color: #00c075;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Social Proof Styles */
  .social-proof {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .avatars {
    display: flex;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #0b0f19;
    background-color: #334155;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
    overflow: hidden;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar:first-child {
    margin-left: 0;
  }

  .rating-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .stars {
    color: #fbbf24; /* Złoty kolor gwiazdek */
    font-size: 14px;
    margin-bottom: 2px;
  }

  .social-text {
    font-size: 0.8rem;
    color: #9ca3af;
  }
`;

// --- DANE (Teksty z obrazka) ---
const faqData = [
  {
    question: "What is the 'Premium Service'...?",
    answer:
      "Our Premium Service provides exclusive access to daily live trading sessions, real-time signals, and in-depth market analysis designed to help you make informed decisions.",
  },
  {
    question: "Are there any upfront costs or monthly fees?",
    answer:
      "We offer transparent pricing with no hidden fees. You can choose between a monthly subscription or a lifetime access plan, depending on your commitment level.",
  },
  {
    question: "Do I get free weekly overview calls?",
    answer:
      "Yes! All community members get access to our weekly overview calls where we break down the upcoming week's market structure and answer your questions.",
  },
  {
    question: "How does your service educate and empower traders?",
    answer:
      "We don't just give fish; we teach you how to fish. Our academy includes hours of video content, PDF guides, and mentorship to build your trading skills from the ground up.",
  },
];

// --- KOMPONENT ---
const FaqSection = () => {
  // Stan do śledzenia, który element jest otwarty (null oznacza żaden)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{cssStyles}</style>
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Why Choose Us?</h2>

          <div className="accordion">
            {faqData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`accordion-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div
                  className="accordion-content"
                  style={{ height: activeIndex === index ? "auto" : "0" }}
                >
                  {/* Dodatkowy wrapper dla płynnej animacji height z paddingiem */}
                  {activeIndex === index && (
                    <div className="accordion-content-inner">{item.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="cta-container">
            <button className="green-btn">
              <div className="btn-arrow">
                {/* Ikona strzałki w kółku */}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              Join Trading Group - It's Free
            </button>

            <div className="social-proof">
              <div className="avatars">
                {/* Placeholdery avatarów */}
                <div className="avatar" style={{ backgroundColor: "#e11d48" }}>
                  JD
                </div>
                <div className="avatar" style={{ backgroundColor: "#2563eb" }}>
                  AK
                </div>
                <div className="avatar" style={{ backgroundColor: "#16a34a" }}>
                  MS
                </div>
                <div className="avatar" style={{ backgroundColor: "#10b981" }}>
                  1K
                </div>
              </div>
              <div className="rating-container">
                <div className="stars">★★★★★</div>
                <div className="social-text">Join 1000+ Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
