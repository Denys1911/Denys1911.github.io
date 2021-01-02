// Using math.js library to calculate string as a mathematical expression instead of using js eval() function(since
// this function is not safe and has several disadvantages). And write this config to avoid wrong calculation, like
// 0.1 + 0.2 = 0.30000000000000004. You can check documentation here https://mathjs.org/docs/index.html.

math.config({
    number: 'BigNumber',
    precision: 64,
});

const calculator = document.querySelector('.calculator');
const input = document.querySelector('.calculator__input');

calculator.addEventListener('click', handleClickOnCalculator);
input.addEventListener('keypress', handleKeyPressOnInput);

