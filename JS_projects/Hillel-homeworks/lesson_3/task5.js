const number = prompt('Input a 2-digit number'),
    digit2 = number % 10,
    digit1 = (number - digit2) / 10;

if (digit1 > digit2) {
    alert('Digit 1 of the number is bigger');
} else if (digit1 < digit2) {
    alert('Digit 2 of the number is bigger');
} else {
    alert('Digits of the number are equal');
}


