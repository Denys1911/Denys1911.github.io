const number = prompt('Input a number'),
    lastDigit = number % 10;

if (lastDigit % 2) {
    alert(`The last digit of the number is: ${lastDigit}, and it\'s odd`);
} else {
    alert(`The last digit of the number is: ${lastDigit}, and it\'s even`);
}