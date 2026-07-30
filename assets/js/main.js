document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const backTop = document.querySelector('.btn-back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });
  }

  window.addEventListener('scroll', function() {
    document.body.style.top = 0;
  }, { passive: true });

  if (document.querySelector('.mermaid')) {
    loadMermaid();
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      mirror: false,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }

  (function tipsBar() {
    var bar = document.createElement('div');
    bar.className = 'tips-bar';
    bar.innerHTML =
      '<span class="tips-bar__prompt">SQL</span>' +
      '<span class="tips-bar__text" id="tipsText"></span>' +
      '<span class="sql-console__caret"></span>';
    document.body.appendChild(bar);

    var tips = [
      'Consejo: usa CREATE INDEX con INCLUDE para cubrir consultas sin tocar el \u00edndice principal.',
      'Tip: en lugar de SELECT *, especifica columnas; reduces E/S y evitas quebrar vistas.',
      'Truco: fragmentaci\u00f3n >30% -> ALTER INDEX REBUILD; entre 10% y 30% -> REORGANIZE.',
      'Tip: OBJECT_ID() es m\u00e1s r\u00e1pido que IF EXISTS(SELECT 1 FROM sys.tables) en validaciones.',
      'Consejo: si no necesitas UNICODE usa VARCHAR en vez de NVARCHAR; ahorras la mitad de espacio.',
      'Truco: WITH (NOLOCK) evita bloqueos de lectura pero permite dirty reads; \u00fasalo con cuidado.',
      'Curiosidad: SQL Agent puede ejecutar jobs aunque nadie tenga SSMS abierto; usa sp_start_job.',
      'Tip: MERGE permite sincronizar tablas con una sola instrucci\u00f3n en vez de INSERT+UPDATE.',
      'Consejo: tempdb en disco SSD dedicado reduce contenci\u00f3n y mejora rendimiento global.',
      'Tip: envuelve tu l\u00f3gica en BEGIN TRY...END TRY y captura errores con ERROR_MESSAGE().',
      'Curiosidad: una CTE recursiva tiene un m\u00e1ximo de 32767 niveles; usa OPTION (MAXRECURSION 0) para ilimitado.',
      'Tip: DBCC FREEPROCCACHE borra el plan cache; \u00fasalo en mantenimiento y no en producci\u00f3n sin supervisi\u00f3n.',
      'Consejo: usa la cl\u00e1usula OUTPUT para capturar valores insertados/actualizados en una sola pasada.',
      'Tip: SCOPE_IDENTITY() es seguro para obtener el \u00faltimo identity; @@IDENTITY puede venir de un trigger.',
      'Consejo: crea \u00edndices filtrados (WHERE condici\u00f3n) para consultas que solo tocan un subconjunto de datos.',
      'Tip: usa EXISTS en vez de IN cuando solo importa la existencia; SQL Server optimiza mejor el primero.',
      'Truco: la opci\u00f3n READ COMMITTED SNAPSHOT elimina la mayor\u00eda de bloqueos lectura-escritura.',
      'Consejo: evita funciones escalares en WHERE; fuerzan scan. Prefiere columnas calculadas o \u00edndices.',
      'Tip: DATA_COMPRESSION = PAGE reduce espacio en disco y E/S aunque aumenta CPU en consultas.',
      'Curiosidad: sys.dm_exec_query_stats y sys.dm_exec_sql_text revelan las consultas m\u00e1s lentas del servidor.',
      'Consejo: usa CHECKSUM en columnas largas para comparaciones r\u00e1pidas (con cuidado por colisiones).',
      'Tip: ALTER TABLE ... SWITCH particiona datos al instante sin moverlos f\u00edsicamente.',
      'Truco: el plan cache se beneficia de consultas con par\u00e1metros; evita literales para evitar recompilaciones.',
    ];

    var idx = 0, pos = 0, dir = 1;
    var el = document.getElementById('tipsText');
    var HOLD = 28000;

    function tick() {
      var tip = tips[idx];
      if (dir === 1) {
        if (pos < tip.length) {
          pos++;
          el.textContent = tip.substring(0, pos);
          setTimeout(tick, 20 + Math.random() * 30);
        } else {
          dir = -1;
          setTimeout(tick, HOLD);
        }
      } else {
        if (pos > 0) {
          pos -= 3;
          if (pos < 0) pos = 0;
          el.textContent = tip.substring(0, pos);
          setTimeout(tick, 10 + Math.random() * 12);
        } else {
          dir = 1;
          idx = (idx + 1) % tips.length;
          setTimeout(tick, 1200);
        }
      }
    }

    setTimeout(tick, 2000);
  })();

  function loadMermaid() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = function() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        themeVariables: isDark ? {
          primaryColor: '#1a2540',
          primaryTextColor: '#e7ecf5',
          primaryBorderColor: '#3ddc97',
          lineColor: '#5b8def',
          secondaryColor: '#121b2e',
          tertiaryColor: '#0b1220',
          fontFamily: '"Inter", sans-serif'
        } : {
          primaryColor: '#eef2f8',
          primaryTextColor: '#111827',
          primaryBorderColor: '#0e9f6e',
          lineColor: '#2e63d9',
          secondaryColor: '#ffffff',
          tertiaryColor: '#f7f9fc',
          fontFamily: '"Inter", sans-serif'
        }
      });
      mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
    };
    document.head.appendChild(script);
  }
});
