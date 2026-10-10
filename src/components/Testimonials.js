import { BiCopy, BiPhone } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi";
 

// --- CSS STYLES ---
const cssStyles = `
  .testimonials-section {
    background-color: #0d163eff;
    background-image: radial-gradient(ellipse at 50% 50%, #1e293b 0%, #0d163eff 70%);
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 0rem 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 768px) {
    .testimonials-section {
      padding: 0rem 1rem;
    }
  }

  .testimonials-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .testimonials-container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .testimonials-header {
    margin-bottom: 1rem;
  }

  .testimonials-subtitle {
    font-style: italic;
    font-size: 0.95rem;
    color: #94a3b8;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .testimonials-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: white;
    background: linear-gradient(135deg, #ffffff 0%, #86bdffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 768px) {
    .testimonials-title {
      font-size: 1.8rem;
    }
  }

  .testimonials-description {
    font-size: 1.1rem;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }

  .testimonial-card {
    background: rgba(15, 23, 42, 0.6);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(30, 41, 59, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 40px rgba(37, 99, 235, 0.2);
    border-color: rgba(59, 130, 246, 0.5);
  }

  .testimonial-video-wrapper {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    background-color: black;
    position: relative;
    aspect-ratio: 9 / 16;
  }

  .testimonial-video-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .testimonial-play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .testimonial-video-wrapper:hover .testimonial-play-overlay,
  .testimonial-video-wrapper:focus-within .testimonial-play-overlay {
    opacity: 0;
  }

  .testimonial-play-button {
    width: 60px;
    height: 60px;
    background-color: rgba(59, 130, 246, 0.3);
    border: 1px solid rgba(59, 130, 246, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
  }

  .testimonial-card:hover .testimonial-play-button {
    background-color: rgba(59, 130, 246, 0.5);
    transform: scale(1.15);
  }

  .testimonial-info {
    padding: 1.5rem;
    text-align: left;
  }

  .testimonial-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.3rem;
  }

  .testimonial-role {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 1rem;
  }

  .testimonial-rating {
    display: flex;
    gap: 0.3rem;
    margin-bottom: 0.8rem;
  }

  .testimonial-star {
    color: #3b82f6;
    font-size: 16px;
  }

  .testimonial-text {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.5;
    font-style: italic;
  }

  .testimonial-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(37, 99, 235, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #60a5fa;
    margin-bottom: 1rem;
  }

  .verified-icon {
    width: 14px;
    height: 14px;
  }

  /* Credentials Section Styles */
  .credentials-section {
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(59, 130, 246, 0.1);
    width: 100%;
  }

  .credentials-header {
    margin-bottom: 3rem;
  }

  .credentials-title {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: white;
    background: linear-gradient(135deg, #ffffff 0%, #86bdffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    .credentials-title {
      font-size: 1.6rem;
    }
  }

  .credentials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    .credentials-grid {
      grid-template-columns: 1fr;
    }
  }

  .credential-card {
    background: rgba(15, 23, 42, 0.6);
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid rgba(30, 41, 59, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .credential-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(37, 99, 235, 0.15);
    border-color: rgba(59, 130, 246, 0.5);
  }

  .credential-icon {
    width: 80px;
    height: 80px;
    background: rgba(37, 99, 235, 0.15);
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .credential-card:hover .credential-icon {
    background: rgba(37, 99, 235, 0.25);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
  }

  .credential-icon svg {
    width: 40px;
    height: 40px;
    color: #3b82f6;
  }

  .credential-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.8rem;
  }

  .credential-desc {
    font-size: 0.95rem;
    color: #94a3b8;
    line-height: 1.5;
  }

  .credentials-footer {
    text-align: center;
    padding: 2rem 1rem;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    margin-top: 2rem;
  }

  .credentials-footer-text {
    font-size: 1.1rem;
    color: #cbd5e1;
    font-style: italic;
    line-height: 1.6;
  }

  .credentials-footer-highlight {
    color: #60a5fa;
    font-weight: 700;
  }
`;

// --- ICONS (SVG) ---
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#3b82f6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

// Credentials Icons
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const TrendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"></path>
    <path d="M12 12a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3z"></path>
    <path d="M3 12a3 3 0 0 0 3 3h1"></path>
    <path d="M17 12h1a3 3 0 0 1 0 6h-1"></path>
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// --- KOMPONENT ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      videoSrc: "/test1.mp4",
      name: "Amy Barrier",
      role: "Business Owner",
      rating: 5,
      text: "This trading group completely changed my approach. The daily ideas are clear, actionable, and profitable!",
      verified: true,
    },
    {
      videoSrc: "/test2.mp4",
      name: "Luke Meecham",
      role: "Mechanic",
      rating: 5,
      text: "Finally found a community that delivers real value. No BS, just solid trading setups every day.",
      verified: true,
    },
    {
      videoSrc: "/test3.mp4",
      name: "Mueez Ahmed",
      role: "Finance broker",
      rating: 5,
      text: "I was always sceptical of trading but honestly this is a game changer.",
      verified: true,
    },
  ];

  const credentials = [
    {
      icon: <ChartIcon />,
      name: "Guided Market Analysis",
      description: "Experts break down their setups",
    },

    {
      icon: <div style={{
        display: "flex",
      }}> 
        <BsPhone style={{
          width: "30px"
        }}/>
        <BiCopy style={{
          width: "30px"
        }}/>
      </div>,
      name: "📋 Copy, 📱 Paste, 💰 Profit!",
      description: "Copy the setup from our expert traders",
    },
    {
      icon: <GiBrainstorm />,
      name: "Mindset Lessons",
      description: "Daily reminders that shift how you think, act, and manage risk",
    },
    {
      icon: <CommunityIcon />,
      name: "Community Access",
      description: "Be part of a community that shares, supports, and succeeds together",
    },
  ];

  return (
    <>
      <style>{cssStyles}</style>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="testimonials-subtitle">
              real results from real traders...
            </p>
            <h2 className="testimonials-title">
              See What Our Members Are Saying
            </h2>
            <p className="testimonials-description">
              Join thousands of traders who are already profiting from our daily
              trading ideas and expert guidance.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-video-wrapper">
                  <video
                    loop
                    playsInline
                    controls
                    src={testimonial.videoSrc}
                  ></video>
                  <div className="testimonial-play-overlay">
                    <div className="testimonial-play-button">
                      <PlayIcon />
                    </div>
                  </div>
                </div>

                <div className="testimonial-info">
                  {testimonial.verified && (
                    <div className="testimonial-badge">
                      <VerifiedIcon />
                      Verified Member
                    </div>
                  )}

                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>

                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="testimonial-star">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials Section */}
          <div className="credentials-section">
            <div className="credentials-header">
              <h3 className="credentials-title">
                Your steps to success -  A full system unlocks everything you need to succeed!            
                  </h3>
            </div>

            <div className="credentials-grid">
              {credentials.map((credential, idx) => (
                <div key={idx} className="credential-card">
                  <div className="credential-icon">
                    {credential.icon}
                  </div>
                  <h4 className="credential-name">{credential.name}</h4>
                  <p className="credential-desc">{credential.description}</p>
                </div>
              ))}
            </div>

            {/* <div className="credentials-footer">
              <p className="credentials-footer-text">
                <span className="credentials-footer-highlight">Join Our Free Telegram Group</span> and start your trading journey today
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
