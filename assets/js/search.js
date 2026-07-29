(function() {
  var searchIndex = [
    { title: "¿Qué es una base de datos?", url: "temas/nivel-1-fundamentos/01-que-es-una-base-de-datos.html", level: "Nivel 1 · Fundamentos" },
    { title: "Instalación de SQL Server", url: "temas/nivel-1-fundamentos/02-instalacion-sql-server.html", level: "Nivel 1 · Fundamentos" },
    { title: "SSMS y Azure Data Studio", url: "temas/nivel-1-fundamentos/03-ssms-azure-data-studio.html", level: "Nivel 1 · Fundamentos" },
    { title: "Tipos de bases de datos", url: "temas/nivel-1-fundamentos/04-tipos-de-bases-de-datos.html", level: "Nivel 1 · Fundamentos" },
    { title: "DDL: CREATE, ALTER, DROP", url: "temas/nivel-2-sql-basico/01-ddl-create-alter-drop.html", level: "Nivel 2 · SQL Básico" },
    { title: "DML: INSERT, UPDATE, DELETE", url: "temas/nivel-2-sql-basico/02-dml-insert-update-delete.html", level: "Nivel 2 · SQL Básico" },
    { title: "SELECT, WHERE, ORDER BY", url: "temas/nivel-2-sql-basico/03-select-where-orderby.html", level: "Nivel 2 · SQL Básico" },
    { title: "Tipos de datos en SQL Server", url: "temas/nivel-2-sql-basico/04-tipos-de-datos.html", level: "Nivel 2 · SQL Básico" },
    { title: "Operadores y funciones básicas", url: "temas/nivel-2-sql-basico/05-operadores-y-funciones-basicas.html", level: "Nivel 2 · SQL Básico" },
    { title: "JOINs: INNER, LEFT, RIGHT, FULL, CROSS", url: "temas/nivel-3-consultas-intermedias/01-joins.html", level: "Nivel 3 · Consultas Intermedias" },
    { title: "Subconsultas", url: "temas/nivel-3-consultas-intermedias/02-subconsultas.html", level: "Nivel 3 · Consultas Intermedias" },
    { title: "Funciones agregadas y GROUP BY", url: "temas/nivel-3-consultas-intermedias/03-funciones-agregadas-group-by.html", level: "Nivel 3 · Consultas Intermedias" },
    { title: "Vistas (VIEW)", url: "temas/nivel-3-consultas-intermedias/04-vistas.html", level: "Nivel 3 · Consultas Intermedias" },
    { title: "UNION, EXCEPT, INTERSECT", url: "temas/nivel-3-consultas-intermedias/05-union-except-intersect.html", level: "Nivel 3 · Consultas Intermedias" },
    { title: "Modelado entidad-relación", url: "temas/nivel-4-diseno-bd/01-modelado-entidad-relacion.html", level: "Nivel 4 · Diseño BD" },
    { title: "Normalización (1FN, 2FN, 3FN)", url: "temas/nivel-4-diseno-bd/02-normalizacion.html", level: "Nivel 4 · Diseño BD" },
    { title: "Claves y relaciones", url: "temas/nivel-4-diseno-bd/03-claves-y-relaciones.html", level: "Nivel 4 · Diseño BD" },
    { title: "Índices básicos", url: "temas/nivel-4-diseno-bd/04-indices-basicos.html", level: "Nivel 4 · Diseño BD" },
    { title: "Variables y control de flujo", url: "temas/nivel-5-tsql-programacion/01-variables-y-control-de-flujo.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "Procedimientos almacenados", url: "temas/nivel-5-tsql-programacion/02-procedimientos-almacenados.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "Funciones definidas por usuario", url: "temas/nivel-5-tsql-programacion/03-funciones-definidas-por-usuario.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "Triggers", url: "temas/nivel-5-tsql-programacion/04-triggers.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "Cursores", url: "temas/nivel-5-tsql-programacion/05-cursores.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "Manejo de errores TRY/CATCH", url: "temas/nivel-5-tsql-programacion/06-manejo-de-errores-try-catch.html", level: "Nivel 5 · Programación T-SQL" },
    { title: "ACID y transacciones", url: "temas/nivel-6-transacciones/01-acid-y-transacciones.html", level: "Nivel 6 · Transacciones" },
    { title: "Niveles de aislamiento", url: "temas/nivel-6-transacciones/02-niveles-de-aislamiento.html", level: "Nivel 6 · Transacciones" },
    { title: "Bloqueos y deadlocks", url: "temas/nivel-6-transacciones/03-bloqueos-y-deadlocks.html", level: "Nivel 6 · Transacciones" },
    { title: "Logins, usuarios y roles", url: "temas/nivel-7-seguridad/01-logins-usuarios-roles.html", level: "Nivel 7 · Seguridad" },
    { title: "Permisos GRANT, DENY, REVOKE", url: "temas/nivel-7-seguridad/02-permisos-grant-deny-revoke.html", level: "Nivel 7 · Seguridad" },
    { title: "Encriptación básica", url: "temas/nivel-7-seguridad/03-encriptacion-basica.html", level: "Nivel 7 · Seguridad" },
    { title: "Índices avanzados", url: "temas/nivel-8-optimizacion/01-indices-avanzados.html", level: "Nivel 8 · Optimización" },
    { title: "Planes de ejecución", url: "temas/nivel-8-optimizacion/02-planes-de-ejecucion.html", level: "Nivel 8 · Optimización" },
    { title: "Estadísticas y query tuning", url: "temas/nivel-8-optimizacion/03-estadisticas-y-query-tuning.html", level: "Nivel 8 · Optimización" },
    { title: "Buenas prácticas de rendimiento", url: "temas/nivel-8-optimizacion/04-buenas-practicas-de-rendimiento.html", level: "Nivel 8 · Optimización" },
    { title: "Backup y restore", url: "temas/nivel-9-administracion/01-backup-y-restore.html", level: "Nivel 9 · Administración" },
    { title: "Mantenimiento y jobs", url: "temas/nivel-9-administracion/02-mantenimiento-y-jobs.html", level: "Nivel 9 · Administración" },
    { title: "SQL Server Agent", url: "temas/nivel-9-administracion/03-sql-server-agent.html", level: "Nivel 9 · Administración" },
    { title: "Replicación básica", url: "temas/nivel-9-administracion/04-replicacion-basica.html", level: "Nivel 9 · Administración" },
    { title: "Conexión con PHP", url: "temas/nivel-10-integracion-backend/01-conexion-con-php.html", level: "Nivel 10 · Integración Backend" },
    { title: "Conexión con Node.js", url: "temas/nivel-10-integracion-backend/02-conexion-con-nodejs.html", level: "Nivel 10 · Integración Backend" },
    { title: "Conexión con Python", url: "temas/nivel-10-integracion-backend/03-conexion-con-python.html", level: "Nivel 10 · Integración Backend" },
    { title: "Conexión con .NET y Java", url: "temas/nivel-10-integracion-backend/04-conexion-con-dotnet-java.html", level: "Nivel 10 · Integración Backend" },
    { title: "ORMs y connection strings", url: "temas/nivel-10-integracion-backend/05-orm-y-connection-strings.html", level: "Nivel 10 · Integración Backend" },
    { title: "Entornos locales: Laragon, XAMPP, Docker", url: "temas/nivel-10-integracion-backend/06-entornos-locales-laragon-xampp-docker.html", level: "Nivel 10 · Integración Backend" },
    { title: "CTEs recursivos", url: "temas/nivel-11-avanzado-experto/01-cte-recursivos.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "Funciones de ventana", url: "temas/nivel-11-avanzado-experto/02-funciones-de-ventana.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "JSON en SQL Server", url: "temas/nivel-11-avanzado-experto/03-json-en-sql-server.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "Particionamiento", url: "temas/nivel-11-avanzado-experto/04-particionamiento.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "In-Memory OLTP", url: "temas/nivel-11-avanzado-experto/05-in-memory-oltp.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "SQL dinámico", url: "temas/nivel-11-avanzado-experto/06-dynamic-sql.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "Always On y alta disponibilidad", url: "temas/nivel-11-avanzado-experto/07-always-on-alta-disponibilidad.html", level: "Nivel 11 · Avanzado/Experto" },
    { title: "Buenas prácticas generales", url: "temas/nivel-12-proyecto-final/01-buenas-practicas-generales.html", level: "Nivel 12 · Proyecto Final" },
    { title: "Checklist de experto", url: "temas/nivel-12-proyecto-final/02-checklist-de-experto.html", level: "Nivel 12 · Proyecto Final" },
    { title: "Proyecto integrador", url: "temas/nivel-12-proyecto-final/03-proyecto-integrador.html", level: "Nivel 12 · Proyecto Final" },
    { title: "Recursos externos", url: "recursos.html", level: "Páginas principales" },
    { title: "Glosario de términos SQL", url: "glosario.html", level: "Páginas principales" },
    { title: "Acerca de esta guía", url: "acerca.html", level: "Páginas principales" }
  ];

  function init() {
  var modal = document.getElementById('searchModal');
  var toggleBtns = document.querySelectorAll('.js-search-toggle');
  var closeBtn = document.getElementById('searchClose');
  var input = document.getElementById('searchInput');
  var results = document.getElementById('searchResults');

  if (!modal || !toggleBtns.length) { setTimeout(init, 100); return; }

  function openSearch() {
    modal.classList.add('is-open');
    setTimeout(function() { input.focus(); }, 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    modal.classList.remove('is-open');
    input.value = '';
    results.innerHTML = '<div class="search-modal__empty">Escribe para buscar en la guía...</div>';
    document.body.style.overflow = '';
  }

  toggleBtns.forEach(function(btn) { btn.addEventListener('click', openSearch); });
  closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName) && !modal.classList.contains('is-open')) {
      e.preventDefault(); openSearch();
    }
  });

  input.addEventListener('input', function() {
    var q = input.value.toLowerCase().trim();
    if (!q) {
      results.innerHTML = '<div class="search-modal__empty">Escribe para buscar en la guía...</div>';
      return;
    }

    var matches = searchIndex.filter(function(item) {
      return item.title.toLowerCase().includes(q) || item.level.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-modal__empty">No se encontraron resultados para "<strong>' + input.value + '</strong>"</div>';
      return;
    }

    results.innerHTML = matches.map(function(item) {
      return '<a href="' + item.url + '" class="search-result-item" onclick="document.getElementById(\'searchModal\').classList.remove(\'is-open\');document.body.style.overflow=\'\';">' +
        '<span class="search-result-title">' + item.title + '</span>' +
        '<span class="search-result-level">' + item.level + '</span>' +
        '</a>';
    }).join('');
  });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
