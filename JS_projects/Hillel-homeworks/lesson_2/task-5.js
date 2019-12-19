let initialNumber = prompt('Enter five-digit number');

while(initialNumber.length !== 5) initialNumber = prompt('Enter correct(5-digit) initialNumber!');

const number1 = Math.floor(initialNumber / 10000) % 10,
    number2 = Math.floor(initialNumber / 1000) % 10,
    number3 = Math.floor(initialNumber / 100) % 10,
    number4 = Math.floor(initialNumber / 10) % 10,
    number5 = initialNumber % 10;

alert(number1 + ' ' + number2 + ' ' + number3 + ' ' + number4 + ' ' + number5);

// Another solution with using methods split and join
/*
let number = prompt('Enter five-digit number');

while(number.length !== 5) number = prompt('Enter correct(5-digit) number!');

number = number.split('').join(' ');
alert(number);
*/
