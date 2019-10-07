export default function basket() {
    const btnBasket = document.getElementById('basket'),
        modalBasket = document.querySelector('.basket'),
        btnCloseBasket = document.querySelector('.basket-close');

    btnBasket.addEventListener('click', () => {
        modalBasket.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    btnCloseBasket.addEventListener('click', () => {
        modalBasket.style.display = 'none';
        document.body.style.overflow = '';
    });
}