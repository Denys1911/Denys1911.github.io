"use strict";

/// *** CHECKBOX *** ///
function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach((element) => {
        element.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}
/// *** CHECKBOX *** ///

/// *** CART *** ///
function cart() {
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
/// *** CART *** ///

/// *** work with a CART *** ///
function addCard() {
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
/// *** work with a CART *** ///

/// *** STOCK FILTER *** ///
function stockFilter() {
    const checkbox = document.getElementById('discount-checkbox'),
        cards = document.querySelectorAll('.goods .card'),
        minInput = document.getElementById('min'),
        maxInput = document.getElementById('max'),
        searchInput = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');
// Card sale filter
    checkbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (checkbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = '';
            }
        });
    });
// Price filter
    function filterPrice() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent);
            if ((minInput.value && minInput.value > price) || (maxInput.value && maxInput.value < price)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    }

    minInput.addEventListener('change', filterPrice);
    maxInput.addEventListener('change', filterPrice);
// Search filter
    searchBtn.addEventListener('click', searchFilter);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchFilter();
        }
    });

    function searchFilter() {
        const searchText = new RegExp(searchInput.value.trim(), 'i');
        cards.forEach((card) => {
            const cardText = card.querySelector('.card-title');
            if (!searchText.test(cardText.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    }
}
/// *** STOCK FILTER *** ///

toggleCheckbox();
cart();
addCard();
stockFilter();