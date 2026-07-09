import React, { useState } from "react";

const galleryPhotos = [
  {
    src: "/images.jpeg",
    alt: "Amir Khan boxing portrait",
    caption: "From Bolton prospect to international boxing name.",
  },
  {
    src: "/images-2.jpeg",
    alt: "Amir Khan press moment",
    caption: "A career built under cameras, pressure, and global expectation.",
  },
  {
    src: "/images-3.jpeg",
    alt: "Amir Khan public appearance",
    caption: "A public figure whose discipline extends beyond the ring.",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Amir%20Khan%20%28GBR%29.jpg?width=900",
    alt: "Amir Khan representing Great Britain",
    caption: "Great Britain colours, Olympic identity, and the start of a global boxing story.",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Amir%20Khan%202007.jpg?width=900",
    alt: "Amir Khan in 2007",
    caption: "The young professional era: fast hands, national attention, and rising expectations.",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Amir%20Khan%20interviewed.jpg?width=900",
    alt: "Amir Khan being interviewed",
    caption: "Media pressure became part of the job long before world title nights.",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Khan-devon%20press.jpg?width=900",
    alt: "Amir Khan press conference",
    caption: "Press conference focus: composure before the moment of execution.",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Press%20conference%20for%20Khan-Malignaggi.jpg?width=900",
    alt: "Khan Malignaggi press conference",
    caption: "Big-fight preparation, arena lights, and a career lived on the world stage.",
  },
];

const tickerItems = [
  "Olympic silver medalist",
  "WBA world champion",
  "IBF world champion",
  "34 professional wins",
  "21 knockout wins",
  "Bolton to the world stage",
  "Elite pressure mindset",
];

const achievements = [
  {
    year: "2004",
    title: "Olympic silver medalist at 17",
    text: "Amir Khan became one of Britain&apos;s brightest boxing stories when he won silver at the Athens Olympic Games as a lightweight. At only 17, he showed speed, courage, and composure on an elite international stage.",
  },
  {
    year: "2005",
    title: "Professional debut and national attention",
    text: "After the Olympics, Amir turned professional with huge expectations around him. His early fights built a reputation for fast combinations, sharp footwork, and a fearless willingness to entertain.",
  },
  {
    year: "2009",
    title: "WBA light-welterweight world champion",
    text: "Khan captured the WBA world title and proved that his amateur promise could become professional success. Becoming world champion required disciplined camps, tactical maturity, and the ability to perform when the lights were brightest.",
  },
  {
    year: "2011",
    title: "Unified world champion",
    text: "By adding the IBF title at light-welterweight, Amir became a unified champion. That level demands more than talent: it takes decision-making, resilience, and constant adaptation against world-class opposition.",
  },
  {
    year: "Global",
    title: "Major fights, major arenas, major names",
    text: "Across his career, Khan fought high-profile opponents, headlined major events, and became known worldwide for speed, bravery, and ambition. He competed in the United Kingdom, the United States, and the Middle East, carrying a global fanbase with him.",
  },
];

const programPillars = [
  "Risk-first trading plans before every position",
  "Market structure, liquidity, and momentum context",
  "Pre-session focus routines inspired by elite sport",
  "Journaling, review, and weekly performance scoring",
  "Emotional control after wins, losses, and missed trades",
  "Accountability for traders who want serious habits",
];

const pageStyles = `
  :root {
    --black: #050505;
    --ink: #0b0a08;
    --charcoal: #14110d;
    --panel: rgba(18, 15, 11, 0.86);
    --panel-strong: rgba(25, 20, 13, 0.96);
    --gold: #d7a83f;
    --gold-bright: #ffd980;
    --gold-dark: #8b6420;
    --cream: #fff6de;
    --muted: #c9b894;
    --line: rgba(255, 217, 128, 0.22);
    --green: #73d39a;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at 16% 8%, rgba(215, 168, 63, 0.18), transparent 28rem),
      radial-gradient(circle at 86% 30%, rgba(115, 211, 154, 0.08), transparent 24rem),
      linear-gradient(135deg, #050505 0%, #100d09 48%, #030303 100%);
    color: var(--cream);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  }

  a {
    color: inherit;
  }

  .site {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    border-bottom: 1px solid rgba(255, 217, 128, 0.16);
    background: rgba(5, 5, 5, 0.7);
    backdrop-filter: blur(18px);
  }

  .nav-inner {
    min-height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-weight: 900;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 217, 128, 0.45);
    border-radius: 8px;
    display: grid;
    place-items: center;
    color: #050505;
    background: linear-gradient(135deg, #8b6420, #ffd980 54%, #fff1bd);
    box-shadow: 0 0 34px rgba(215, 168, 63, 0.24);
    animation: goldPulse 3.6s ease-in-out infinite;
  }

  .brand small {
    display: block;
    color: var(--muted);
    font-size: 0.72rem;
    font-weight: 700;
    margin-top: 2px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 22px;
    color: #e8dcc2;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .menu-toggle {
    display: none;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 217, 128, 0.36);
    border-radius: 8px;
    background: rgba(255, 217, 128, 0.08);
    color: var(--cream);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  }

  .menu-toggle span {
    width: 21px;
    height: 2px;
    border-radius: 99px;
    background: var(--gold-bright);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .menu-toggle.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .nav-links a {
    text-decoration: none;
    opacity: 0.86;
    transition: opacity 0.2s ease, color 0.2s ease;
  }

  .nav-links a:hover {
    opacity: 1;
    color: var(--gold-bright);
  }

  .nav-cta {
    border: 1px solid rgba(255, 217, 128, 0.5);
    border-radius: 999px;
    padding: 10px 16px;
    background: rgba(255, 217, 128, 0.08);
    box-shadow: 0 0 0 rgba(255, 217, 128, 0);
    animation: softGlow 3.2s ease-in-out infinite;
  }

  .hero-video-section {
    position: relative;
    min-height: 100svh;
    display: grid;
    align-items: end;
    padding: 120px 0 64px;
    isolation: isolate;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 217, 128, 0.18);
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -3;
    filter: saturate(0.95) contrast(1.08) brightness(0.68);
  }

  .hero-video-section::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.58) 43%, rgba(0, 0, 0, 0.25) 100%),
      linear-gradient(0deg, rgba(5, 5, 5, 0.96) 0%, transparent 42%);
  }

  .hero-video-section::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 217, 128, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 217, 128, 0.04) 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: linear-gradient(to bottom, black 0%, transparent 80%);
    pointer-events: none;
    animation: gridDrift 14s linear infinite;
  }

  .hero-copy {
    max-width: 920px;
    animation: fadeUp 0.9s ease both;
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.5fr);
    gap: 42px;
    align-items: end;
  }

  .hero-portrait {
    position: relative;
    align-self: center;
    min-height: 520px;
    border: 1px solid rgba(255, 217, 128, 0.34);
    border-radius: 8px;
    overflow: hidden;
    background: #080705;
    box-shadow: 0 34px 90px rgba(0, 0, 0, 0.48), 0 0 58px rgba(215, 168, 63, 0.12);
    animation: portraitEnter 0.9s 0.24s ease both, floatPanel 5.8s 1s ease-in-out infinite;
  }

  .hero-portrait img {
    width: 100%;
    height: 100%;
    min-height: 520px;
    object-fit: cover;
    display: block;
    filter: contrast(1.08) saturate(0.95);
  }

  .hero-portrait::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 42%, rgba(5, 5, 5, 0.9) 100%);
    pointer-events: none;
  }

  .hero-portrait-badge {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 18px;
    border: 1px solid rgba(255, 217, 128, 0.3);
    border-radius: 8px;
    padding: 16px;
    background: rgba(5, 5, 5, 0.68);
    backdrop-filter: blur(12px);
  }

  .hero-portrait-badge strong {
    display: block;
    color: var(--gold-bright);
    font-size: 1.02rem;
    margin-bottom: 4px;
  }

  .hero-portrait-badge span {
    display: block;
    color: #e3d3b5;
    line-height: 1.45;
    font-size: 0.9rem;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    border: 1px solid rgba(255, 217, 128, 0.34);
    border-radius: 999px;
    padding: 8px 13px;
    color: var(--gold-bright);
    background: rgba(12, 10, 7, 0.7);
    font-size: 0.82rem;
    font-weight: 900;
    text-transform: uppercase;
    animation: fadeUp 0.7s 0.1s ease both;
  }

  .eyebrow::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 18px rgba(115, 211, 154, 0.72);
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1 {
    max-width: 980px;
    margin-bottom: 22px;
    color: #fff8e8;
    font-size: clamp(2.5rem, 7vw, 6.25rem);
    line-height: 0.96;
    letter-spacing: 0;
    animation: fadeUp 0.7s 0.2s ease both;
  }

  .gold-text {
    color: var(--gold-bright);
    text-shadow: 0 0 32px rgba(215, 168, 63, 0.26);
    background: linear-gradient(100deg, #d7a83f, #fff2ba, #b98224, #ffd980);
    background-size: 220% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: goldSweep 4.5s ease-in-out infinite;
  }

  .hero-lead {
    max-width: 820px;
    color: #e9dcc1;
    font-size: clamp(1rem, 1.7vw, 1.28rem);
    line-height: 1.75;
    margin-bottom: 28px;
    animation: fadeUp 0.7s 0.32s ease both;
  }

  .hero-actions,
  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }

  .btn {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 13px 21px;
    text-decoration: none;
    font-weight: 900;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .btn::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-115%);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
    transition: transform 0.62s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn:hover::after {
    transform: translateX(115%);
  }

  .btn-primary {
    color: #070604;
    background: linear-gradient(135deg, #a97822, #ffd980 56%, #fff0b8);
    box-shadow: 0 14px 32px rgba(215, 168, 63, 0.24);
  }

  .btn-secondary {
    color: var(--cream);
    border: 1px solid rgba(255, 217, 128, 0.34);
    background: rgba(255, 255, 255, 0.045);
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-top: 44px;
  }

  .stat {
    min-height: 126px;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 18px;
    background: linear-gradient(160deg, rgba(255, 217, 128, 0.12), rgba(7, 6, 4, 0.7));
    animation: fadeUp 0.7s ease both;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .stat:nth-child(1) { animation-delay: 0.42s; }
  .stat:nth-child(2) { animation-delay: 0.5s; }
  .stat:nth-child(3) { animation-delay: 0.58s; }
  .stat:nth-child(4) { animation-delay: 0.66s; }

  .stat:hover {
    transform: translateY(-7px);
    border-color: rgba(255, 217, 128, 0.48);
    box-shadow: 0 24px 52px rgba(215, 168, 63, 0.14);
  }

  .stat strong {
    display: block;
    color: var(--gold-bright);
    font-size: clamp(1.35rem, 2.8vw, 2.2rem);
    line-height: 1;
    margin-bottom: 10px;
  }

  .stat span {
    color: #deceb0;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .ticker-section {
    padding: 0;
    border-bottom: 1px solid rgba(255, 217, 128, 0.16);
    background: #080705;
    overflow: hidden;
  }

  .ticker-track {
    display: flex;
    width: max-content;
    gap: 22px;
    padding: 18px 0;
    color: var(--gold-bright);
    font-weight: 950;
    text-transform: uppercase;
    font-size: 0.86rem;
    animation: marquee 26s linear infinite;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 22px;
    white-space: nowrap;
  }

  .ticker-item::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 14px rgba(115, 211, 154, 0.7);
  }

  section {
    padding: 92px 0;
  }

  .section-head {
    display: grid;
    grid-template-columns: 0.88fr 1.12fr;
    gap: 48px;
    align-items: end;
    margin-bottom: 36px;
    animation: fadeUp 0.7s ease both;
  }

  .kicker {
    margin-bottom: 12px;
    color: var(--gold-bright);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  h2 {
    margin-bottom: 0;
    color: #fff7e4;
    font-size: clamp(2rem, 4vw, 3.35rem);
    line-height: 1.04;
    letter-spacing: 0;
  }

  .section-intro {
    color: #d8c8a9;
    line-height: 1.78;
    font-size: 1.02rem;
    margin-bottom: 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .card,
  .timeline-item,
  .gallery-card,
  .quote-panel {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: linear-gradient(160deg, rgba(255, 217, 128, 0.08), rgba(10, 8, 5, 0.86));
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  }

  .card {
    padding: 24px;
    animation: fadeUp 0.72s ease both;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .card:hover,
  .timeline-item:hover,
  .gallery-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 217, 128, 0.48);
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.34), 0 0 42px rgba(215, 168, 63, 0.1);
  }

  .card h3 {
    color: var(--gold-bright);
    font-size: 1.18rem;
    margin-bottom: 12px;
  }

  .card p,
  .card li,
  .timeline-item p {
    color: #e3d3b5;
    line-height: 1.72;
    font-size: 0.96rem;
  }

  .timeline {
    display: grid;
    gap: 14px;
    position: relative;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 64px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(255, 217, 128, 0.6), transparent);
    animation: lineGlow 3.4s ease-in-out infinite;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 126px 1fr;
    gap: 22px;
    padding: 22px;
    position: relative;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    animation: fadeUp 0.72s ease both;
  }

  .timeline-item:nth-child(2) { animation-delay: 0.08s; }
  .timeline-item:nth-child(3) { animation-delay: 0.16s; }
  .timeline-item:nth-child(4) { animation-delay: 0.24s; }
  .timeline-item:nth-child(5) { animation-delay: 0.32s; }

  .timeline-year {
    color: var(--gold-bright);
    font-weight: 950;
    font-size: 1.26rem;
  }

  .timeline-item h3 {
    margin-bottom: 8px;
    color: #fff2d4;
    font-size: 1.15rem;
  }

  .timeline-item p {
    margin-bottom: 0;
  }

  .split {
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    gap: 18px;
    align-items: stretch;
  }

  .quote-panel {
    position: relative;
    padding: 34px;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(255, 217, 128, 0.14), rgba(10, 8, 5, 0.9)),
      radial-gradient(circle at 100% 0%, rgba(255, 217, 128, 0.18), transparent 22rem);
    animation: floatPanel 5.5s ease-in-out infinite;
  }

  .quote-panel::before {
    content: "AK";
    position: absolute;
    right: 24px;
    bottom: -22px;
    color: rgba(255, 217, 128, 0.06);
    font-size: 11rem;
    font-weight: 950;
    line-height: 1;
  }

  .quote-panel p {
    position: relative;
    color: #fff3d6;
    font-size: clamp(1.28rem, 2.4vw, 2.05rem);
    line-height: 1.28;
    font-weight: 850;
    margin-bottom: 18px;
  }

  .quote-panel span {
    position: relative;
    color: var(--muted);
    line-height: 1.65;
  }

  .pill-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .pill-list li {
    min-height: 56px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 217, 128, 0.16);
    border-radius: 8px;
    padding: 12px 14px;
    background: rgba(255, 255, 255, 0.035);
    color: #eadbbe;
    font-weight: 700;
    animation: fadeUp 0.7s ease both;
    transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
  }

  .pill-list li:hover {
    transform: translateX(6px);
    background: rgba(255, 217, 128, 0.085);
    border-color: rgba(255, 217, 128, 0.34);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .gallery-card {
    overflow: hidden;
    animation: fadeUp 0.72s ease both;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .gallery-card img {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    background: #0b0a08;
    filter: contrast(1.05) saturate(0.96);
    transition: transform 0.55s ease, filter 0.55s ease;
  }

  .gallery-card:hover img {
    transform: scale(1.08);
    filter: contrast(1.12) saturate(1.08);
  }

  .gallery-card p {
    min-height: 86px;
    margin: 0;
    padding: 16px;
    color: #dfceb1;
    line-height: 1.55;
  }

  .faq {
    display: grid;
    gap: 12px;
  }

  details {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(18, 15, 11, 0.72);
    padding: 18px 20px;
    animation: fadeUp 0.7s ease both;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  details[open] {
    border-color: rgba(255, 217, 128, 0.46);
    background: rgba(25, 20, 13, 0.9);
  }

  summary {
    cursor: pointer;
    color: var(--gold-bright);
    font-weight: 900;
  }

  details p {
    margin: 12px 0 0;
    color: #dfd0b3;
    line-height: 1.72;
  }

  .final-cta {
    border-top: 1px solid rgba(255, 217, 128, 0.16);
    border-bottom: 1px solid rgba(255, 217, 128, 0.16);
    background:
      radial-gradient(circle at 15% 10%, rgba(255, 217, 128, 0.18), transparent 26rem),
      linear-gradient(135deg, rgba(20, 16, 10, 0.95), rgba(5, 5, 5, 0.95));
    position: relative;
    overflow: hidden;
  }

  .final-cta::before {
    content: "";
    position: absolute;
    inset: -40% -20%;
    background: conic-gradient(from 110deg, transparent, rgba(255, 217, 128, 0.11), transparent 28%);
    animation: rotateGlow 12s linear infinite;
    pointer-events: none;
  }

  .cta-box {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 38px;
    align-items: center;
    position: relative;
  }

  .cta-copy p {
    color: #dfceb0;
    line-height: 1.75;
    margin: 18px 0 24px;
  }

  .risk-note {
    margin-top: 18px;
    color: #a99776;
    font-size: 0.82rem;
    line-height: 1.6;
  }

  .footer {
    padding: 30px 0;
    color: #a99776;
    text-align: center;
    font-size: 0.9rem;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(26px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes goldPulse {
    0%, 100% {
      box-shadow: 0 0 18px rgba(215, 168, 63, 0.22);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 34px rgba(255, 217, 128, 0.42);
      transform: scale(1.04);
    }
  }

  @keyframes softGlow {
    0%, 100% { box-shadow: 0 0 0 rgba(255, 217, 128, 0); }
    50% { box-shadow: 0 0 26px rgba(255, 217, 128, 0.2); }
  }

  @keyframes goldSweep {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes gridDrift {
    from { background-position: 0 0, 0 0; }
    to { background-position: 52px 52px, 52px 52px; }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes lineGlow {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  @keyframes floatPanel {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  @keyframes rotateGlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes portraitEnter {
    from {
      opacity: 0;
      transform: translateX(34px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @media (max-width: 980px) {
    .nav-inner {
      min-height: 68px;
      padding: 10px 0;
      align-items: center;
      flex-direction: row;
      position: relative;
    }

    .menu-toggle {
      display: inline-flex;
    }

    .nav-links {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      right: 0;
      width: 100%;
      display: grid;
      gap: 8px;
      padding: 12px;
      border: 1px solid rgba(255, 217, 128, 0.22);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(18, 15, 11, 0.98), rgba(5, 5, 5, 0.98)),
        radial-gradient(circle at 20% 0%, rgba(255, 217, 128, 0.18), transparent 16rem);
      box-shadow: 0 26px 70px rgba(0, 0, 0, 0.52);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px) scale(0.98);
      pointer-events: none;
      transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
      overflow: hidden;
    }

    .nav-links.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .nav-links a {
      width: 100%;
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgba(255, 217, 128, 0.12);
      border-radius: 8px;
      padding: 0 14px;
      background: rgba(255, 255, 255, 0.035);
      opacity: 1;
    }

    .nav-links a::after {
      content: ">";
      color: var(--gold-bright);
      font-weight: 950;
    }

    .nav-cta {
      justify-content: center;
      background: linear-gradient(135deg, #a97822, #ffd980 56%, #fff0b8) !important;
      color: #070604;
      border-color: transparent;
    }

    .nav-cta::after {
      color: #070604 !important;
    }

    .hero-stats,
    .cards,
    .gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .section-head,
    .hero-layout,
    .split,
    .cta-box {
      grid-template-columns: 1fr;
    }

    .hero-copy {
      max-width: 100%;
    }

    .hero-portrait {
      min-height: 420px;
      max-width: 520px;
    }

    .hero-portrait img {
      min-height: 420px;
    }
  }

  @media (max-width: 640px) {
    .container {
      width: min(100% - 28px, 1180px);
    }

    .brand {
      white-space: normal;
    }

    .nav-links {
      font-size: 0.84rem;
    }

    .hero-video-section {
      min-height: 92svh;
      padding: 142px 0 42px;
    }

    .hero-layout {
      gap: 28px;
    }

    .hero-portrait {
      min-height: 360px;
    }

    .hero-portrait img {
      min-height: 360px;
    }

    .hero-actions .btn,
    .cta-actions .btn {
      width: 100%;
    }

    .hero-stats,
    .cards,
    .gallery-grid,
    .pill-list {
      grid-template-columns: 1fr;
    }

    .timeline-item {
      grid-template-columns: 1fr;
    }

    section {
      padding: 68px 0;
    }
  }
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <style>{pageStyles}</style>

      <header className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">AK</span>
            <span>
              Amir Khan Trading
              <small>Boxing discipline for market performance</small>
            </span>
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            id="main-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#achievements" onClick={closeMenu}>Achievements</a>
            <a href="#legacy" onClick={closeMenu}>Legacy</a>
            <a href="#program" onClick={closeMenu}>Program</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#apply" className="nav-cta" onClick={closeMenu}>Apply</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-video-section">
          <video
            className="hero-video"
            src="/front2.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images.jpeg"
          />
          <div className="container">
            <div className="hero-layout">
              <div className="hero-copy">
                <div className="eyebrow">Black and gold elite trading mentorship</div>
                <h1>
                  Train your trading mindset with{" "}
                  <span className="gold-text">Amir Khan</span>
                </h1>
                <p className="hero-lead">
                  A performance-led trading education brand inspired by one of Britain&apos;s
                  most recognisable fighters. Amir Khan&apos;s journey from Olympic silver
                  medalist to unified world champion shows exactly what traders need:
                  discipline, patience, risk control, recovery after setbacks, and calm
                  execution when pressure rises.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#apply">
                    Apply for mentorship
                  </a>
                  <a className="btn btn-secondary" href="#achievements">
                    Explore Amir&apos;s career
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat">
                    <strong>2004</strong>
                    <span>Olympic silver medalist in Athens at only 17 years old.</span>
                  </div>
                  <div className="stat">
                    <strong>34</strong>
                    <span>Professional wins across a global boxing career.</span>
                  </div>
                  <div className="stat">
                    <strong>2x</strong>
                    <span>Unified world champion level at light-welterweight.</span>
                  </div>
                  <div className="stat">
                    <strong>Elite</strong>
                    <span>Sporting standards translated into trading routines.</span>
                  </div>
                </div>
              </div>
              <aside className="hero-portrait" aria-label="Amir Khan profile image">
                <img src="/images.jpeg" alt="Amir Khan" />
                <div className="hero-portrait-badge">
                  <strong>Amir “King” Khan</strong>
                  <span>Olympic silver medalist. Unified world champion. Elite mindset mentor.</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="ticker-section" aria-label="Amir Khan career highlights">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="achievements">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Sporting achievements</div>
                <h2>A boxing career built on speed, courage, and world-level ambition.</h2>
              </div>
              <p className="section-intro">
                Amir Khan did not become famous through a single viral moment. His name
                was built through years of amateur excellence, professional pressure,
                world title nights, arena headlines, difficult comebacks, and the kind
                of mental resilience that high performers respect.
              </p>
            </div>

            <div className="timeline">
              {achievements.map((item) => (
                <article className="timeline-item" key={`${item.year}-${item.title}`}>
                  <div className="timeline-year">{item.year}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="legacy">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Why it matters</div>
                <h2>The ring teaches lessons that traders cannot fake.</h2>
              </div>
              <p className="section-intro">
                Trading is not only charts and entries. It is preparation, emotional
                control, timing, self-review, and knowing when to step away. Amir&apos;s
                boxing legacy gives this brand a clear performance language.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Discipline before action</h3>
                <p>
                  A fighter does not invent a strategy mid-round. In the same way, a
                  trader needs a plan before entering the market: setup, risk, invalidation,
                  target, and review. The program puts process before impulse.
                </p>
              </article>
              <article className="card">
                <h3>Speed with control</h3>
                <p>
                  Amir&apos;s hand speed became famous because it was trained, repeated,
                  and directed. Traders learn to act quickly only after conditions are
                  clear, not because fear or excitement is taking over.
                </p>
              </article>
              <article className="card">
                <h3>Recovery after setbacks</h3>
                <p>
                  Every serious competitor loses rounds. The difference is the reset.
                  The mentorship focuses on protecting capital, reviewing mistakes, and
                  returning to the next session with structure instead of emotion.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="container">
            <div className="split">
              <div>
                <div className="kicker">Trading program</div>
                <h2>Learn to trade with a champion-level performance routine.</h2>
                <p className="section-intro" style={{ marginTop: 18 }}>
                  The Amir Khan Trading Mentorship is designed for people who want a
                  serious foundation: risk management, repeatable market analysis,
                  journaling, psychology, and accountability. The message is simple:
                  you do not chase markets, you train your process until better decisions
                  become repeatable.
                </p>
              </div>
              <div className="quote-panel">
                <p>
                  Great trading, like great boxing, is not built in the emotional moment.
                  It is built in preparation.
                </p>
                <span>
                  The goal is to help students build habits that can improve consistency
                  over time. No hype, no guaranteed income claims, no reckless risk.
                </span>
              </div>
            </div>

            <ul className="pill-list" style={{ marginTop: 28 }}>
              {programPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">For serious learners</div>
                <h2>What students work on inside the mentorship.</h2>
              </div>
              <p className="section-intro">
                The training is built for beginners who need a clean foundation and
                intermediate traders who keep repeating the same emotional mistakes.
                It is practical, direct, and focused on building a better routine.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Market reading</h3>
                <p>
                  Students study trend, range, liquidity, momentum, key levels, and
                  context. The aim is to understand why a trade idea exists before any
                  entry is considered.
                </p>
              </article>
              <article className="card">
                <h3>Risk management</h3>
                <p>
                  Every trade needs predefined risk, position sizing, invalidation, and
                  daily limits. Protecting capital is treated as the first professional
                  skill, not an optional detail.
                </p>
              </article>
              <article className="card">
                <h3>Performance psychology</h3>
                <p>
                  The program uses sport-inspired routines to reduce revenge trading,
                  overtrading, hesitation, and emotional decision-making after a win or loss.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Visual story</div>
                <h2>From fighter identity to trading performance brand.</h2>
              </div>
              <p className="section-intro">
                The page uses a premium black-and-gold style to connect championship
                energy, discipline, and a high-trust mentorship feel.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo) => (
                <article className="gallery-card" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <p>{photo.caption}</p>
                </article>
              ))}
            </div>
            <div className="risk-note">
              Gallery combines your provided images with additional Wikimedia Commons
              archive images of Amir Khan.
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">FAQ</div>
                <h2>Clear answers before you apply.</h2>
              </div>
              <p className="section-intro">
                The offer is positioned as education and mentorship. Trading involves
                risk, so the emphasis stays on learning, process, and responsible execution.
              </p>
            </div>

            <div className="faq">
              <details>
                <summary>Is this for complete beginners?</summary>
                <p>
                  Yes. The program can start from fundamentals, then move into market
                  structure, execution rules, risk planning, and weekly review.
                </p>
              </details>
              <details>
                <summary>How does Amir Khan&apos;s boxing career connect to trading?</summary>
                <p>
                  Elite boxing demands discipline, emotional control, preparation, and
                  recovery from setbacks. Those same principles help traders avoid impulsive
                  decisions and build a repeatable process.
                </p>
              </details>
              <details>
                <summary>Does the mentorship guarantee profits?</summary>
                <p>
                  No. Trading results are never guaranteed. The mentorship is built around
                  education, risk management, psychology, and better decision-making habits.
                </p>
              </details>
              <details>
                <summary>What makes the brand different?</summary>
                <p>
                  It combines practical trading education with the mindset of a proven
                  world-level athlete: prepare properly, stay calm under pressure, respect
                  risk, and review performance honestly.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section id="apply" className="final-cta">
          <div className="container cta-box">
            <div className="cta-copy">
              <div className="kicker">Apply now</div>
              <h2>Build the discipline to trade like a professional.</h2>
              <p>
                Join a premium black-and-gold mentorship environment inspired by Amir
                Khan&apos;s world-class sporting standards. Learn to plan trades, manage
                risk, stay emotionally composed, and review your performance with purpose.
              </p>
              <div className="cta-actions">
                <a className="btn btn-primary" href="mailto:apply@amirkhantrading.com">
                  Apply for mentorship
                </a>
                <a className="btn btn-secondary" href="#program">
                  See program pillars
                </a>
              </div>
              <div className="risk-note">
                Trading involves financial risk. This page presents education and mentoring,
                not financial advice or guaranteed earnings.
              </div>
            </div>
            <div className="quote-panel">
              <p>
                The market rewards preparation, patience, and control. That is the champion
                standard.
              </p>
              <span>
                A polished landing page for a premium trading mentorship brand, written in
                English and led by Amir Khan&apos;s sporting achievements.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © 2026 Amir Khan Trading Mentorship. Built for disciplined traders.
        </div>
      </footer>
    </div>
  );
}

export default App;
