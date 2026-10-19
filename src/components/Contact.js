import { JoinLink, telegramUrl } from './Brand';
const features = [
  'No Start Up Costs',
  'Daily Trade Ideas',
  'Full Academy and Live Sessions',
  'No Monthly Fees',
];
export default function Contact() {
  return <section id="contact" className="section about-section marble"><div className="container about-grid"><div className="about-image"><img src="/images/trading-lifestyle.jpg" alt="Trader seated beside a laptop overlooking the water" width="1368" height="1824" loading="lazy" /><div className="image-label"><span>WORLDWIDE</span><span>ONE SHARED VISION</span></div></div><div className="about-copy"><p className="eyebrow">About Trade with Azeem</p><h2>Experience.<br />Perspective.<br /><em>Purpose.</em></h2><p>We believe a thoughtful trading journey is built on knowledge, consistency and the people around you.</p><ul className="about-features">{features.map(text => <li key={text}><span aria-hidden="true">✦</span>{text}</li>)}</ul><JoinLink href={telegramUrl}>Be Part Of Our Journey</JoinLink></div></div></section>;
}
