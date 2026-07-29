# 📘 Documentación Técnica — "SQL Server: De Cero a Experto"
### Web-guía interactiva de teoría y práctica (no es una academia, es una guía de referencia y aprendizaje)

> Este documento es la especificación completa que debe seguir el agente/IA constructor (opencode) para generar el proyecto. Contiene: stack, arquitectura, sistema de diseño, estructura de archivos, sistema de rutas, componentes, temario completo y plan de construcción paso a paso.

---

## 1. Visión general del proyecto

**Nombre sugerido:** `sql-server-guia` (o el que prefieras, ej. "SQLMastery", "T-SQL Path", "DataGuide SQL")

**Objetivo:** Sitio web estático (HTML + CSS + JS, sin backend ni base de datos propia) que funcione como **guía de teoría, referencia y práctica progresiva de SQL Server**, desde nivel cero hasta nivel experto, incluyendo su integración con backends (PHP, Node.js, Python, .NET, Java) y entornos locales de prueba (Laragon, XAMPP, Docker, SSMS, Azure Data Studio).

**No es:**
- Una plataforma de cursos con usuarios/login/pagos.
- Un backend con base de datos real.

**Sí es:**
- Una enciclopedia/manual navegable, con ejemplos de código, tablas comparativas, diagramas visuales, notas, buenas prácticas y una sección de recursos externos gratuitos.

**Público objetivo:** Personas que parten de cero en bases de datos y quieren llegar a nivel avanzado/experto en SQL Server y su uso en proyectos backend reales.

---

## 2. Stack tecnológico recomendado

| Categoría | Tecnología | Uso |
|---|---|---|
| Estructura | HTML5 semántico | Cada sección/tema es un `.html` independiente |
| Framework CSS | Bootstrap 5.3.x (vía CDN o local) | Grid, navbar, offcanvas (menú hamburguesa), utilidades responsive |
| CSS propio | CSS3 + variables (`:root`) | Theming (dark/light), tokens de diseño, ajustes que Bootstrap no cubre |
| JS | Vanilla JS (ES6+, modular con `type="module"`) | Sin frameworks pesados (React/Vue) — mantiene la filosofía de la web ligera |
| Iconos | **Bootstrap Icons** o **Phosphor Icons** (CDN) | Iconografía de menús, tarjetas, botones |
| Animaciones scroll | **AOS (Animate On Scroll)** | Revelado de secciones al hacer scroll |
| Resaltado de código | **Prism.js** (o Highlight.js) con tema custom oscuro/claro | Bloques de código T-SQL, PHP, JS, etc. |
| Carrusel/slider recursos | **Swiper.js** o el carousel nativo de Bootstrap | Sección de recursos y ejemplos visuales |
| Diagramas | SVG inline hechos a mano + CSS, o **Mermaid.js** (CDN) para diagramas ER/flujos | Modelos entidad-relación, flujos de transacciones, arquitectura cliente-servidor |
| Fuentes | Google Fonts (2 familias: display + texto) + una monoespaciada para código | Ver sistema de diseño (sección 3) |
| Búsqueda interna (opcional) | JS simple con `fetch` + JSON index, o **Lunr.js** | Buscador tipo `Ctrl+K` en todo el contenido |

**Regla de oro:** todo vía CDN para no complicar el build, salvo que se pida un `package.json` con bundler (no es necesario aquí: sitio 100% estático).

---

## 3. Sistema de diseño (evitar el "look" genérico de IA)

Para que la web no se vea como una plantilla más, se define una identidad visual propia inspirada en el propio dominio: **bases de datos, tablas, consultas, terminal SQL**. La metáfora visual central es la de un **"query en ejecución" / "esquema de base de datos vivo"**.

### 3.1 Paleta de colores (tokens)

**Modo oscuro (por defecto, ideal para código):**
- `--bg-base`: `#0B1220` (azul-negro profundo, como una consola)
- `--bg-surface`: `#121B2E`
- `--bg-surface-2`: `#1A2540`
- `--accent-primary`: `#3DDC97` (verde-menta tipo "cursor de terminal" — evoca `SELECT * running`)
- `--accent-secondary`: `#5B8DEF` (azul consulta/enlace)
- `--text-primary`: `#E7ECF5`
- `--text-muted`: `#8C99B3`
- `--border`: `#233152`
- `--warning`: `#F4B740`
- `--danger`: `#EF5350`

**Modo claro:**
- `--bg-base`: `#F7F9FC`
- `--bg-surface`: `#FFFFFF`
- `--bg-surface-2`: `#EEF2F8`
- `--accent-primary`: `#0E9F6E`
- `--accent-secondary`: `#2E63D9`
- `--text-primary`: `#111827`
- `--text-muted`: `#5B6472`
- `--border`: `#DCE3EE`

> No usar el crema `#F4F1EA` + terracota `#D97757` (paleta genérica de IA) ni negro absoluto con acento neón único. Esta paleta azul-consola + verde-terminal es propia del dominio (SQL/bases de datos).

### 3.2 Tipografía

- **Display (títulos):** `"Space Grotesk"` o `"Sora"` (Google Fonts) — geométrica, técnica, moderna.
- **Texto/body:** `"Inter"` — alta legibilidad en párrafos largos de teoría.
- **Código/monoespaciada:** `"JetBrains Mono"` o `"Fira Code"` (con ligaduras opcionales) — para todos los bloques `<pre><code>`.

Escala tipográfica sugerida (usar `clamp()` para fluidez entre 368px y 4K):
```css
--fs-h1: clamp(1.75rem, 1.2rem + 2.5vw, 3rem);
--fs-h2: clamp(1.4rem, 1.1rem + 1.5vw, 2.25rem);
--fs-h3: clamp(1.15rem, 1rem + 0.8vw, 1.6rem);
--fs-body: clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem);
--fs-code: clamp(0.82rem, 0.8rem + 0.15vw, 0.95rem);
```

### 3.3 Elemento firma ("signature element")

Un **encabezado tipo "consola SQL animada"** en el Hero de la home: una terminal simulada donde, mediante JS (efecto máquina de escribir), se "escribe" una consulta real progresivamente:
```sql
SELECT conocimiento
FROM cero
WHERE nivel = 'experto'
ORDER BY practica DESC;
```
Este elemento se reutiliza de forma sutil (no repetitiva) como separador visual entre módulos del temario (una mini "cinta de consulta" con opacidad baja de fondo).

### 3.4 Layout / estructura visual

- Header fijo (sticky) con navbar + selector de tema.
- Sidebar de navegación por sección (Tabla de Contenidos, TOC) en pantallas ≥992px, colapsable.
- Contenido central en columna legible (máx. `~880px` de ancho para texto teórico), con tablas y ejemplos a ancho completo del contenedor.
- Migas de pan (breadcrumbs) arriba del contenido: `Inicio / Nivel 2 – SQL Básico / SELECT y WHERE`.
- Botón flotante "volver arriba" y progreso de lectura (barra fina superior).

### 3.5 Motion

- AOS con `fade-up` sutil (duración 500-600ms, easing `ease-out`), **una sola vez** por elemento (no repetitivo al hacer scroll arriba/abajo).
- Transición suave (`transition: background-color .3s, color .3s`) al cambiar entre modo oscuro/claro.
- Respetar `prefers-reduced-motion: reduce` desactivando animaciones no esenciales.

---

## 4. Arquitectura de archivos (multipágina, cada tema = un `.html`)

```
sql-server-guia/
│
├── index.html                     → Home / Landing (hero, intro, mapa del curso, CTA)
├── recursos.html                  → Sección de recursos externos gratuitos
├── glosario.html                  → Glosario de términos SQL
├── acerca.html                    → Sobre el proyecto / cómo usar la guía
│
├── /assets
│   ├── /css
│   │   ├── variables.css          → Tokens de diseño (colores, tipografía, spacing)
│   │   ├── base.css               → Reset + estilos base + tipografía
│   │   ├── layout.css             → Header, sidebar, footer, grid general
│   │   ├── components.css         → Cards, tablas, alerts, code-blocks, badges
│   │   ├── theme-dark.css / theme-light.css  (o todo en variables.css con [data-theme])
│   │   └── responsive.css         → Media queries específicas (368px, 576, 768, 992, 1200, 1440)
│   │
│   ├── /js
│   │   ├── main.js                → Inicialización general (AOS, año footer, etc.)
│   │   ├── theme-switcher.js      → Lógica dark/light + localStorage
│   │   ├── navbar.js              → Dropdowns desktop + offcanvas mobile + resaltar link activo
│   │   ├── include-partials.js    → Carga header/footer/sidebar via fetch() en cada página
│   │   ├── code-copy.js           → Botón "copiar código" en cada bloque <pre>
│   │   ├── search.js              → (opcional) buscador interno Ctrl+K
│   │   └── toc-scrollspy.js       → Resalta la sección activa en el TOC lateral
│   │
│   ├── /img                       → Diagramas, capturas, íconos propios, favicon
│   └── /partials
│       ├── header.html            → Navbar completa (se inyecta con fetch en todas las páginas)
│       ├── footer.html            → Footer común
│       └── sidebar-<nivel>.html   → (opcional) TOC de cada nivel
│
└── /temas
    ├── /nivel-1-fundamentos
    │   ├── 01-que-es-una-base-de-datos.html
    │   ├── 02-instalacion-sql-server.html
    │   ├── 03-ssms-azure-data-studio.html
    │   └── 04-tipos-de-bases-de-datos.html
    │
    ├── /nivel-2-sql-basico
    │   ├── 01-ddl-create-alter-drop.html
    │   ├── 02-dml-insert-update-delete.html
    │   ├── 03-select-where-orderby.html
    │   ├── 04-tipos-de-datos.html
    │   └── 05-operadores-y-funciones-basicas.html
    │
    ├── /nivel-3-consultas-intermedias
    │   ├── 01-joins.html
    │   ├── 02-subconsultas.html
    │   ├── 03-funciones-agregadas-group-by.html
    │   ├── 04-vistas.html
    │   └── 05-union-except-intersect.html
    │
    ├── /nivel-4-diseno-bd
    │   ├── 01-modelado-entidad-relacion.html
    │   ├── 02-normalizacion.html
    │   ├── 03-claves-y-relaciones.html
    │   └── 04-indices-basicos.html
    │
    ├── /nivel-5-tsql-programacion
    │   ├── 01-variables-y-control-de-flujo.html
    │   ├── 02-procedimientos-almacenados.html
    │   ├── 03-funciones-definidas-por-usuario.html
    │   ├── 04-triggers.html
    │   ├── 05-cursores.html
    │   └── 06-manejo-de-errores-try-catch.html
    │
    ├── /nivel-6-transacciones
    │   ├── 01-acid-y-transacciones.html
    │   ├── 02-niveles-de-aislamiento.html
    │   └── 03-bloqueos-y-deadlocks.html
    │
    ├── /nivel-7-seguridad
    │   ├── 01-logins-usuarios-roles.html
    │   ├── 02-permisos-grant-deny-revoke.html
    │   └── 03-encriptacion-basica.html
    │
    ├── /nivel-8-optimizacion
    │   ├── 01-indices-avanzados.html
    │   ├── 02-planes-de-ejecucion.html
    │   ├── 03-estadisticas-y-query-tuning.html
    │   └── 04-buenas-practicas-de-rendimiento.html
    │
    ├── /nivel-9-administracion
    │   ├── 01-backup-y-restore.html
    │   ├── 02-mantenimiento-y-jobs.html
    │   ├── 03-sql-server-agent.html
    │   └── 04-replicacion-basica.html
    │
    ├── /nivel-10-integracion-backend
    │   ├── 01-conexion-con-php.html
    │   ├── 02-conexion-con-nodejs.html
    │   ├── 03-conexion-con-python.html
    │   ├── 04-conexion-con-dotnet-java.html
    │   ├── 05-orm-y-connection-strings.html
    │   └── 06-entornos-locales-laragon-xampp-docker.html
    │
    ├── /nivel-11-avanzado-experto
    │   ├── 01-cte-recursivos.html
    │   ├── 02-funciones-de-ventana.html
    │   ├── 03-json-en-sql-server.html
    │   ├── 04-particionamiento.html
    │   ├── 05-in-memory-oltp.html
    │   ├── 06-dynamic-sql.html
    │   └── 07-always-on-alta-disponibilidad.html
    │
    └── /nivel-12-proyecto-final
        ├── 01-buenas-practicas-generales.html
        ├── 02-checklist-de-experto.html
        └── 03-proyecto-integrador.html
```

> Cada archivo `.html` de `/temas` es una página completa e independiente que **incluye el mismo header y footer** (inyectados vía `include-partials.js`), de modo que se sienta como una sola web unida por rutas relativas (`../../assets/...`, `../nivel-2/...`).

---

## 5. Sistema de rutas / unión entre páginas

Al ser un sitio 100% estático sin backend, la "unión" entre páginas se logra así:

1. **Enlaces relativos reales** (`<a href="../nivel-2-sql-basico/03-select-where-orderby.html">`) — esto es lo que realmente "conecta" la web. No usar SPA/hash-routing, para mantenerlo simple y con URLs limpias y compartibles.
2. **Partials reutilizables vía `fetch()`**: `header.html` y `footer.html` viven en `/assets/partials/` y cada página los carga así:
   ```js
   // include-partials.js
   async function includeHTML(selector, path) {
     const el = document.querySelector(selector);
     const res = await fetch(path);
     el.innerHTML = await res.text();
   }
   document.addEventListener('DOMContentLoaded', () => {
     includeHTML('#site-header', calcularRutaBase() + 'assets/partials/header.html');
     includeHTML('#site-footer', calcularRutaBase() + 'assets/partials/footer.html');
   });
   ```
   > Nota: como cada tema está en subcarpetas de distinta profundidad (`/temas/nivel-X/archivo.html` vs `index.html` en la raíz), se necesita una función `calcularRutaBase()` o usar **rutas absolutas desde la raíz del dominio** (`/assets/...`) en vez de relativas, para simplificar (recomendado si se sirve con un servidor local tipo Laragon/XAMPP/Live Server, donde sí existe una raíz fija).
3. **Resaltado de link activo**: `navbar.js` compara `window.location.pathname` contra los `href` del menú para marcar la sección actual con clase `.active`.
4. **Navegación secuencial "Anterior / Siguiente"** al final de cada tema, para que el usuario avance el temario en orden sin depender solo del menú.
5. **Sitemap / mapa del temario en `index.html`**: tarjetas agrupadas por nivel enlazando directo a cada archivo.

---

## 6. Responsive: de 368px en adelante

Breakpoints a usar (mobile-first):

| Breakpoint | Ancho | Uso |
|---|---|---|
| `xs` (base) | 368px – 575px | 1 columna, navbar colapsada (hamburguesa/offcanvas), tablas con scroll horizontal (`.table-responsive`) |
| `sm` | 576px – 767px | Ajustes de padding, tarjetas 1 columna |
| `md` | 768px – 991px | Grid 2 columnas en tarjetas de recursos/temario, sidebar TOC aún oculta |
| `lg` | 992px – 1199px | Aparece sidebar TOC lateral, navbar con dropdowns completos |
| `xl` / `xxl` | 1200px+ | Ancho máximo de contenido (`max-width: 1320px` centrado), más aire lateral |

Reglas clave:
- Usar `clamp()` y unidades `vw`/`rem` para tipografía y espaciados fluidos (evita "saltos" bruscos entre breakpoints).
- Probar explícitamente en **368px** (dispositivos Android pequeños tipo Galaxy Fold cerrado / gama baja) como piso mínimo: sin overflow horizontal, botones con área táctil ≥44px, texto de código con `overflow-x: auto`.
- Imágenes y diagramas con `max-width: 100%; height: auto;`.
- Tablas envueltas en `<div class="table-responsive">` (Bootstrap) para scroll horizontal en móvil sin romper el layout.

---

## 7. Modo oscuro / claro

**Implementación recomendada (CSS variables + atributo en `<html>`):**

```html
<html lang="es" data-theme="dark">
```

```css
/* variables.css */
:root[data-theme="dark"] { --bg-base:#0B1220; --text-primary:#E7ECF5; /* ...resto de tokens dark... */ }
:root[data-theme="light"] { --bg-base:#F7F9FC; --text-primary:#111827; /* ...resto de tokens light... */ }
body { background: var(--bg-base); color: var(--text-primary); transition: background-color .3s, color .3s; }
```

```js
// theme-switcher.js
const STORAGE_KEY = 'sqlguia-theme';
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
    icon.className = `theme-toggle-icon bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`;
  });
}
(function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
})();
document.addEventListener('click', (e) => {
  if (e.target.closest('#theme-toggle-btn')) {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }
});
```

- El botón de cambio de tema vive en el `header.html` (partial), visible tanto en desktop como en el offcanvas mobile.
- Prism.js debe tener **dos temas cargados condicionalmente** (o dos hojas CSS con `disabled` toggle) para que los bloques de código también cambien de tema.

---

## 8. Header / Navbar: dropdowns (desktop) + hamburguesa funcional (mobile)

**Estructura recomendada (Bootstrap 5 navbar + offcanvas):**

- Desktop (≥992px): `navbar-expand-lg` con `<ul class="navbar-nav">` y submenús usando `dropdown` de Bootstrap (`dropdown-toggle`, `dropdown-menu`) — un dropdown por cada Nivel del temario, listando sus temas internos como `dropdown-item`.
- Mobile (<992px): el navbar colapsa mostrando un botón `☰` que abre un **`offcanvas` de Bootstrap** (menú lateral deslizante) en vez del típico `collapse` vertical simple, porque con 12 niveles y varios temas cada uno, un collapse tradicional sería demasiado largo. Dentro del offcanvas, los niveles se listan como un **acordeón** (`accordion` de Bootstrap) para que cada nivel se expanda/colapse y no sea una lista infinita.
- El logo/nombre de la marca a la izquierda, y a la derecha: buscador (ícono lupa, opcional), botón de tema (sol/luna) y el botón hamburguesa (solo visible en mobile).

**Ejemplo de estructura (resumen):**
```html
<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">SQL Server · De Cero a Experto</a>
    <button class="btn theme-toggle" id="theme-toggle-btn"><i class="bi bi-sun theme-toggle-icon"></i></button>
    <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">☰</button>

    <!-- Menú desktop -->
    <div class="collapse navbar-collapse d-none d-lg-flex">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nivel 1 · Fundamentos</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/temas/nivel-1-fundamentos/01-que-es-una-base-de-datos.html">¿Qué es una base de datos?</a></li>
            <!-- ...más items... -->
          </ul>
        </li>
        <!-- ...un dropdown por cada nivel... -->
        <li class="nav-item"><a class="nav-link" href="/recursos.html">Recursos</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Offcanvas mobile -->
<div class="offcanvas offcanvas-end" id="mobileMenu">
  <div class="offcanvas-body">
    <div class="accordion" id="mobileAccordion">
      <!-- un accordion-item por nivel, con links dentro -->
    </div>
  </div>
</div>
```

- `navbar.js` debe: (1) marcar el link activo, (2) cerrar el offcanvas al hacer click en un link (mejor UX en mobile), (3) manejar el foco por accesibilidad (trap focus dentro del offcanvas mientras está abierto).

---

## 9. Componentes reutilizables (definir clases una vez, usar en todos los temas)

| Componente | Descripción |
|---|---|
| `.code-block` | `<pre><code>` con Prism.js, etiqueta del lenguaje arriba (SQL/PHP/JS/etc.), botón "Copiar" flotante |
| `.callout` (variantes `.callout-tip`, `.callout-warning`, `.callout-danger`, `.callout-note`) | Cajas de nota tipo "💡 Tip", "⚠️ Cuidado", "🚫 Error común" |
| `.table-responsive` + `.table-guide` | Tablas comparativas (tipos de datos, operadores, funciones) con estilo propio sobre Bootstrap |
| `.concept-card` | Tarjeta con ícono + título + definición corta (para grids de conceptos) |
| `.comparison-tabs` | Tabs (Bootstrap `nav-tabs`) para comparar SQL Server vs MySQL vs PostgreSQL en sintaxis, cuando aplique |
| `.diagram-box` | Contenedor para diagramas SVG/Mermaid (ER, flujos de transacciones, arquitectura cliente-servidor) |
| `.progress-toc` | Sidebar de tabla de contenidos con scrollspy (JS resalta el `<h2>` visible) |
| `.prev-next-nav` | Navegación "← Tema anterior / Tema siguiente →" al final de cada página |
| `.resource-card` | Tarjeta para la sección de recursos (logo/ícono, nombre, descripción corta, badge "Gratis", botón "Visitar") |
| `.quiz-mini` (opcional) | Mini-preguntas de autoevaluación al final de cada tema (sin backend, validación con JS) |

---

## 10. Sección de recursos gratuitos (`recursos.html`)

Organizar en categorías con `.resource-card`. Sugerencias de contenido (verificar vigencia de enlaces al momento de construir, ya que los recursos web cambian):

**Documentación oficial**
- Microsoft Learn – SQL Server (learn.microsoft.com)
- Documentación oficial de Transact-SQL (docs de Microsoft)

**Cursos gratuitos**
- freeCodeCamp – cursos de SQL en YouTube
- Microsoft Learn – rutas de aprendizaje gratuitas de SQL Server / Azure Data
- Khan Academy / Codecademy (secciones gratuitas de SQL)
- Canales de YouTube reconocidos de SQL Server en español

**Práctica interactiva**
- SQLZoo
- HackerRank (track de SQL)
- LeetCode (sección Database)
- Mode Analytics SQL Tutorial
- DB Fiddle / SQL Fiddle (para probar queries en el navegador)

**Bases de datos de ejemplo para practicar**
- AdventureWorks (Microsoft, base de datos de ejemplo oficial para SQL Server)
- Northwind (clásica base de ejemplo)
- WideWorldImporters (Microsoft)

**Herramientas y entornos locales**
- SQL Server Express (edición gratuita)
- SSMS (SQL Server Management Studio)
- Azure Data Studio
- Laragon, XAMPP, Docker (para levantar entornos backend de prueba)
- dbdiagram.io (para diagramar modelos ER)

**Comunidades**
- Stack Overflow (etiqueta `sql-server`)
- Reddit r/SQLServer, r/SQL
- Foros en español de comunidades de bases de datos

> Nota para opencode: al construir la página, buscar y verificar las URLs actuales de cada recurso antes de publicarlas (algunas cambian de dominio con el tiempo), y presentarlas con `.resource-card` agrupadas por categoría con íconos.

---

## 11. Temario completo (contenido de la guía, de cero a experto)

### Nivel 1 — Fundamentos
1. ¿Qué es una base de datos? Tipos (relacionales vs no relacionales)
2. Instalación de SQL Server (Express/Developer)
3. SSMS y Azure Data Studio: instalación y primeros pasos
4. Arquitectura cliente-servidor y motores de base de datos

### Nivel 2 — SQL Básico
1. DDL: `CREATE`, `ALTER`, `DROP` (bases de datos, tablas)
2. DML: `INSERT`, `UPDATE`, `DELETE`
3. DQL: `SELECT`, `WHERE`, `ORDER BY`, `DISTINCT`, `TOP`
4. Tipos de datos (numéricos, texto, fecha/hora, `NULL`)
5. Operadores y funciones básicas (`LIKE`, `IN`, `BETWEEN`, funciones de texto/fecha)

### Nivel 3 — Consultas intermedias
1. `JOIN`s: `INNER`, `LEFT`, `RIGHT`, `FULL`, `CROSS`, self-join
2. Subconsultas (anidadas, correlacionadas)
3. Funciones agregadas y `GROUP BY` / `HAVING`
4. Vistas (`VIEW`)
5. `UNION`, `EXCEPT`, `INTERSECT`

### Nivel 4 — Diseño de bases de datos
1. Modelado entidad-relación (diagramas ER)
2. Normalización (1FN, 2FN, 3FN, BCNF)
3. Claves primarias, foráneas, integridad referencial
4. Índices básicos (clustered / non-clustered)

### Nivel 5 — Programación T-SQL
1. Variables, `IF/ELSE`, `WHILE`, control de flujo
2. Procedimientos almacenados (`CREATE PROCEDURE`)
3. Funciones definidas por el usuario (escalares y de tabla)
4. Triggers (`AFTER`, `INSTEAD OF`)
5. Cursores
6. Manejo de errores (`TRY/CATCH`, `THROW`, `RAISERROR`)

### Nivel 6 — Transacciones y concurrencia
1. ACID y transacciones (`BEGIN TRAN`, `COMMIT`, `ROLLBACK`)
2. Niveles de aislamiento
3. Bloqueos y deadlocks

### Nivel 7 — Seguridad
1. Logins, usuarios y roles
2. Permisos: `GRANT`, `DENY`, `REVOKE`
3. Encriptación básica de datos sensibles

### Nivel 8 — Optimización y rendimiento
1. Índices avanzados (incluidos, filtrados, columnstore)
2. Planes de ejecución
3. Estadísticas y ajuste de consultas (query tuning)
4. Buenas prácticas de rendimiento

### Nivel 9 — Administración
1. Backup y restore
2. Mantenimiento (índices, estadísticas, integridad)
3. SQL Server Agent (jobs programados)
4. Replicación básica

### Nivel 10 — Integración con backend
1. Conexión desde PHP (PDO / sqlsrv)
2. Conexión desde Node.js (mssql / tedious)
3. Conexión desde Python (pyodbc)
4. Conexión desde .NET y Java (JDBC)
5. ORMs y cadenas de conexión (connection strings)
6. Entornos locales de prueba: Laragon, XAMPP, Docker, variables de entorno

### Nivel 11 — Avanzado / Experto
1. CTEs recursivos
2. Funciones de ventana (`OVER`, `PARTITION BY`, `ROW_NUMBER`, `RANK`)
3. JSON en SQL Server
4. Particionamiento de tablas
5. In-Memory OLTP
6. SQL dinámico (`sp_executesql`)
7. Alta disponibilidad (Always On, básico conceptual)

### Nivel 12 — Cierre / Proyecto final
1. Buenas prácticas generales (checklist de código limpio en T-SQL)
2. Checklist de "nivel experto" (autoevaluación)
3. Proyecto integrador: diseñar, poblar y consumir una base de datos desde un backend real

---

## 12. Plan de construcción paso a paso (para opencode)

**Fase 0 — Setup base**
1. Crear estructura de carpetas completa (sección 4).
2. Configurar CDNs (Bootstrap, Bootstrap Icons, AOS, Prism.js, Mermaid opcional) en un `partials/header.html` reutilizable.
3. Crear `variables.css` con todos los tokens (colores dark/light, tipografía, spacing, breakpoints).

**Fase 1 — Layout y theming**
4. Construir `header.html` (navbar + dropdowns + botón tema) y `footer.html`.
5. Implementar `include-partials.js` para inyectarlos en todas las páginas.
6. Implementar `theme-switcher.js` (dark/light con `localStorage`).
7. Probar responsive desde 368px hasta 1440px+ con la navbar (offcanvas + acordeón mobile).

**Fase 2 — Home (`index.html`)**
8. Hero con la "consola SQL animada" (signature element).
9. Sección "Mapa del temario": tarjetas por nivel (12 niveles) enlazando a sus temas.
10. Sección "¿Por qué esta guía?" + sección "Cómo usar la guía" (breve).
11. CTA hacia el primer tema (Nivel 1.1) y hacia `recursos.html`.

**Fase 3 — Sistema de componentes**
12. Crear y documentar (en un archivo interno `componentes-demo.html` de referencia, opcional) todos los componentes de la sección 9: code-block con copiar, callouts, tablas, concept-cards, tabs comparativos, diagram-box, prev/next nav.
13. Integrar Prism.js con dos temas (dark/light) sincronizados al `theme-switcher`.

**Fase 4 — Contenido: Niveles 1 a 4**
14. Construir cada `.html` de Fundamentos, SQL Básico, Consultas intermedias y Diseño de BD, con teoría + ejemplos de código + tablas + al menos un diagrama visual por nivel.

**Fase 5 — Contenido: Niveles 5 a 8**
15. Construir T-SQL, Transacciones, Seguridad y Optimización, con ejemplos de código más extensos y advertencias (`callout-warning`) sobre errores comunes.

**Fase 6 — Contenido: Niveles 9 a 12**
16. Construir Administración, Integración con backend (con ejemplos reales de connection string y snippets en PHP/Node/Python/.NET), Avanzado/Experto y el cierre con proyecto integrador.

**Fase 7 — Recursos y glosario**
17. Construir `recursos.html` con tarjetas categorizadas (sección 10), verificando enlaces vigentes.
18. Construir `glosario.html` con términos clave A-Z y anclas internas.

**Fase 8 — Pulido final**
19. Accesibilidad: contraste AA, foco visible, `alt` en imágenes/diagramas, `aria-label` en botones ícono (tema, hamburguesa, copiar código).
20. SEO básico: `<title>` y `<meta description>` únicos por página, Open Graph, `sitemap.xml` simple, URLs descriptivas (ya cubierto por el nombre de archivo).
21. Performance: lazy-load de imágenes (`loading="lazy"`), minificar CSS/JS si se desea, revisar que las librerías CDN usen versión fija (no `@latest`).
22. QA responsive final en 368px, 576px, 768px, 992px, 1200px, 1440px+ y prueba de dark/light en todas las páginas.
23. Checklist de contenido: cada tema con al menos 1 ejemplo de código, 1 tabla o diagrama, y navegación prev/next funcional.

---

## 13. Accesibilidad y SEO (checklist rápido)

- [ ] Etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<article>`).
- [ ] Contraste de color AA mínimo en ambos modos (dark/light).
- [ ] Navegación por teclado completa (dropdowns, offcanvas, botón de tema).
- [ ] `aria-current="page"` en el link activo del menú.
- [ ] `alt` descriptivo en todos los diagramas/imágenes.
- [ ] Un solo `<h1>` por página; jerarquía de encabezados correcta (`h1 > h2 > h3`).
- [ ] `<meta name="description">` único y relevante por cada tema.
- [ ] Favicon y `theme-color` meta tag.
- [ ] `prefers-reduced-motion` respetado en animaciones AOS/JS.

---

## 14. Resumen de librerías CDN sugeridas (versión fija, no `@latest`)

```html
<!-- Bootstrap 5.3.x -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<!-- AOS -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Prism.js (core + T-SQL + PHP + JS + tema) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>

<!-- Mermaid (diagramas ER/flujo, opcional) -->
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

> Nota: verificar en el momento de construir si existen versiones más recientes estables de cada librería, y fijar siempre un número de versión concreto (nunca `@latest`) para evitar romper el sitio con actualizaciones futuras.

---

## 15. Notas finales para el agente constructor (opencode)

- Priorizar **JS vanilla**, sin frameworks (React/Vue/Angular) ni bundlers — el sitio debe poder abrirse sirviéndolo con cualquier servidor estático local (Live Server, Laragon, XAMPP) sin paso de compilación.
- Mantener consistencia: todo tema nuevo debe reutilizar los mismos componentes de la sección 9, no inventar estilos nuevos por página.
- Cada página de `/temas/` debe incluir, como mínimo: título + breadcrumb, contenido teórico, ≥1 bloque de código T-SQL, ≥1 tabla o diagrama, notas/callouts donde aplique, y navegación prev/next.
- El contenido debe explicarse de forma didáctica y progresiva, asumiendo que el lector no sabe nada al inicio del temario, pero elevando la complejidad y profundidad técnica de forma constante hasta el Nivel 12.
- Idioma: español, con los comandos SQL y nombres técnicos en su forma estándar (en inglés, como corresponde a la sintaxis real de T-SQL).
