let firstDigit = parseFloat(prompt('Enter the first number')),
    secondDigit = parseFloat(prompt('Enter the second number')),
    thirdDigit = parseFloat(prompt('Enter the third number')),
    average = (firstDigit + secondDigit + thirdDigit) / 3;

// To avoid something like 0.1 + 0.2 = 0.30000000000000004
average = parseFloat(average.toFixed(15));

alert('Average: ' + average);