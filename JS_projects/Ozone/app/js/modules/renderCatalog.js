export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalog = document.querySelector('.catalog-list');
    const categoriesCollection = new Set();

    cards.forEach(card => categoriesCollection.add(card.dataset.category));
    categoriesCollection.forEach(categoryName => catalog.innerHTML += `<li>${categoryName}</li>`);
}
