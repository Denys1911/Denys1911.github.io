'use strict';

const DISCOUNT_LIMIT = 10000;
const DISCOUNT_VALUE = 0.2;
const categoryList = document.querySelector('.categories-list');
const productsList = document.querySelector('.products-list');
const productDetails = document.querySelector('.product-details');
const showFormButton = document.querySelector('.show-form-button');
const sendFormButton = document.querySelector('.send-form-button');
const confirmOrderButton = document.querySelector('.confirm-order-button');
const formForOrder = document.querySelector('.form-for-order');
const orderBlock = document.querySelector('.order-block');
const orderInformation = document.querySelector('.order-information');

createItemsInCategoryList(categories, categoryList);

categoryList.addEventListener('click', handleClickOnCategoryList);
productsList.addEventListener('click', handleClickOnProductsList);
showFormButton.addEventListener('click', handleClickOnShowFormButton);
sendFormButton.addEventListener('click', handleClickOnSendFormButton);

