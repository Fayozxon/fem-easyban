// Header navigation menu
const headerNav = document.getElementById('headerNav'),
      navButton = document.getElementById('navButton'),
      overlay = document.getElementById('overlay');

navButton.addEventListener('click', () => {
    headerNav.classList.toggle('open');
    overlay.classList.toggle('open');
    navButton.classList.toggle('open');
})