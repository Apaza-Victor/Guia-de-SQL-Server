(function initTocScrollspy() {
  const tocLinks = document.querySelectorAll('.toc-sidebar a');
  if (!tocLinks.length) return;

  const headings = Array.from(tocLinks).map(link => {
    const id = link.getAttribute('href')?.slice(1);
    return id ? document.getElementById(id) : null;
  }).filter(Boolean);

  function onScroll() {
    const scrollY = window.scrollY + 100;
    let activeId = null;
    for (const h of headings) {
      if (h.offsetTop <= scrollY) activeId = h.id;
    }
    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + activeId) link.classList.add('active');
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
