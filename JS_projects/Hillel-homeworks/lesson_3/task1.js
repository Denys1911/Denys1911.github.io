const firstNumber = parseInt(prompt('Type a first number')),
    secondNumber = parseInt(prompt('Type a second number'));

if (firstNumber > secondNumber) {
    alert('First number is bigger');
} else if (firstNumber < secondNumber) {
    alert('Second number is bigger');
} else {
    alert('Numbers are equal');
}