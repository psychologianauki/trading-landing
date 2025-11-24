// --- CSS STYLES ---
const cssStyles = `
  .video-hero-section {
    background-color: #0b0f19; /* Ciemne tło strony */
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 4rem 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .video-hero-container {
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Header Typography */
  .top-italic {
    font-style: italic;
    font-size: 0.95rem;
    color: #cbd5e1; /* jasny szary */
    margin-bottom: 0.5rem;
  }

  .main-heading {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: white;
  }

  @media (max-width: 768px) {
    .main-heading {
      font-size: 1.8rem;
    }
  }

  .sub-heading {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: white;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* Subtelne podkreślenie */
    padding-bottom: 2px;
  }

  /* Video Box Styles */
  .video-wrapper {
    width: 100%;
    max-width: 700px;
    background-color: black;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border: 1px solid #1e293b;
  }

  .video-header-strip {
    background-color: #00c075; /* Główny zielony kolor */
    color: #052e16; /* Ciemny tekst na zielonym */
    font-size: 0.85rem;
    font-weight: 700;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .video-content-placeholder {
    aspect-ratio: 16 / 9;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    cursor: pointer;
  }
  
  .play-button {
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  }

  .video-content-placeholder:hover .play-button {
    background-color: rgba(255, 255, 255, 0.3);
  }

  /* Features List */
  .features-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .feature-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #e2e8f0;
  }

  .feature-check {
    width: 18px;
    height: 18px;
    background-color: #00c075;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Bottom CTA Area */
  .step-text {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .step-desc {
    color: #94a3b8;
    font-size: 0.9rem;
    max-width: 400px;
    margin: 0 auto 2rem auto;
    line-height: 1.5;
  }

  /* Button & Social Proof (Reused styles for consistency) */
  .green-btn {
    background-color: #00c075;
    color: #052e16;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 3rem;
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

  .social-proof {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
  
  .avatar:first-child { margin-left: 0; }

  .rating-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .stars {
    color: #fbbf24;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .social-text {
    font-size: 0.75rem;
    color: #9ca3af;
  }
`;

// --- ICONS (SVG) ---
const TrophyIcon = () => (
  <span role="img" aria-label="trophy">
    🏆
  </span>
  // Można użyć emoji lub SVG, emoji jest szybsze i pasuje do obrazka
);

const VolumeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 5L6 9H2V15H6L11 19V5Z" />
    <path d="M15.54 8.46C16.47 9.37 17 10.61 17 12C17 13.39 16.47 14.63 15.54 15.54L14.12 14.12C14.68 13.56 15 12.82 15 12C15 11.18 14.68 10.44 14.12 9.88L15.54 8.46Z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#052e16"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ArrowIcon = () => (
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
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const DownArrowCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 12v-4h3l-4-4-4 4h3v4h2z"
      fill="none"
    />{" "}
    {/* White circle fill trick if needed */}
    <path
      d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
      fill="white"
    />{" "}
    {/* Simplified down arrow */}
    <circle cx="12" cy="12" r="9" fill="white" fillOpacity="0.2" />
    <path d="M12 16l-4-4h8l-4 4z" fill="white" />
  </svg>
);

// --- KOMPONENT ---
const VideoHeroSection = () => {
  return (
    <>
      <style>{cssStyles}</style>
      <section className="video-hero-section">
        <div className="video-hero-container">
          <p className="top-italic">
            tired of blowing your trading account...?
          </p>

          <h1 className="main-heading">
            Copy And Paste My Trading Ideas For
            <br />
            Free Every Single Day
          </h1>

          <div className="sub-heading">
            <TrophyIcon /> inside 2024's #1 rated trading group
          </div>

          {/* Video Placeholder Box */}
          <div className="video-wrapper">
            <div className="video-header-strip">
              <VolumeIcon />
              Step #1: Click Play & Make Sure The Sound Is On!
            </div>
            <div className="video-content-placeholder">
              <div className="play-button">
                <PlayIcon />
              </div>
            </div>
          </div>

          {/* Features below video */}
          <div className="features-row">
            {[
              "Regulated Broker",
              "No setup cost",
              "Mini-courses",
              "No Monthly Fee",
            ].map((item, idx) => (
              <div key={idx} className="feature-pill">
                <div className="feature-check">
                  <CheckIcon />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="step-text">
            <span style={{ transform: "rotate(0deg)", display: "inline-flex" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" />
              </svg>
            </span>
            {/* Using a simple circle down icon replacement */}
            <span style={{ fontSize: "1.2rem" }}>⬇</span> Step #2: Apply To Get
            Started
          </div>

          <p className="step-desc">
            You'll be redirected to fill in your details so we can send over
            your personalised invitation to the Telegram group...
          </p>

          <button className="green-btn">
            <div className="btn-arrow">
              <ArrowIcon />
            </div>
            Join Trading Group - It's Free
          </button>

          <div className="social-proof">
            <div className="avatars">
              <div className="avatar" style={{ backgroundColor: "#64748b" }}>
                JD
              </div>
              <div className="avatar" style={{ backgroundColor: "#475569" }}>
                MK
              </div>
              <div className="avatar" style={{ backgroundColor: "#334155" }}>
                AS
              </div>
              <div className="avatar" style={{ backgroundColor: "#00c075" }}>
                1K
              </div>
            </div>
            <div className="rating-container">
              <div className="stars">★★★★★</div>
              <div className="social-text">Join 1000+ Success Stories</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoHeroSection;
