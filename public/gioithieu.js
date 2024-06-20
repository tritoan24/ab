
const facebookIcon = document.querySelector('img[name="iconfacebook"]');
const tiktokIcon = document.querySelector('img[name="icontiktok"]');
const zaloIcon = document.querySelector('img[name="iconzalo"]');

facebookIcon.addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/iamtritoan/';
});

tiktokIcon.addEventListener('click', function() {
    window.location.href = 'https://www.tiktok.com/@iamtritoan';
});

zaloIcon.addEventListener('click', function() {
    window.open('https://zalo.me/0862613348');
});