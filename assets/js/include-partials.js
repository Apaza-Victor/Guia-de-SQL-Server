async function includeHTML(selector, path, targetHead) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch( path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    var text = await res.text();
    text = text.replace(/<script[\s\S]*?<\/script>/gi, '');
    if (targetHead) {
      var headTags = text.match(/<(link|meta)[^>]*>/gi) || [];
      for (var i = 0; i < headTags.length; i++) {
        var tmp = document.createElement('div');
        tmp.innerHTML = headTags[i];
        document.head.appendChild(tmp.firstElementChild);
      }
      var navIdx = text.indexOf('<nav');
      el.innerHTML = navIdx !== -1 ? text.substring(navIdx) : text;
    } else {
      el.innerHTML = text;
    }
  } catch (err) {
    el.innerHTML = '';
  }
}

function getPageType() {
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') return 'home';
  if (page === 'recursos.html') return 'resources';
  if (page === 'glosario.html') return 'glossary';
  return 'topic';
}

function injectPageBg() {
  var type = getPageType();
  if (type === 'home') {
    var bg = document.createElement('div');
    bg.className = 'page-bg';
    bg.setAttribute('aria-hidden', 'true');
    bg.innerHTML = '<div class="page-bg__orb page-bg__orb--1"></div><div class="page-bg__orb page-bg__orb--2"></div><div class="page-bg__orb page-bg__orb--3"></div><div class="page-bg__grid"></div><div class="page-bg__scanline"></div>';
    document.body.prepend(bg);
  } else {
    var canvas = document.createElement('div');
    canvas.id = 'particles-js';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.prepend(canvas);
    loadParticles(type);
  }
}

function loadParticles(type) {
  var colors = {
    topic: { particle: '#34d399', link: '#059669' },
    resources: { particle: '#fbbf24', link: '#d97706' },
    glossary: { particle: '#a78bfa', link: '#7c3aed' }
  };
  var c = colors[type] || colors.topic;

  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
  script.onload = function() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: c.particle },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: c.link,
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  };
  document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  injectPageBg();
  includeHTML('#site-header', 'assets/partials/header.html', true);
  includeHTML('#site-footer', 'assets/partials/footer.html');
});
