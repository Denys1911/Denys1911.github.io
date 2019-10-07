function getNumber() {
    let number;

    do {
        number = parseInt(prompt('Type a number'))
    } while (isNaN(number));

    return number;
}

function power(a, b) {
    return a ** b;
}

function doFunction(a, b, func) {
    return func(a, b);
}

function showResult(result) {
    alert('Result: ' + result);
}

const firstNumber = getNumber();
const secondNumber = getNumber();

showResult(doFunction(firstNumber, secondNumber, power));