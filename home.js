const facebookIcon = document.querySelector('img[name="iconfacebook"]');
const tiktokIcon = document.querySelector('img[name="icontiktok"]');
const zaloIcon = document.querySelector('img[name="iconzalo"]');
// Sự kiện click cho Facebook
facebookIcon.addEventListener('click', function() {
    // chuyen sang trang web facebook
    window.location.href = 'https://www.facebook.com/iamtritoan/';
  });
  
  // Sự kiện click cho TikTok
  tiktokIcon.addEventListener('click', function() {
    // Hiển thị thông tin liên hệ TikTok
    window.location.href = 'https://www.tiktok.com/@iamtritoan';
    
  });

zaloIcon.addEventListener('click', function() {
  window.open('https://zalo.me/0862613348');

});


const services = [
    {
        name: "Zoom one pro",
        image: "./Image/zoom.png",
        price: "99.000vnd / tháng",
        imformation: "Kiểm soát thông tin liên lạc của bạn với giấy phép Zoom One Pro. Mở khóa các công cụ cộng tác nâng cao hơn, các tính năng mới và số phút họp không giới hạn khi bạn chuyển sang Pro.",
        image1: "./Image/zoom.png",
        giagoc: "219.000vnd / tháng",

    },
    {
        name: "Google Meet",
        image: "./Image/new.png",
        price: "80.000vnd / tháng",
        imformation: "Kiểm soát thông tin liên lạc của bạn với giấy phép Zoom One Pro. Mở khóa các công cụ cộng tác nâng cao hơn, các tính năng mới và số phút họp không giới hạn khi bạn chuyển sang Pro.",
        image1: "./Image/zoom.png",
        giagoc: "219.000vnd / tháng",
    },
    {
        name: "Youtube Premium",
        image: "./Image/youtube.png",
        price: "25.000vnd / tháng",
        imformation: "Kiểm soát thông tin liên lạc của bạn với giấy phép Zoom One Pro. Mở khóa các công cụ cộng tác nâng cao hơn, các tính năng mới và số phút họp không giới hạn khi bạn chuyển sang Pro.",
        image1: "./Image/zoom.png",
        giagoc: "219.000vnd / tháng",
    }
];
const servicesContainer = document.querySelector('.itemdichvu');
services.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('item');
    const image = document.createElement('img');
    image.src = service.image;
    image.alt = service.name;
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const serviceName = document.createElement('h4');
    serviceName.textContent = service.name;
    const servicePrice = document.createElement('p');
    servicePrice.textContent = service.price;
    contentDiv.appendChild(serviceName);
    contentDiv.appendChild(servicePrice);
    serviceDiv.appendChild(image);
    serviceDiv.appendChild(contentDiv);
    servicesContainer.appendChild(serviceDiv);
});


// tạo sự kiện ấn vào các item thì xem chi tiết dịch vụ
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.addEventListener('click', function() {
        // chuyển sang trang chi tiết dịch vụ
        window.location.href = `./deltail.html?index=${index}`;
    });
});
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('img[name="search"]');
const searchResultsContainer = document.querySelector('.item_results');
// Sử dụng sự kiện input để gọi hàm performSearch khi người dùng nhập vào ô input
searchInput.addEventListener('input', performSearch);

function performSearch() {
    const searchValue = searchInput.value.trim().toLowerCase(); // Lấy giá trị tìm kiếm và chuyển đổi thành chữ thường
    searchResultsContainer.innerHTML = ""; // Xóa nội dung cũ trong container

    // Kiểm tra xem ô input có rỗng không
    if (searchValue === "") {
        searchResultsContainer.style.display = 'none'; // Ẩn kết quả nếu ô input rỗng
        return; // Kết thúc hàm nếu không có văn bản nhập vào ô input
    }

    // Kiểm tra xem có kết quả tìm kiếm nào hay không
    let hasResults = false;

    // Lặp qua mảng services để tìm kiếm
    services.forEach((service, index) => {
        const serviceName = service.name.toLowerCase(); // Lấy tên dịch vụ và chuyển đổi thành chữ thường

        // Kiểm tra xem tên dịch vụ có chứa từ khóa tìm kiếm không
        if (serviceName.includes(searchValue)) {
            // Tạo phần tử HTML để hiển thị kết quả tìm kiếm
            const resultItem = document.createElement("div");

            // Tạo phần tử hình ảnh
            const image = document.createElement("img");
            image.src = service.image; // Đặt đường dẫn hình ảnh
            image.alt = service.name; // Đặt alt cho hình ảnh

            // Tạo phần tử chứa tên và giá của dịch vụ
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("content");

            const serviceNameElement = document.createElement("h4");
            serviceNameElement.textContent = service.name;

            const servicePriceElement = document.createElement("p");
            servicePriceElement.textContent = service.price;

            // Gắn các phần tử con vào resultItem
            contentDiv.appendChild(serviceNameElement);
            contentDiv.appendChild(servicePriceElement);
            resultItem.appendChild(image);
            resultItem.appendChild(contentDiv);

            // Thêm resultItem vào container
            searchResultsContainer.appendChild(resultItem);

            hasResults = true; // Đặt cờ hiển thị kết quả
            resultItem.addEventListener('click', function() {
              // chuyển sang trang chi tiết dịch vụ
              window.location.href = `./deltail.html?index=${index}`;
          });
        }
    });

    // Nếu có kết quả tìm kiếm, hiển thị kết quả bằng cách thêm lớp 'active'
    if (hasResults) {
        searchResultsContainer.style.display = 'block'; // Hiển thị kết quả
    } else {
        // Ngược lại, ẩn kết quả bằng cách xóa lớp 'active'
        searchResultsContainer.style.display = 'none'; // Ẩn kết quả
    }
}



    var typed = new Typed('.multiText', {
      strings: ['Uy Tín', 'Giá Rẻ','Chất Lượng','Nhanh Chóng'],
      loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 800,
    });


    const logoservice = document.getElementById('logoservice');

    // Load animation
    const animation = lottie.loadAnimation({
        container: logoservice, // Use the logoservice div as the container
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './fileanimation/logoani.json' // Path to your animation data file
    });

    const menuIcon = document.querySelector('.menu-icon');
    const lienket = document.querySelector('.lienket');
  
    menuIcon.addEventListener('click', () => {
      lienket.classList.toggle('active');
    });
    
    
    
    
    