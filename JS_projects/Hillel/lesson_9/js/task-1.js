const parent = document.querySelector('.wrapper');
const input = createElementWithClassOnPage('input', 'form-control col-6', parent);
const informationBlock = createElementWithClassOnPage('div', 'information-block hide',
    parent, 'Some important information');

input.addEventListener('focus', () => {
    informationBlock.classList.remove('hide');
});

input.addEventListener('blur', () => {
    informationBlock.classList.add('hide');
});