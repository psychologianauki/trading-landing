// --- CSS STYLES ---
const cssStyles = `
  .about-section {
    background-color: #151922; /* Ciemne tło z obrazka */
    padding: 5rem 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    display: flex;
    justify-content: center;
  }

  .about-container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
  }

  .about-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    color: white;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  /* Image Styles */
  .image-wrapper {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    /* Placeholder for the image aspect ratio */
    aspect-ratio: 1 / 1; 
    background-color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-img-text {
    color: #475569;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
  }

  /* List Styles */
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem 0;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #e2e8f0;
  }

  .check-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    background-color: #00c075; /* Zielony kolor akcentu */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 3px; /* Optyczne wyrównanie do tekstu */
  }

  .check-svg {
    width: 12px;
    height: 12px;
    fill: none;
    stroke: #052e16; /* Ciemny zielony dla kontrastu */
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* CTA Button Styles (Consistent with FaqSection) */
  .cta-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Domyślnie do lewej na desktopie */
  }

  @media (max-width: 899px) {
    .cta-wrapper {
      align-items: center; /* Wyśrodkowanie na mobilkach */
    }
  }

  .green-btn {
    background-color: #00c075;
    color: #052e16;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.9rem 2rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.2s, background-color 0.2s;
    box-shadow: 0 4px 15px rgba(0, 192, 117, 0.3);
    margin-bottom: 1.5rem;
  }

  .green-btn:hover {
    background-color: #00d682;
    transform: translateY(-2px);
  }

  .btn-arrow {
    width: 18px;
    height: 18px;
    background-color: #052e16;
    color: #00c075;
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
    gap: 1rem;
  }

  .avatars {
    display: flex;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #151922;
    background-color: #334155;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
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
    color: #fbbf24;
    font-size: 14px;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }

  .social-text {
    font-size: 0.8rem;
    color: #9ca3af;
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
              {/* Tutaj w przyszłości wstawisz: <img src="sciezka/do/obrazka.jpg" alt="Trader in car" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
              <div className="placeholder-img-text">
                [IMAGE PLACEHOLDER]
                <br />
                Man in Rolls Royce / Luxury Car
              </div>
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
                <button className="green-btn">
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
                      style={{ backgroundColor: "#334155" }}
                    >
                      AS
                    </div>
                    <div
                      className="avatar"
                      style={{ backgroundColor: "#00c075" }}
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
