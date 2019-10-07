const number1 = prompt('Type a first number'),
    number2 = prompt('Type a second number');

if (number1 % number2) {
    alert('Second number isn\'t a divider of the first number');
} else {
    alert('Second number is a divider of the first number');
}

if (number2 % number1) {
    alert('First number isn\'t a divider of the second number');
} else {
    alert('First number is a divider of the second number');
}