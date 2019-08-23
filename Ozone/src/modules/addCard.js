export default function addCard() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        cartCounter = document.querySelector('.counter'),
        cartTotal = document.querySelector('.cart-total span');

    cards.forEach((card) => {
        const cardBtn = card.querySelector('button');
        cardBtn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const cardBtnRemove = cardClone.querySelector('.btn');
            cardBtnRemove.textContent = 'Удалить из корзины';
            cardBtnRemove.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cartCardsNumber = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price');
        let sum = 0;

        cartCounter.textContent = cartCardsNumber.length;

        cardsPrice.forEach((cardPrice) => {
            const price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cartTotal.textContent = sum;

        if (cartCardsNumber.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}