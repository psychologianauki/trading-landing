// --- CSS STYLES ---
const cssStyles = `
  .video-hero-section {
    background-color: #222f67ff;
    background-image: radial-gradient(ellipse at 50% 0%, #1e293b 0%, #0d163eff 70%);
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 5rem 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  .video-hero-section::before {
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

  .video-hero-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .top-italic {
    font-style: italic;
    font-size: 0.95rem;
    color: #94a3b8;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .main-heading {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: white;
    background: linear-gradient(135deg, #ffffff 0%, #86bdffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 768px) {
    .main-heading {
      font-size: 2rem;
    }
  }

  .sub-heading {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.1rem;
    color: #e2e8f0;
    margin-bottom: 3rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 99px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }

  .video-wrapper {
    width: 100%;
    background-color: black;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2.5rem;
    box-shadow: 0 0 40px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(30, 58, 138, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .video-wrapper:hover {
    box-shadow: 0 0 50px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.5);
  }

  .video-header-strip {
    background: linear-gradient(90deg, #1e3a8a, #2563eb);
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;
  }

  .video-content-placeholder {
    aspect-ratio: 16 / 9;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, #0f172a 0%, #000000 100%);
    position: relative;
  }
  
  .play-button {
    width: 70px;
    height: 70px;
    background-color: rgba(59, 130, 246, 0.2); /* Niebieski tint */
    border: 1px solid rgba(59, 130, 246, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
  }

  .video-content-placeholder:hover .play-button {
    background-color: rgba(59, 130, 246, 0.4);
    transform: scale(1.1);
  }

  /* STYL DLA LOKALNEGO WIDEO */
  .video-content-placeholder video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ważne: wypełnia całą ramkę */
    display: block;
  }

  .features-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  .feature-pill {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.95rem;
    color: #cbd5e1;
    background: rgba(15, 23, 42, 0.6);
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(30, 41, 59, 0.5);
  }

  .feature-check {
    width: 20px;
    height: 20px;
    background-color: #2563eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
  }

  .step-text {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    color: #ffffff;
  }

  .step-desc {
    color: #94a3b8;
    font-size: 1rem;
    max-width: 450px;
    margin: 0 auto 2.5rem auto;
    line-height: 1.6;
  }

  .cta-btn {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
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

  .social-proof {
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-weight: bold;
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
    color: #3b82f6;
    font-size: 14px;
    margin-bottom: 2px;
    letter-spacing: 2px;
  }

  .social-text {
    font-size: 0.8rem;
    color: #cbd5e1;
  }
`;

// --- ICONS (SVG) ---
const TrophyIcon = () => (
  <span style={{ filter: "grayscale(100%) brightness(200%)" }}>🏆</span>
);

const PlayIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VolumeIcon = () => (
  <svg
    width="18"
    height="18"
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
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
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

const ArrowDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="8 12 12 16 16 12"></polyline>
    <line x1="12" y1="8" x2="12" y2="16"></line>
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

          {/* Video Box */}
          <div className="video-wrapper">
            <div className="video-header-strip">
              <VolumeIcon />
              Step #1: Make Sure The Sound Is On!
            </div>

            <div className="video-content-placeholder">
              <div className="play-button">
                <PlayIcon />
              </div>
              {/* <video
                autoPlay
                loop
                playsInline
                src="/film.mp4"
                //  controls // Odkomentuj, jeśli chcesz pasek sterowania (play/pause)
              ></video> */}
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
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "8px",
              }}
            >
              <ArrowDownIcon />
            </span>
            Step #2: Apply To Get Started
          </div>

          <p className="step-desc">
            You'll be redirected to fill in your details so we can send over
            your personalised invitation to the Telegram group...
          </p>
          <a
            href="https://t.me/+cBbK4iQfLBcwOGJk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn">
              <div className="btn-arrow">
                <ArrowIcon />
              </div>
              Join Trading Group - It's Free
            </button>
          </a>
          <div className="social-proof">
            <div className="avatars">
              <div className="avatar" style={{ backgroundColor: "#64748b" }}>
                JD
              </div>
              <div className="avatar" style={{ backgroundColor: "#475569" }}>
                MK
              </div>
              <div className="avatar" style={{ backgroundColor: "#3b82f6" }}>
                AS
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
      </section>
    </>
  );
};

export default VideoHeroSection;
