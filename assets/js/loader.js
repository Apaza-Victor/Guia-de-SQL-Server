(function loadAssets() {
  const base = window.location.pathname.includes('/temas/') ? '../' : '';

  const cssLinks = [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
    base + 'assets/css/variables.css',
    base + 'assets/css/base.css',
    base + 'assets/css/layout.css',
    base + 'assets/css/components.css',
    base + 'assets/css/responsive.css'
  ];

  cssLinks.forEach(href => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });

  function loadScripts() {
    var scripts = [
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      'https://unpkg.com/aos@2.3.1/dist/aos.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js',
      base + 'assets/js/theme-switcher.js',
      base + 'assets/js/include-partials.js',
      base + 'assets/js/navbar.js',
      base + 'assets/js/code-copy.js',
      base + 'assets/js/toc-scrollspy.js',
      base + 'assets/js/main.js'
    ];
    scripts.forEach(function(src) {
      var s = document.createElement('script');
      s.src = src;
      s.defer = true;
      document.body.appendChild(s);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadScripts);
  } else {
    loadScripts();
  }
})();
