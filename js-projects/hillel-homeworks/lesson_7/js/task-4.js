function getNumber() {
    let number;

    do {
        number = parseInt(prompt('Type a number'))
    } while (isNaN(number));

    return number;
}

function getSign() {
    const arrOfSigns = ['+', '-', '*', '/', '%', '^'];
    let sign;

    do {
        sign = prompt(`Type a math sign(only ${arrOfSigns.join(', ')})`)
    } while (!arrOfSigns.includes(sign));

    return sign;
}

function doMath(a, sign, b) {
    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        case '^': return a ** b;
    }
}

function showResult(result) {
    alert('Result: ' + result);
}

const firstNumber = getNumber();
const secondNumber = getNumber();
const sign = getSign();

showResult(doMath(firstNumber, sign, secondNumber));