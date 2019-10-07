const number = prompt('Input a 3-digit number'),
    digit3 = number % 10,
    digit2 = ((number - digit3) / 10) % 10,
    digit1 = (((number - digit3) / 10) - digit2) / 10;

if (digit1 === digit2 && digit2 === digit3) {
    alert('The digits of this number are equal');
} else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    alert('Some of the digits of this number are equal');
} else {
    alert('None of the digits of this number are equal');
}