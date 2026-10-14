import { useEffect, useState } from 'react';
import Brand, { JoinLink } from './Brand';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const close = e => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const navigate = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
  };
  return <header className="navbar">
    <nav className="nav-container container" aria-label="Main navigation">
      <a href="#home" aria-label="Trade with Azeem home" onClick={e => navigate(e, 'home')}><Brand /></a>
      <button className={`hamburger ${isOpen ? 'active' : ''}`} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="main-menu" onClick={() => setIsOpen(!isOpen)}><span /><span /></button>
      <ul id="main-menu" className={`nav-links ${isOpen ? 'active' : ''}`}>
        {[['home', 'Home'], ['steps', 'Step by step guide'], ['results', 'Results'], ['faq', 'FAQ'], ['contact', 'About']].map(([id, text]) => <li key={id}><a href={`#${id}`} onClick={e => navigate(e, id)}>{text}</a></li>)}
        <li><JoinLink className="gold-button nav-cta">Join now</JoinLink></li>
      </ul>
    </nav>
  </header>;
}
