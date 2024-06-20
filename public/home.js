import services from './services.js';

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

const servicesContainer = document.querySelector('.itemdichvu');
services.slice(0, 4).forEach((service, index) => {
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

// Event listener for service items
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.addEventListener('click', function() {
        window.location.href = `./deltail.html?index=${index}`;
    });
});

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
const searchResultsContainer = document.querySelector('.item_results');

searchInput.addEventListener('input', performSearch);

function performSearch() {
    const searchValue = searchInput.value.trim().toLowerCase();
    searchResultsContainer.innerHTML = "";

    if (searchValue === "") {
        searchResultsContainer.style.display = 'none';
        return;
    }

    let hasResults = false;

    services.forEach((service, index) => {
        const serviceName = service.name.toLowerCase();

        if (serviceName.includes(searchValue)) {
            const resultItem = document.createElement("div");
            resultItem.classList.add('search-result-item'); 
            const image = document.createElement("img");
            image.src = service.image;
            image.alt = service.name;
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("content");
            const serviceNameElement = document.createElement("h4");
            serviceNameElement.textContent = service.name;
            const servicePriceElement = document.createElement("p");
            servicePriceElement.textContent = service.price;
            contentDiv.appendChild(serviceNameElement);
            contentDiv.appendChild(servicePriceElement);
            resultItem.appendChild(image);
            resultItem.appendChild(contentDiv);
            searchResultsContainer.appendChild(resultItem);
        
            hasResults = true;
            resultItem.addEventListener('click', function() {
                window.location.href = `./deltail.html?index=${index}`;
            });
        }
        
    });

    searchResultsContainer.style.display = hasResults ? 'block' : 'none';
}

// Typed.js animation
new Typed('.multiText', {
    strings: ['Uy Tín', 'Giá Rẻ', 'Chất Lượng', 'Nhanh Chóng'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 800,
});

// Lottie animation for logo
const logoservice = document.getElementById('logoservice');
lottie.loadAnimation({
    container: logoservice,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './fileanimation/logoani.json'
});

const menuIcon = document.querySelector('.menu-icon');
const lienket = document.querySelector('.lienket');
menuIcon.addEventListener('click', () => {
    lienket.classList.toggle('active');
});
