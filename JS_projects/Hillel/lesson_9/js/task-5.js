const parent = document.querySelector('.wrapper');
const randomNumber = getRandomNumberInRange(1, 9);
const image = createElementWithClassOnPage('img', 'image', parent);
image.setAttribute('src', `./images/picture-${randomNumber}.png`);