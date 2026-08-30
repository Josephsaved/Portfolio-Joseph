// =========================================================
// MENU MOBILE — ouvre/ferme la navigation sur petit écran
// =========================================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Ferme le menu automatiquement quand on clique un lien
// (utile en mobile, une fois qu'on a navigué vers une section)
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// VISIONNEUSE D'IMAGES (lightbox) — clique sur une image du
// contenu (dans <main>) pour l'afficher en grand par-dessus
// la page. Fonctionne sur toutes les pages puisque ce script
// est partagé (index.html, baja-sae.html, liquidc.html, ...).
// =========================================================
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img alt="">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('main img').forEach((img) => {
  img.classList.add('zoomable');
  img.addEventListener('click', () => {
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
  });
});

// Clique n'importe où sur l'overlay (ou sur l'image agrandie) pour fermer
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});

// Touche Échap pour fermer aussi
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    lightbox.classList.remove('is-open');
  }
});
