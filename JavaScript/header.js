const menuIcon = document.querySelector('.menu-icon');
const lienket = document.querySelector('.lienket');

menuIcon.addEventListener('click', () => {
  lienket.classList.toggle('active');
  console.log('click');
});