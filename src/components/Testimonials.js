// --- CSS STYLES ---
const cssStyles = `
  .testimonials-section {
    background-color: #0d163eff;
    background-image: radial-gradient(ellipse at 50% 50%, #1e293b 0%, #0d163eff 70%);
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 5rem 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
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
    margin-bottom: 3rem;
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

  .testimonial-video-wrapper:hover .testimonial-play-overlay {
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

// --- KOMPONENT ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      videoSrc: "/test1.mp4",
      name: "Julia Smith",
      role: "Day Trader",
      rating: 5,
      text: "This trading group completely changed my approach. The daily ideas are clear, actionable, and profitable!",
      verified: true,
    },
    {
      videoSrc: "/test2.mp4",
      name: "John Johnson",
      role: "Part-Time Trader",
      rating: 5,
      text: "Finally found a community that delivers real value. No BS, just solid trading setups every day.",
      verified: true,
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
                    src={testimonial.videoSrc}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
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
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
