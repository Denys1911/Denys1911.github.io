'use strict';

function createItemsInCategoryList(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        element.innerHTML += `
            <li class="list-group-item" data-key="${arr[i].key}">
                ${arr[i].name}
            </li>
        `;
    }
}

function createProductsInProductsList(arr, key, element) {
    const products = arr[key];

    for (let i = 0; i < products.length; i++) {
        element.innerHTML += `
            <li class="list-group-item" data-key="${key}" data-id="${products[i].id}">
                ${products[i].name}
            </li>
        `;
    }
}

function createProductInformation(arr, element) {
    element.innerHTML += `
        <div>
            <span class="text-decoration">Name:</span>
            ${arr.name}
        </div>
        <div>
            <span class="text-decoration">Description:</span>
            ${arr.description ? arr.description : "Ups... We haven't description for this product yet"}
        </div>
        <div>
            <span class="text-decoration">Price:</span>
            ${arr.price}$
        </div>
    `;
}

function addClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.add(className));
}

function removeClassFromElements(className, ...elements) {
    elements.forEach(element => element.classList.remove(className));
}

function clearElementsHtml(...elements) {
    elements.forEach(element => element.innerHTML = '');
}

function getDatasetValue(element, name) {
    return element.dataset[name];
}

function getSelectedProductDetails(arr, key, index) {
    return arr[key].find(element => element.id === index);
}

function setDatasetValue(element, name, value) {
    element.dataset[name] = value;
}

function validateForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];

        if (element.type === 'number' && element.value < 1) {
            return false;
        }

        if (element.hasAttribute('required') && !element.value) {
            return false;
        }
    }

    return true;
}

function showErrorMessageOnPage(element) {
    element.innerHTML = `
        <div class="error-message">Please, fill all required fields correctly</div>
    `;
}

function createObjectWithFormFieldsValues(form) {
    let obj = {};

    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];

        if (element.type === 'button' || element.type === 'reset') {
            continue;
        }

        if (element.value) {
            obj[element.name] = element.value;
        }
    }

    return obj;
}

function showCompletedFormInformationOnPage(obj, element) {
    for (let key in obj) {
        element.innerHTML += `
            <div>
                <span class="text-decoration">${key}: </span>
                ${obj[key]}.
            </div>
        `;
    }
}

function getAmountOfProduct(element) {
    return element.value;
}

function getPrice(productPrice, amountOfProduct, discountLimit, discountValue) {
    const price = productPrice * amountOfProduct;
    let finalPrice;

    if (price > discountLimit) {
        finalPrice = price * (1 - discountValue);
    }

    return {price, finalPrice}
}

function showDiscountString(discountValue) {
    return discountValue * 100;
}

function showProductNameAndOrderPriceOnPage(name, {price, finalPrice}, element) {
    element.innerHTML += `
        <div class="product-name-block">
            <span class="text-decoration">Product name: </span>
            ${name}
        </div>
        <div>
            <span class="text-decoration">Order price: </span>
            ${price}$
        </div>
    `;

    if (finalPrice) {
        element.innerHTML += `
            <div>You have a discount ${showDiscountString(DISCOUNT_VALUE)}%</div>
            <div>
                <span class="text-decoration">Your final order price is:</span>
                ${finalPrice}$
            </div>
        `;
    }
}

function handleClickOnCategoryList(e) {
    if (!e.target.classList.contains('list-group-item')) {
        return;
    }

    addClassForElements('hide', showFormButton, formForOrder, orderBlock);
    clearElementsHtml(productsList, productDetails);
    const categoryKey = getDatasetValue(e.target, 'key');
    createProductsInProductsList(productsData, categoryKey, productsList);
}

function handleClickOnProductsList(e) {
    if (!e.target.classList.contains('list-group-item')) {
        return;
    }

    addClassForElements('hide', formForOrder, orderBlock);
    clearElementsHtml(productDetails);
    removeClassFromElements('hide', showFormButton);
    const productKey = getDatasetValue(e.target, 'key');
    let productId = getDatasetValue(e.target, 'id');
    productId = parseInt(productId);
    setDatasetValue(productDetails, 'key', productKey);
    setDatasetValue(productDetails, 'id', productId);
    const selectedProductDetails = getSelectedProductDetails(productsData, productKey, productId);
    createProductInformation(selectedProductDetails, productDetails);
}

function handleClickOnShowFormButton() {
    removeClassFromElements('hide', formForOrder);
}

function handleClickOnSendFormButton(e) {
    removeClassFromElements('hide', orderBlock);
    addClassForElements('hide', confirmOrderButton);
    clearElementsHtml(orderInformation);

    if (!validateForm(formForOrder)) {
        showErrorMessageOnPage(orderInformation);
        return;
    }

    removeClassFromElements('hide', confirmOrderButton);
    const formInformationObj = createObjectWithFormFieldsValues(formForOrder);
    showCompletedFormInformationOnPage(formInformationObj, orderInformation);
    const productKey = getDatasetValue(productDetails, 'key');
    let productId = getDatasetValue(productDetails, 'id');
    productId = parseInt(productId);
    const selectedProductDetails = getSelectedProductDetails(productsData, productKey, productId);
    const productPrice = selectedProductDetails.price;
    const productName = selectedProductDetails.name;
    const amountOfProduct = getAmountOfProduct(formForOrder.elements.Amount);
    const price = getPrice(productPrice, amountOfProduct, DISCOUNT_LIMIT, DISCOUNT_VALUE);
    showProductNameAndOrderPriceOnPage(productName, price, orderInformation);
}