export default function handleClicksOnCatalogAndBtn() {
    const cards = document.querySelectorAll('.goods .card');
    const catalog = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrapper = document.querySelector('.catalog');

    const handleClickOnCatalogBtn = () => catalogWrapper.classList.toggle('hide-catalog');

    const handleClickOnCatalog = e => {
        const targetedElement = e.target;

        if (targetedElement.tagName !== 'LI') {
            return;
        }

        const catalogItems = catalog.querySelectorAll('li');
        const targetedElementText = targetedElement.textContent;

        catalogItems.forEach(item => item.classList.remove('active'));
        targetedElement.classList.add('active');

        cards.forEach(card => {
            if (targetedElementText === 'Все товары' || targetedElementText === card.dataset.category) {
                card.parentNode.style.display = '';
            } else {
                card.parentNode.style.display = 'none';
            }
        });
    };

    catalogBtn.addEventListener('click', handleClickOnCatalogBtn);
    catalog.addEventListener('click', handleClickOnCatalog);
}
