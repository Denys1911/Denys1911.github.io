"use strict";

import getData from "./modules/getData";
import renderCards from "./modules/renderCards";
import renderCatalog from "./modules/renderCatalog";
import toggleCheckbox from "./modules/toggleCheckbox";
import basket from "./modules/basket";
import addCard from "./modules/addCard";
import stockFilter from "./modules/stockFilter";

(async function() {
    const data = await getData();
    renderCards(data);
    renderCatalog();
    toggleCheckbox();
    basket();
    addCard();
    stockFilter();
}());
