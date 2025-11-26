import { useState } from "react";

// --- CSS STYLES ---
const cssStyles = `
  .faq-section {
    background-color: #020617; /* Głęboka czerń/granat */
    background-image: radial-gradient(ellipse at 50% 0%, #1e293b 0%, #0e1538ff 70%); /* Spotlight od góry */
    padding: 5rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  /* Subtelna siatka w tle */
  .faq-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .faq-container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .faq-title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 3.5rem;
    color: white;
    /* Gradient text matching Hero */
    background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }

  /* Accordion Styles */
  .accordion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .accordion-item {
    background-color: rgba(15, 23, 42, 0.6); /* Semi-transparent dark slate */
    border: 1px solid rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .accordion-item:hover {
    background-color: rgba(30, 41, 59, 0.8);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.1);
    transform: translateY(-2px);
  }

  .accordion-header {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    color: #f1f5f9;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
    transition: color 0.3s ease;
  }

  .accordion-item:hover .accordion-header {
    color: #60a5fa; /* Blue accent on hover */
  }

  .accordion-icon {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #94a3b8;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease, stroke 0.3s ease;
    flex-shrink: 0;
    margin-left: 1rem;
  }
  
  .accordion-header:hover .accordion-icon {
    stroke: #60a5fa;
  }

  .accordion-icon.rotate {
    transform: rotate(180deg);
    stroke: #3b82f6;
  }

  .accordion-content {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-out;
    background-color: rgba(2, 6, 23, 0.3); /* Slightly darker inner content */
  }

  .accordion-content-inner {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: #cbd5e1; /* Lighter text for readability */
    font-size: 1rem;
    line-height: 1.7;
  }

  /* CTA Button Styles */
  .cta-container {
    margin-top: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Modern Gradient Button (Reused) */
  .cta-btn {
    background: linear-gradient(90deg, #2563eb, #3b82f6); /* Gradient niebieski */
    color: white;
    font-weight: 700;
    font-size: 1.15rem;
    padding: 1.1rem 3.5rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); /* Mocny glow */
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
  }

  .cta-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.6);
  }

  .cta-btn:hover::before {
    left: 100%;
  }

  .btn-arrow {
    width: 22px;
    height: 22px;
    background-color: white;
    color: #2563eb;
    border-radius: 50%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Social Proof Styles */
  .social-proof {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background: rgba(255, 255, 255, 0.03);
    padding: 0.8rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .avatars {
    display: flex;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #020617;
    background-color: #334155;
    margin-left: -12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: white;
    font-weight: bold;
    overflow: hidden;
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
    color: #3b82f6; /* Niebieskie gwiazdki */
    font-size: 14px;
    margin-bottom: 2px;
    letter-spacing: 2px;
  }

  .social-text {
    font-size: 0.8rem;
    color: #cbd5e1;
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
            <a
              href="https://t.me/+cBbK4iQfLBcwOGJk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-btn">
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
            </a>

            <div className="social-proof">
              <div className="avatars">
                {/* Placeholdery avatarów zaktualizowane do niebieskiego motywu */}
                <div className="avatar" style={{ backgroundColor: "#64748b" }}>
                  JD
                </div>
                <div className="avatar" style={{ backgroundColor: "#475569" }}>
                  AK
                </div>
                <div className="avatar" style={{ backgroundColor: "#3b82f6" }}>
                  MS
                </div>
                <div className="avatar" style={{ backgroundColor: "#2563eb" }}>
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
