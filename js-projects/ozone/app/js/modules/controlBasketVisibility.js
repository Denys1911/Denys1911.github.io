export default function controlBasketVisibility() {
    const basketModalWindow = document.querySelector('.basket');
    const openBasketBtn = document.getElementById('basket');
    const closeBasketBtn = document.querySelector('.basket-close');

    openBasketBtn.addEventListener('click', () => {
        basketModalWindow.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBasketBtn.addEventListener('click', () => {
        basketModalWindow.style.display = 'none';
        document.body.style.overflow = '';
    });
}
