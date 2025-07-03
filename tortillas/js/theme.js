/**
 * Initialize dark/light theme toggle.
 * Applies prefers-color-scheme and stores preference in localStorage.
 * @module theme
 */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  if (!toggle) return;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  toggle.checked = theme === 'dark';
  if (label) label.textContent = theme === 'dark' ? 'Modo d\u00eda' : 'Modo noche';
  toggle.addEventListener('change', () => {
    const newTheme = toggle.checked ? 'dark' : 'light';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    if (label) label.textContent = newTheme === 'dark' ? 'Modo d\u00eda' : 'Modo noche';
  });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
