export default function cart() {
    const btnCart = document.getElementById('cart'),
        modalCart = document.querySelector('.cart'),
        btnCloseCart = document.querySelector('.cart-close');

    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    btnCloseCart.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}