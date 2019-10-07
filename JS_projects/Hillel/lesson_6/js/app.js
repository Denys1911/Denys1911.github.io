const DISCOUNT_LIMIT = 10000;
const DISCOUNT_VALUE = 0.2;

showCategories(categories);

const categoryNumber = getNumberWithLimitation(categories.length,
    `Enter a category number(from 1 to ${categories.length})`);
const products = getProductsByCategoryNumber(categoryNumber, productsData);

showProductsInCategory(products);

const productNumber = getNumberWithLimitation(products.length,
    `Enter a product number(from 1 to ${products.length})`);
const productsAmount = getNumberWithLimitation(Infinity,
    'Enter a product amount');
const prices = getPrice(products, productNumber, productsAmount);

showPrice(prices);
