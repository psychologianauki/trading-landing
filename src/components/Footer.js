import Brand, { JoinLink } from './Brand';
import { BsInstagram } from 'react-icons/bs';
export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-invitation"><p className="eyebrow">Getting started STARTS HERE</p><h2>Make your next move<br /><em>a considered one.</em></h2><JoinLink /></div><div className="footer-main"><a href="#home" aria-label="Trade with Azeem home"><Brand /></a><p>Built on discipline. Driven by excellence.</p><a className="instagram" href="https://www.instagram.com/iamsheikhazeem/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><BsInstagram /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Trade with Azeem</span><span>Created by SL Technologies</span></div></div></footer>;
}
