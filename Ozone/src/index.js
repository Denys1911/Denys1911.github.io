"use strict";

import getData from "./modules/getData";
import renderCards from "./modules/renderCards";
import renderCatalog from "./modules/renderCatalog";
import toggleCheckbox from "./modules/toggleCheckbox";
import cart from "./modules/cart";
import addCard from "./modules/addCard";
import stockFilter from "./modules/stockFilter";

(async function() {
    const data = await getData();
    renderCards(data);
    renderCatalog();
    toggleCheckbox();
    cart();
    addCard();
    stockFilter();
}());
