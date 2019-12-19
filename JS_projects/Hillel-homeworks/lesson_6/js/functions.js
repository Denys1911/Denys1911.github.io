function showCategories(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log((i+1) + ' - ' + arr[i].name);
    }
}

function getNumberWithLimitation(limit, name) {
    let number;
    do {
        number = parseInt(prompt(name));
    } while(isNaN(number) || number < 1 || number > limit);
    return number;
}

function getProductsByCategoryNumber(number, arr) {
    const categoryName = categories[number - 1].key;
    return arr[categoryName];
}

function showProductsInCategory(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log((i+1) + ' - Name: ' + products[i].name + '\nPrice: ' + products[i].price);
    }
}

function getPrice(arr, productNumber, productsAmount) {
    const selectedProduct = arr[productNumber - 1];
    const price = selectedProduct.price * productsAmount;
    let finalPrice;

    if (price > DISCOUNT_LIMIT) {
        finalPrice = price * (1 - DISCOUNT_VALUE);
    }

    return {price, finalPrice}
}

function showDiscountString() {
    return DISCOUNT_VALUE * 100;
}

function showPrice({price, finalPrice}) {
    console.log('Price: ' + price + '$');

    if (finalPrice) {
        console.log(`You have a discount ${showDiscountString()}%`);
        console.log('Your final price is: ' + finalPrice + '$');
    }
}