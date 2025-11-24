const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1, // Umieszcza tło za całą zawartością
  },
  particles: {
    number: {
      value: 60, // Mniejsza liczba cząsteczek dla subtelnego efektu
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#8892b0", // Kolor pasujący do motywu (szary)
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#8892b0", // Kolor połączeń
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5, // Bardzo wolny ruch
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Odpychanie cząsteczek myszką
      },
      onclick: {
        enable: true,
        mode: "push", // Dodawanie nowych cząsteczek po kliknięciu
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
