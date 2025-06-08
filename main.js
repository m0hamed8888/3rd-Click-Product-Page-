const toggleMenu = () => document.body.classList.toggle("open");
function hideDropdowns() {
  if (window.innerWidth <= 500) {
const dropdowns = document.querySelector('.dropdowns');
dropdowns.style.visibility = 'hidden';
dropdowns.style.opacity = '0';
  }
}
function showDropdowns() {
const dropdowns = document.querySelector('.dropdowns');
dropdowns.style.visibility = 'visible';
dropdowns.style.opacity = '1';
}