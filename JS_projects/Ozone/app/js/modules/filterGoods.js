export default function filterGoods() {
    const checkbox = document.getElementById('discount-checkbox');
    const cards = document.querySelectorAll('.goods .card');
    const cardsWrapper = document.querySelector('.goods');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const searchInput = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');

    const performFiltration = () => {
        cards.forEach(card => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);

            if ((minInput.value && minInput.value > price) || (maxInput.value && maxInput.value < price)) {
                card.parentNode.remove();
            } else if (checkbox.checked && !card.querySelector('.card-sale')) {
                card.parentNode.remove();
            } else {
                cardsWrapper.appendChild(card.parentNode);
            }
        });
    };

    const searchGoods = () => {
        const searchText = new RegExp(searchInput.value.trim(), 'i');

        cards.forEach(card => {
            const cardText = card.querySelector('.card-title');

            if (!searchText.test(cardText.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    };

    checkbox.addEventListener('click', performFiltration);
    minInput.addEventListener('change', performFiltration);
    maxInput.addEventListener('change', performFiltration);
    searchBtn.addEventListener('click', searchGoods);

    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            searchGoods();
        }
    });
}
