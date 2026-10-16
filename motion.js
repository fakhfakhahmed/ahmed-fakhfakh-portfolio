// Motion is progressive enhancement: content is always visible without JavaScript.
const root = document.documentElement;
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.getElementById('motion-toggle');
const seen = new WeakSet();
const active = new Set();
let motionChoice = 'auto';
try {
  const saved = localStorage.getItem('ahmed-portfolio-motion');
  if (saved === 'paused' || saved === 'enabled') motionChoice = saved;
} catch { /* Optional preference. */ }

// Respect device settings by default; a visitor can explicitly opt in on this site.
function enabled() { return motionChoice === 'enabled' || (motionChoice === 'auto' && !preference.matches); }

function updateControl() {
  const paused = !enabled();
  const french = root.lang === 'fr';
  root.classList.toggle('motion-enabled', !paused);
  root.classList.toggle('motion-paused', paused || document.hidden);
  if (toggle) {
    toggle.hidden = false;
    toggle.textContent = paused
      ? (french ? 'Activer les animations' : 'Enable animations')
      : (french ? 'Mettre les animations en pause' : 'Pause animations');
    toggle.title = preference.matches && motionChoice === 'auto'
      ? (french ? 'Le réglage de mouvement réduit de votre appareil est respecté. Vous pouvez activer les animations ici.' : 'Your device’s reduced-motion preference is respected. You can enable animations here.')
      : '';
  }
  if (paused) {
    active.forEach(animation => animation.cancel());
    active.clear();
  } else {
    active.forEach(animation => document.hidden ? animation.pause() : animation.play());
  }
}

function reveal(node, delay = 0) {
  if (!enabled() || document.hidden || typeof node.animate !== 'function') return;
  const animation = node.animate([
    { opacity: 0, transform: 'translateY(18px)' },
    { opacity: 1, transform: 'translateY(0)' },
  ], { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  active.add(animation);
  // Release animation objects once their effect is complete; hover transforms stay free.
  animation.finished.then(() => active.delete(animation), () => active.delete(animation));
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  let stagger = 0;
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    reveal(entry.target, Math.min(stagger++ * 65, 195));
  });
}, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }) : null;

const revealSelector = '.section-heading, .project-card, .experience-row, .skill-card, .credential-card, .portrait-card, .languages, .contact-panel';
function watchSections() {
  if (!observer) return;
  document.querySelectorAll(revealSelector).forEach(node => {
    if (seen.has(node) || node.hidden) return;
    seen.add(node);
    observer.observe(node);
  });
}

// The language switch replaces translated sections; filters reveal existing cards.
const contentObserver = new MutationObserver(records => {
  records.forEach(record => record.removedNodes.forEach(node => {
    if (!(node instanceof Element)) return;
    observer?.unobserve(node);
    node.querySelectorAll(revealSelector).forEach(child => observer?.unobserve(child));
  }));
  watchSections();
});
['project-grid', 'experience-list', 'skills-grid', 'credentials', 'language-list'].forEach(id => {
  const section = document.getElementById(id);
  if (section) contentObserver.observe(section, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
});
new MutationObserver(updateControl).observe(root, { attributes: true, attributeFilter: ['lang'] });

// Only run ambient diagram motion while the diagram is in view.
const visibleObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle('motion-visible', entry.isIntersecting));
}, { threshold: 0 }) : null;
document.querySelectorAll('.hero-art').forEach(node => visibleObserver?.observe(node));
const diagramsObserver = new MutationObserver(records => {
  records.forEach(record => record.removedNodes.forEach(node => {
    if (node instanceof Element) node.querySelectorAll('.project-visual').forEach(child => visibleObserver?.unobserve(child));
  }));
  document.querySelectorAll('.project-visual:not([data-motion-observed])').forEach(node => {
    node.dataset.motionObserved = 'true';
    visibleObserver?.observe(node);
  });
});
const projects = document.getElementById('project-grid');
if (projects) diagramsObserver.observe(projects, { childList: true });
document.querySelectorAll('.project-visual').forEach(node => {
  node.dataset.motionObserved = 'true';
  visibleObserver?.observe(node);
});

toggle?.addEventListener('click', () => {
  motionChoice = enabled() ? 'paused' : 'enabled';
  try { localStorage.setItem('ahmed-portfolio-motion', motionChoice); } catch { /* Optional preference. */ }
  updateControl();
});
preference.addEventListener('change', updateControl);
document.addEventListener('visibilitychange', updateControl);
updateControl();
watchSections();
document.querySelectorAll('.hero-eyebrow, #hero-title > span, .hero-intro, .hero-ctas, .hero-person, .hero-art').forEach((node, index) => reveal(node, Math.min(index * 85, 425)));
