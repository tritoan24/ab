import services from './services.js';

document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.querySelector('.itemdichvu');

    services.forEach((service, index) => {
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

        // Thêm sự kiện click sau khi phần tử được thêm vào DOM
        serviceDiv.addEventListener('click', function() {
            window.location.href = `./deltail.html?index=${index}`;
        });
    });
});
