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
  if (e.target.closest('.js-theme-toggle')) {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }
});
