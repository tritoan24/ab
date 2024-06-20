
const cursor = document.querySelector('.cursor');
let timeout; // Biến timeout

document.addEventListener('mousemove', e => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    function mouseStopped() {
        cursor.style.display = 'none';
    }

    clearTimeout(timeout); // Xóa timeout cũ
    timeout = setTimeout(mouseStopped, 1000); // Tạo timeout mới
});

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});
