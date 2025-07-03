/**
 * Initialize dark/light theme toggle.
 * Applies prefers-color-scheme and stores preference in localStorage.
 * @module theme
 */
export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  toggle.checked = theme === 'dark';
  toggle.addEventListener('change', () => {
    const newTheme = toggle.checked ? 'dark' : 'light';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
