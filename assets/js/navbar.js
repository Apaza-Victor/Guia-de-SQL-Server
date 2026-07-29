(function initNavbar() {

  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll('.nav-link-guide, .offcanvas-guide .accordion-body a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
      if (link.closest('.nav-item')) {
        link.closest('.nav-item').classList.add('active');
      }
    }
  });

  const offcanvasEl = document.getElementById('mobileMenu');
  if (offcanvasEl) {
    offcanvasEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) offcanvas.hide();
      });
    });
  }
})();
