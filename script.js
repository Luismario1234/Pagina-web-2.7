/* ══════════════════════════════════════════════════════
   T-REX ENTERPRISES — script.js
══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const overlay = document.getElementById('rex-overlay');
  const rexContainer = document.getElementById('rex-container');
  const rexGif = document.getElementById('rex-gif');

  /* ── Mostrar dinosaurio antes de cambiar de página ── */
  document.querySelectorAll('nav a, .footer-links a, .btn[href], .logo').forEach(link => {
    const href = link.getAttribute('href');

    if (!href || href.startsWith('#') || href.startsWith('mailto')) return;

    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      const currentFile = window.location.pathname.split('/').pop() || 'index.html';

      if (target === currentFile) return;

      e.preventDefault();

if (overlay && rexContainer && rexGif) {
  overlay.classList.add('active');

  rexContainer.classList.remove(
    'rex-enter-right',
    'rex-exit-right',
    'rex-enter-left',
    'rex-exit-left'
  );

  const pageOrder = [
    'index.html',
    'producto.html',
    'menu.html',
    'contact.html'
  ];

  const currentIndex = pageOrder.indexOf(currentFile);
  const targetIndex = pageOrder.indexOf(target);

  if (targetIndex > currentIndex) {
    // Va hacia una página siguiente: corre a la derecha
    rexGif.src = 'img/source2.gif';
    rexContainer.classList.add('rex-enter-right');

    setTimeout(() => {
      rexContainer.classList.remove('rex-enter-right');
      rexContainer.classList.add('rex-exit-right');
    }, 900);

  } else {
    // Regresa a una página anterior: corre a la izquierda
    rexGif.src = 'img/source.gif';
    rexContainer.classList.add('rex-enter-left');

    setTimeout(() => {
      rexContainer.classList.remove('rex-enter-left');
      rexContainer.classList.add('rex-exit-left');
    }, 900);
  }

  setTimeout(() => {
    window.location.href = target;
  }, 1600);

} else {
  window.location.href = target;
}
    });
  });

  /* ── Marcar nav link activo según la página actual ── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentFile) {
      link.classList.add('nav-active');
    } else {
      link.classList.remove('nav-active');
    }
  });

  /* ── Stat bars ── */
  const statFills = document.querySelectorAll('.stat-bar-fill');

  if ('IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statFills.forEach(bar => barObserver.observe(bar));
  }

  /* ── Formulario de contacto ── */
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');

      btn.textContent = '✦ TRANSMISIÓN ENVIADA — EL REX LO SABE ✦';
      btn.disabled = true;
      btn.style.background = 'var(--amber)';
      btn.style.color = '#0a0800';
    });
  }

  /* ── Footprint trail ── */
  const trail = document.querySelector('.footprint-trail');

  if (trail) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.15;
      trail.style.transform = `translateX(${offset}px)`;
    }, { passive: true });
  }

});