// Lấy thông tin dịch vụ từ file services.js
import services from './services.js';

// Lấy thông tin dịch vụ từ URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = parseInt(urlParams.get('index'));

// Hiển thị thông tin dịch vụ tương ứng
const service = services[index];
document.getElementById('serviceImage').src = service.image;
document.getElementById('serviceName').textContent = service.name;
document.getElementById('servicePrice').textContent = service.price;
document.getElementById('serviceInformation').textContent = service.imformation;
document.getElementById('serviceImage1').src = service.image1;
document.getElementById('giagoc').textContent = service.giagoc;

// Hiển thị các tính năng của dịch vụ

// Lấy phần tử ul có id là serviceFeatures
const featureList = document.getElementById('serviceFeatures');

featureList.innerHTML = '';

service.tinhnang.forEach((feature, index) => {
    // Tạo các phần tử HTML
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const content = document.createElement('p');

    // Gán nội dung cho các phần tử
    title.textContent = feature.title;
    content.textContent = feature.content;

    // Thêm các phần tử vào phần tử li
    li.appendChild(title);
    li.appendChild(content);

    // Thêm phần tử li vào trong featureList
    featureList.appendChild(li);
});

//làm sự kiện hiển thị các liên kết hướng dẫn vào sự kiện ấn vào liên kết đó thì chuyển trang
// Lấy phần tử ul có id là lienkethuongdan
const lienkethuongdan = document.getElementById('lienkethuongdan');

// Xóa bỏ nội dung cũ của lienkethuongdan (nếu có)
lienkethuongdan.innerHTML = '';

// Lặp qua mỗi liên kết hướng dẫn trong mảng lienkethuongdan của dịch vụ
service.lienkethuongdan.forEach((link, index) => {
    // Tạo phần tử li
    const li = document.createElement('li');
    
    // Tạo phần tử a
    const a = document.createElement('a');
    
    // Gán href cho phần tử a
    a.href = link.lienket;
    
    // Gán nội dung cho phần tử a
    a.textContent = link.title;
    
    // Thêm phần tử a vào phần tử li
    li.appendChild(a);
    
    // Thêm phần tử li vào trong lienkethuongdan
    lienkethuongdan.appendChild(li);
});

//back to home
document.getElementById('back').addEventListener('click', () => {
    history.back(); // Navigate back one step in the browser history
});

//hiển thị bảo hành 
const baohanhElement = document.getElementById('baohanh');

baohanhElement.innerHTML = ''; // Xóa nội dung cũ (nếu có)

service.baohanh.forEach((item, index) => {
    // Tạo phần tử mới cho mỗi mục trong mảng
    const listItem = document.createElement('li');
    const content = document.createElement('p');
    content.textContent = item; // Gán nội dung từ mảng vào phần tử p

    listItem.appendChild(content); // Thêm phần tử p vào thẻ li
    baohanhElement.appendChild(listItem); // Thêm thẻ li vào trong thẻ ul
});

/// Hiển thị các feedback của dịch vụ
const feedbackList = document.getElementById('serviceFeedback');

feedbackList.innerHTML = '';
service.imagefeedback.forEach((image, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image;
    
    // Add event listener to each image
    img.addEventListener('click', () => {
        openFullScreen(image);
    });
    
    li.appendChild(img);
    feedbackList.appendChild(li);
});

// Function to open image in full screen
function openFullScreen(imageSrc) {
    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('fullscreen-image');
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}


const btnLienhe = document.getElementById('btnLienHe');
btnLienhe.addEventListener('click', () => {
    const serviceName = document.getElementById('serviceName').textContent;
    const image = document.getElementById('serviceImage').src;
    
    // Chuyển sang trang lienhe.html và truyền tham số tên dịch vụ và ảnh trong URL
    window.location.href = './lienhe.html?service=' + encodeURIComponent(serviceName) + '&image=' + encodeURIComponent(image);
});
document.addEventListener('DOMContentLoaded', () => {
    // Tạo element để hiển thị thông tin liên hệ
    const contactInfo = document.createElement('div');
    contactInfo.style.display = 'none';  // Ẩn element ban đầu
    contactInfo.style.position = 'absolute';
    contactInfo.style.top = '0';
    contactInfo.style.left = '0';
    contactInfo.style.width = '100%';
    contactInfo.style.height = '100vh';
    contactInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';  // Nền bán trong suốt
    contactInfo.style.zIndex = '1000';  // Hiển thị trên các element khác
  
    // Thêm nội dung thông tin liên hệ
    const chonkieulienhe = `
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border-radius: 10px;">
        <div class="contact-info-content">
          <h4>Liên hệ qua:</h4>
          <button onclick="window.open('https://www.messenger.com/t/100016879909136/', '_blank')">Nhắn tin qua Messenger</button>
          <button onclick="window.open('https://zalo.me/0862613348', '_blank')">Nhắn tin qua Zalo</button>
          <button onclick="window.open('tel:0862613348')">Gọi điện trực tiếp</button>
          <button id="closeContactInfo">Đóng</button>
        </div>
      </div>
    `;
  
    // Thêm nội dung vào contactInfo
    contactInfo.innerHTML = chonkieulienhe;
  
    // Thêm phần tử contactInfo vào body của trang web
    document.body.appendChild(contactInfo);
  
    // Thêm sự kiện click cho nút Đóng
    document.getElementById('closeContactInfo').addEventListener('click', () => {
      contactInfo.style.display = 'none';
    });
  
    // Thêm sự kiện click cho nút liên hệ ngay
    const btnlienhengay = document.getElementById('btncontact');
    btnlienhengay.addEventListener('click', () => {
      contactInfo.style.display = 'block';
    });
  });
  