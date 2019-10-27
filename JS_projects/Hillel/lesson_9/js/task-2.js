const parent = document.querySelector('.wrapper');
const textBlock = createElementWithClassOnPage('div', 'text-block', parent,
    'Click on the button on the right and see what will happen.');
const button = createElementWithClassOnPage('button', 'btn btn-primary', parent,'Just click');

button.addEventListener('click', () => {
    textBlock.classList.toggle('text-color');
});