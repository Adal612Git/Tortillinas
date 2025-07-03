const toggleBtn = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

if (navList) {
  navList.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      navList.classList.remove('open');
    }
  });
}
