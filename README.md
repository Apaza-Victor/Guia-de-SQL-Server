# SQL Server · De Cero a Experto

Guía web interactiva de teoría y práctica progresiva de **SQL Server**, desde nivel cero hasta nivel experto, incluyendo integración con backends (PHP, Node.js, Python, .NET, Java) y entornos locales de prueba.

🌐 **Sitio en vivo:** [apaza-victor.github.io/Guia-de-SQL-Server](https://apaza-victor.github.io/Guia-de-SQL-Server/)

## Contenido

- **12 niveles** con **54 temas** que cubren toda la curva de aprendizaje
- Desde fundamentos de bases de datos hasta temas avanzados (Always On, In-Memory OLTP, particionamiento)
- Ejemplos de código T-SQL listos para probar
- Diagramas entidad-relación y flujos de transacciones
- Tablas comparativas y notas de buenas prácticas
- Sección de recursos externos gratuitos
- Glosario de términos SQL

## Funcionalidades

| Característica | Detalle |
|---|---|
| 🎨 Tema oscuro/claro | Persiste en `localStorage` |
| 🔍 Búsqueda global | Atajos `Ctrl+K` o `/` — índice de 54+ temas |
| ⌨️ Consola animada | Typewriter SQL en hero con sintaxis coloreada |
| 💡 Tips bar | Barra fija inferior con consejos rotativos (30 s) |
| ⬆️ Volver arriba | Botón flotante animado |
| 📱 Responsive | Mobile-first con menú offcanvas |
| 📋 Copiar código | Botón one-click en todos los bloques Prism |
| 🧭 TOC scrollspy | Resaltado automático del índice lateral |

## Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Framework CSS | Bootstrap 5.3.x (CDN) |
| CSS propio | CSS3 + variables (`:root`) con theming dark/light |
| JavaScript | Vanilla JS (ES6+) |
| Iconos | Bootstrap Icons |
| Animaciones | AOS (Animate On Scroll) + typewriter propio |
| Resaltado de código | Prism.js |
| Fuentes | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |

## Cómo usar

1. Abre el proyecto con **Live Server** (VS Code) o cualquier servidor estático local
2. Navega por los niveles usando el menú superior o el grid del temario en la página principal
3. Cada tema incluye explicación teórica, ejemplos de código y navegación entre temas
4. Usa `Ctrl+K` o `/` para abrir el buscador interno

## Estructura del proyecto

```
/
├── index.html              → Página principal (hero + consola typewriter)
├── recursos.html            → Recursos externos
├── glosario.html            → Glosario de términos
├── acerca.html              → Acerca del proyecto
├── assets/
│   ├── css/                 → 5 hojas de estilo (variables, base, layout, components, responsive)
│   ├── js/                  → 9 scripts vanilla JS
│   └── partials/            → Header y footer reutilizables (cargados vía fetch)
├── temas/
│   ├── nivel-1-fundamentos/ → 4 temas
│   ├── nivel-2-sql-basico/  → 5 temas
│   ├── nivel-3-consultas-intermedias/ → 5 temas
│   ├── nivel-4-diseno-bd/   → 4 temas
│   ├── nivel-5-tsql-programacion/ → 6 temas
│   ├── nivel-6-transacciones/ → 3 temas
│   ├── nivel-7-seguridad/   → 3 temas
│   ├── nivel-8-optimizacion/ → 4 temas
│   ├── nivel-9-administracion/ → 4 temas
│   ├── nivel-10-integracion-backend/ → 6 temas
│   ├── nivel-11-avanzado-experto/ → 7 temas
│   └── nivel-12-proyecto-final/ → 3 temas
└── README.md
```

## Copyright

© 2026 · **Apaza Victor** · SQL Server: De Cero a Experto · Todos los derechos reservados.

Este proyecto es una guía educativa de referencia y aprendizaje. El contenido puede ser utilizado libremente para fines de aprendizaje personal.
