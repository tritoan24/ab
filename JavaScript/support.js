const animationData = './fileanimation/support.json';

// Khởi tạo hoạt ảnh Lottie
const anim = lottie.loadAnimation({
    container: document.getElementById('animation'), // ID của phần tử chứa hoạt ảnh
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData // Đường dẫn đến tệp JSON của hoạt ảnh
});