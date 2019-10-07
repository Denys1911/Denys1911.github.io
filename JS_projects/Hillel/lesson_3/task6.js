const number = prompt('Input a 3-digit number'),
    digit3 = number % 10,
    digit2 = ((number - digit3) / 10) % 10,
    digit1 = (((number - digit3) / 10) - digit2) / 10,
    sum = digit1 + digit2 + digit3,
    multiplication = digit1 * digit2 * digit3;

if (!(sum % 2)) {
    alert('The sum of digits of the number are even');
} else {
    alert('The sum of digits of the number aren\'t even');
}

if (!(sum % 5)) {
    alert('The sum of digits of the number has divider 5');
} else {
    alert('The sum of digits of the number hasn\'t divider 5');
}

if (multiplication > 100) {
    alert('The multiplication of digits of the number is bigger than 100');
} else {
    alert('The multiplication of digits of the number isn\'t bigger than 100');
}