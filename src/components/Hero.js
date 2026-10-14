import { Arrow, JoinLink } from './Brand';

export default function Hero() {
  return <>
    <section id="home" className="hero marble">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A MORE CONSIDERED WAY TO TRADE</p>
          <h1>Built on discipline.<br />Driven by <em>excellence.</em></h1>
          <p className="hero-description">Daily trading ideas. Expert market insight. A community that moves forward together.</p>
          <div className="hero-actions"><JoinLink /><a className="text-link" href="#steps">Discover the approach <Arrow /></a></div>
          <div className="hero-note"><span className="small-star" aria-hidden="true">✦</span> Free to join. No monthly membership fee.</div>
        </div>
        <div className="hero-film">
          <div className="film-frame">
            <div className="film-heading"><span className="eyebrow">THE TRADE WITH AZEEM INTRODUCTION</span><span aria-hidden="true">01 /</span></div>
            <video controls playsInline preload="none" poster="/images/introduction-poster.jpg" src="/front.MOV" aria-label="Introduction to our trading community" />
            <div className="film-caption"><span>Every journey starts with a perspective.</span><span className="sound-note">SOUND ON ↗</span></div>
          </div>
          <div className="film-seal"><span>TRADE WITH AZEEM<br />DISCIPLINE OVER EVERYTHING</span></div>
        </div>
      </div>
      <div className="benefits container">{['No setup cost', 'Daily trading ideas', 'Mini-courses', 'No monthly fee'].map((text, i) => <div key={text}><span className="benefit-number">0{i + 1}</span><span>{text}</span><span className="benefit-star" aria-hidden="true">✦</span></div>)}</div>
    </section>
    <section id="steps" className="section steps-section">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>A simple start.<br /><em>A stronger foundation.</em></h2></div><p>From your first introduction to your first trading setup, follow the guide at your own pace.</p></div>
        <div className="steps-grid">
          <article className="step"><span className="step-number">01</span><h3>Get to know us</h3><p>Watch the introduction above to discover our approach to the markets and the community behind it.</p><a className="text-link" href="#home">Watch the introduction <Arrow /></a></article>
          <article className="step"><span className="step-number">02</span><h3>Set up your account</h3><p>Create your free trading account, fill in your details, and follow the step by step setup guide.</p><a className="text-link" href="https://my.tradequo.com/register?referral=019e98c9-e8af-7036-8c61-0c03d806507c" target="_blank" rel="noopener noreferrer">Create My Free Account <Arrow /></a></article>
          <article className="step"><span className="step-number">03</span><h3>Learn the essentials</h3><p>Build your understanding of forex trading with a guided introduction to the fundamentals.</p><a className="text-link" href="#learn">Learn the basics <Arrow /></a></article>
        </div>
        <div id="learn" className="learn-grid"><div><p className="eyebrow">KNOWLEDGE BEFORE ACTION</p><h3>Confidence begins<br />with understanding.</h3><p>Take a moment to learn the basics. A thoughtful approach starts with the right foundation.</p></div><div className="lesson-frame"><iframe src="https://www.youtube.com/embed/qEK60FBF9Yw" title="Learn The Basics" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div></div>
        <div className="bot-banner"><div><p className="eyebrow">EXPLORE AUTOMATED TRADING</p><h3>A different way to approach the markets.</h3></div><a className="outline-button" href="https://tradewithazeembot.com/" target="_blank" rel="noopener noreferrer">Check Out Our Trading Bot <Arrow /></a></div>
      </div>
    </section>
  </>;
}
