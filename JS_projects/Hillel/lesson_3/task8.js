let number = prompt('Input a 6-digit number'),
    digit6 = number % 10,
    digit5 = Math.floor(number / 10) % 10,
    digit4 = Math.floor(number / 100) % 10,
    digit3 = Math.floor(number / 1000) % 10,
    digit2 = Math.floor(number / 10000) % 10,
    digit1 = Math.floor(number / 100000) % 10;

if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
    alert('This number is specular');
} else {
    alert('This number isn\'t specular');
}