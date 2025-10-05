// Inicializa particles.js si está disponible (usa CDN en layout)
if (typeof window !== 'undefined' && window.particlesJS) {
  window.particlesJS('particles-bg', {
    particles: {
      number: { value: 40 },
      color: { value: '#0d6efd' },
      shape: { type: 'circle' },
      opacity: { value: 0.12 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    },
    interactivity: { detect_on: 'canvas', events: { onhover: { enable: false }, onclick: { enable: false } } }
  });
}
