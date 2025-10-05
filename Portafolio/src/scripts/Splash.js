// Oculta el splash después de un pequeño retardo
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('intro-splash');
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add('hide');
  }, 800);
});
