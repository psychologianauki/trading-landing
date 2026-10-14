import Brand, { JoinLink, tradequoUrl } from './Brand';
export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-invitation"><p className="eyebrow">Getting started STARTS HERE</p><h2>Make your next move<br /><em>a considered one.</em></h2><JoinLink /></div><div className="footer-main"><a href="#home" aria-label="Trade with Azeem home"><Brand /></a><p>Built on discipline. Driven by excellence.</p><a className="text-link" href={tradequoUrl} target="_blank" rel="noopener noreferrer">TradeQuo</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Trade with Azeem</span><span>Created by SL Technologies</span></div></div></footer>;
}
