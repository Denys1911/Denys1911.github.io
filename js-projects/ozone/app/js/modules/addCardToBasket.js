export default function addCardToBasket() {
    const cards = document.querySelectorAll('.goods .card');
    const basketWrapper = document.querySelector('.basket-wrapper');
    const basketEmpty = document.getElementById('basket-empty');
    const basketCounter = document.querySelector('.counter');
    const basketTotal = document.querySelector('.basket-total span');

    const showData = () => {
        const cardsInBasketAmount = basketWrapper.querySelectorAll('.card').length;
        const cardsPrices = basketWrapper.querySelectorAll('.card-price');
        let sum = 0;

        basketCounter.textContent = String(cardsInBasketAmount);

        cardsPrices.forEach(cardPrice => {
            const price = parseFloat(cardPrice.textContent);
            sum += price;
        });

        basketTotal.textContent = sum;

        if (cardsInBasketAmount) {
            basketEmpty.remove();
        } else {
            basketWrapper.appendChild(basketEmpty);
        }
    };

    cards.forEach(card => {
        const cardBtn = card.querySelector('button');

        cardBtn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            basketWrapper.appendChild(cardClone);
            showData();

            const cardBtnRemove = cardClone.querySelector('.btn');
            cardBtnRemove.textContent = 'Удалить из корзины';

            cardBtnRemove.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });
}
