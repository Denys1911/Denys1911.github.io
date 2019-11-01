const calculator = document.querySelector('.calculator');
const input = document.querySelector('.calculator__input');

calculator.addEventListener('click', handleClickOnCalculator);

input.addEventListener('keypress', e => {
    const allowedCharactersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ')', '(', '/', '+', '-', '*'];

    if (!allowedCharactersArr.includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === 'Enter') {
        calculateResult();
    }
});

