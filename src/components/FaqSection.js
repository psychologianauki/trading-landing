import { useState } from 'react';
import { JoinLink } from './Brand';
const faqData = [
  {
    question: 'Do you have a trading academy?',
    answer: 'Yes. Our trading academy helps you build your knowledge and develop your skills as a trader.',
  },
  {
    question: 'Can I track my progress?',
    answer: 'Yes. You can track your progress as you learn and see how your trading skills develop over time.',
  },
  {
    question: 'Do you offer live market scanners?',
    answer: 'Yes. Our live market scanners help you follow market activity and identify setups to review.',
  },
  {
    question: 'Can I join live sessions with your traders?',
    answer: 'Yes. Join live sessions with our traders to follow their market analysis and learn how they approach trading setups.',
  },
  {
    question: 'Is 1-to-1 mentorship available?',
    answer: 'Yes. We offer 1-to-1 mentorship for personal guidance as you develop your understanding of trading.',
  },
];
export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  return <section id="faq" className="section faq-section"><div className="container faq-grid">
    <div><p className="eyebrow">Frequently asked questions</p><h2>What can you access?</h2><p className="faq-intro">Learn more about our academy, progress tracking, market scanners, live sessions, and 1-to-1 mentorship.</p><JoinLink>Join our free group</JoinLink></div>
    <div className="accordion">{faqData.map((item, i) => <div className={`faq-item ${activeIndex === i ? 'open' : ''}`} key={item.question}><h3><button id={`question-${i}`} aria-expanded={activeIndex === i} aria-controls={`answer-${i}`} onClick={() => setActiveIndex(activeIndex === i ? null : i)}><span className="faq-number">0{i + 1}</span><span>{item.question}</span><span className="faq-toggle" aria-hidden="true">{activeIndex === i ? '−' : '+'}</span></button></h3><div id={`answer-${i}`} role="region" aria-labelledby={`question-${i}`} hidden={activeIndex !== i}>{activeIndex === i && <p>{item.answer}</p>}</div></div>)}</div>
  </div></section>;
}
