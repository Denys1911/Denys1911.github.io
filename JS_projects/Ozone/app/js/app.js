"use strict";

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import controlBasketVisibility from './modules/controlBasketVisibility';
import handleClicksOnCatalogAndBtn from './modules/handleClicksOnCatalogAndBtn';
import addCardToBasket from './modules/addCardToBasket';
import filterGoods from './modules/filterGoods';

(async function() {
    const data = await getData();
    renderCards(data);
    renderCatalog();
    handleClicksOnCatalogAndBtn();
    toggleCheckbox();
    controlBasketVisibility();
    addCardToBasket();
    filterGoods();
}());
