export default function addCard() {
    const cards = document.querySelectorAll('.goods .card'),
        basketWrapper = document.querySelector('.basket-wrapper'),
        basketEmpty = document.getElementById('basket-empty'),
        basketCounter = document.querySelector('.counter'),
        basketTotal = document.querySelector('.basket-total span');

    cards.forEach((card) => {
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

    function showData() {
        const basketCardsNumber = basketWrapper.querySelectorAll('.card'),
            cardsPrice = basketWrapper.querySelectorAll('.card-price');
        let sum = 0;

        basketCounter.textContent = basketCardsNumber.length;

        cardsPrice.forEach((cardPrice) => {
            const price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        basketTotal.textContent = sum;

        if (basketCardsNumber.length !== 0) {
            basketEmpty.remove();
        } else {
            basketWrapper.appendChild(basketEmpty);
        }
    }
}