document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const guideList = document.getElementById('guide-list');

    // Fetch and display guides
    fetch('listhuongdan.json')
    .then(response => response.json())
    .then(data => {
        displayGuides(data);

        // Add event listener for search input
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredGuides = data.filter(guide => guide.title.toLowerCase().includes(searchTerm));
            displayGuides(filteredGuides, searchTerm);
        });
    })
    .catch(error => console.error('Error fetching guide data:', error));

// Function to display guides
function displayGuides(guides, searchTerm = '') {
    guideList.innerHTML = ''; // Clear the list
    
    if (guides.length === 0 && searchTerm) {
        // If no guides match the search term, display a message
        const noResultsMessage = document.createElement('li');
        noResultsMessage.textContent = `Không tìm thấy dữ liệu bạn đang tìm kiếm. Lưu ý hãy viết tiếng việt có dấu để có kết quả đúng nhất nhé!`;
        noResultsMessage.style.color = 'red';
        guideList.appendChild(noResultsMessage);
    } else {
        // Display the filtered guides
        guides.forEach(guide => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = guide.link;
            link.textContent = guide.title;
            listItem.appendChild(link);
            guideList.appendChild(listItem);
        });
    }
}
});