import { useState } from 'react';
import { JoinLink } from './Brand';
const faqData = [
  { question: "What is the 'Premium Service'?", answer: 'Our Premium Service provides exclusive access to daily live trading sessions, real-time signals, and in-depth market analysis designed to help you make informed decisions.' },
  { question: 'Are there any upfront costs or monthly fees?', answer: "Start with ZERO upfront fees. Just fund your own trading account and you're ready to go." },
  { question: 'Do I get free weekly overview calls?', answer: "Yes! All community members get access to our weekly overview calls where we break down the upcoming week's market structure and answer your questions." },
  { question: 'How does your service educate and empower traders?', answer: "We don't just give fish; we teach you how to fish. Our academy includes hours of video content, PDF guides, and mentorship to build your trading skills from the ground up." }
];
export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  return <section id="faq" className="section faq-section"><div className="container faq-grid">
    <div><p className="eyebrow">Frequently asked questions</p><h2>Your questions.<br /><em>Considered answers.</em></h2><p className="faq-intro">Everything you need to know before becoming part of the community.</p><JoinLink>Join our free group</JoinLink></div>
    <div className="accordion">{faqData.map((item, i) => <div className={`faq-item ${activeIndex === i ? 'open' : ''}`} key={item.question}><h3><button id={`question-${i}`} aria-expanded={activeIndex === i} aria-controls={`answer-${i}`} onClick={() => setActiveIndex(activeIndex === i ? null : i)}><span className="faq-number">0{i + 1}</span><span>{item.question}</span><span className="faq-toggle" aria-hidden="true">{activeIndex === i ? '−' : '+'}</span></button></h3><div id={`answer-${i}`} role="region" aria-labelledby={`question-${i}`} hidden={activeIndex !== i}>{activeIndex === i && <p>{item.answer}</p>}</div></div>)}</div>
  </div></section>;
}
