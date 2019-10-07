let firstDigit = parseFloat(prompt('Enter the first number')),
    secondDigit = parseFloat(prompt('Enter the second number')),
    sum = firstDigit + secondDigit,
    subtraction = firstDigit - secondDigit,
    multiplication = firstDigit * secondDigit,
    division = firstDigit / secondDigit;

// To avoid something like 0.1 + 0.2 = 0.30000000000000004
sum = parseFloat(sum.toFixed(15));
subtraction = parseFloat(subtraction.toFixed(15));
multiplication = parseFloat(multiplication.toFixed(15));
division = parseFloat(division.toFixed(15));

// to show the result of division by zero as in a standard calculator
if (division === Infinity) {
    division = 'Error! Division by zero';
}

alert('Sum: ' + sum);
alert('Subtraction: ' + subtraction);
alert('Multiplication: ' + multiplication);
alert('Division: ' + division);
