export default function stockFilter() {
    const checkbox = document.getElementById('discount-checkbox'),
        cards = document.querySelectorAll('.goods .card'),
        cardsWrapper = document.querySelector('.goods'),
        minInput = document.getElementById('min'),
        maxInput = document.getElementById('max'),
        searchInput = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    // Filter function for sale and price
    function filter() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent);
            if ((minInput.value && minInput.value > price) || (maxInput.value && maxInput.value < price)) {
                card.parentNode.remove();
            } else if (checkbox.checked && !card.querySelector('.card-sale')) {
                card.parentNode.remove();
            } else {
                cardsWrapper.appendChild(card.parentNode);
            }
        });
    }
    // Card sale 
    checkbox.addEventListener('click', filter);
    // Price 
    minInput.addEventListener('change', filter);
    maxInput.addEventListener('change', filter);
    // Search filter
    searchBtn.addEventListener('click', searchFilter);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchFilter();
        }
    });

    function searchFilter() {
        const searchText = new RegExp(searchInput.value.trim(), 'i');
        cards.forEach((card) => {
            const cardText = card.querySelector('.card-title');
            if (!searchText.test(cardText.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    }
}