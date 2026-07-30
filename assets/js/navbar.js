(function initNavbar() {

  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll('.nav-link-guide, .offcanvas-guide .accordion-body a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      if (link.closest('.nav-item')) {
        link.closest('.nav-item').classList.add('active');
      }
    }
  });

  const offcanvasEl = document.getElementById('mobileMenu');
  if (offcanvasEl) {
    const allLinks = offcanvasEl.querySelectorAll('a');
    allLinks.forEach(a => {
      a.addEventListener('click', () => {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) offcanvas.hide();
      });
    });

    offcanvasEl.addEventListener('shown.bs.offcanvas', function () {
      var first = offcanvasEl.querySelector('.accordion-button, a, button');
      if (first) setTimeout(function() { first.focus(); }, 50);
    });

    offcanvasEl.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusable = offcanvasEl.querySelectorAll('.accordion-button, a, button, input, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
})();
