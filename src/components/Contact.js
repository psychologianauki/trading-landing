// --- CSS STYLES ---
const cssStyles = `
  .about-section {
    background-color: #0d163eff; /* Głęboka czerń/granat */
    background-image: radial-gradient(ellipse at 50% 100%, #1e293b 0%, #0d163eff 70%); /* Spotlight od dołu */
    padding: 6rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Subtelna siatka w tle */
  .about-section::before {
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

  .about-container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .about-title {
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

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
  }

  @media (min-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Image Styles */
  .image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    /* Blue-ish shadow/glow */
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.3);
    aspect-ratio: 1 / 1; 
    background-color: #0f172a;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }
  
  .image-wrapper:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 60px -12px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.5);
  }

  .placeholder-img-text {
    color: #64748b;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  /* List Styles */
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 3rem 0;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.8rem;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #cbd5e1; /* Cool gray text */
  }

  .check-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    background-color: #2563eb; /* Electric Blue */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 3px;
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
  }

  .check-svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: white;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* CTA Button Styles (Consistent with FaqSection/Hero) */
  .cta-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 899px) {
    .cta-wrapper {
      align-items: center;
    }
  }

  /* Modern Gradient Button */
  .cta-btn {
    background: linear-gradient(90deg, #2563eb, #3b82f6); /* Gradient niebieski */
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1.1rem 2.5rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
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
    width: 20px;
    height: 20px;
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
    color: #3b82f6; /* Blue stars */
    font-size: 14px;
    margin-bottom: 2px;
    letter-spacing: 2px;
  }

  .social-text {
    font-size: 0.8rem;
    color: #94a3b8;
  }
`;

// --- DANE (Teksty z obrazka) ---
const features = [
  "We are a team of professional traders with over 20 years combined experience",
  "We spend over 50+ hours a week analysing the financial markets for our members",
  "We send 4-7 trades per day which members can copy & paste with no experience needed",
  "We have helped 3000+ members create a side hustle",
  "Based in Dubai & UK",
];

// --- KOMPONENT ---
const AboutSection = () => {
  return (
    <>
      <style>{cssStyles}</style>
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">Who Is Gold Trading Community?</h2>

          <div className="content-grid">
            {/* Lewa kolumna: Obrazek */}
            <div className="image-wrapper">
              <img
                src="lambo.jpg"
                alt="Trader in car"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Prawa kolumna: Tekst i lista */}
            <div className="text-wrapper">
              <ul className="features-list">
                {features.map((text, index) => (
                  <li key={index} className="feature-item">
                    <div className="check-icon">
                      <svg className="check-svg" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="cta-wrapper">
                <a
                  href="https://t.me/+cBbK4iQfLBcwOGJk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cta-btn">
                    <div className="btn-arrow">
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
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
                    <div
                      className="avatar"
                      style={{ backgroundColor: "#64748b" }}
                    >
                      JD
                    </div>
                    <div
                      className="avatar"
                      style={{ backgroundColor: "#475569" }}
                    >
                      MK
                    </div>
                    <div
                      className="avatar"
                      style={{ backgroundColor: "#3b82f6" }}
                    >
                      AS
                    </div>
                    <div
                      className="avatar"
                      style={{ backgroundColor: "#2563eb" }}
                    >
                      1K
                    </div>
                  </div>
                  <div className="rating-container">
                    <div className="stars">★★★★★</div>
                    <div className="social-text">
                      Join 1000+ Success Stories
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
