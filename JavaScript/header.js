const menuIcon = document.querySelector('.menu-icon');
const lienket = document.querySelector('.lienket');

menuIcon.addEventListener('click', () => {
  lienket.classList.toggle('active');
  console.log('click');
});

// chuyển về home khi ấn vào logo 
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  //chuyển về trang chủ
  window.location.href = 'home.html';
}
);