export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        catalogWrapper = document.querySelector('.catalog'),
        category = new Set();

    cards.forEach((card) => {
        category.add(card.dataset.category);
    });

    category.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    catalogBtn.addEventListener('click', (e) => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }
        
        const listLi = document.querySelectorAll('.catalog-list li');

        listLi.forEach(li => {
            li.addEventListener('click', function() {
                listLi.forEach(li => li.classList.remove('active'));
                li.classList.add('active');

                cards.forEach((card) => {
                    if (li.textContent === 'Все товары' || li.textContent === card.dataset.category) {
                        card.parentNode.style.display = '';
                    } else {
                        card.parentNode.style.display = 'none';
                    }
                });
            });
        });
    });
}