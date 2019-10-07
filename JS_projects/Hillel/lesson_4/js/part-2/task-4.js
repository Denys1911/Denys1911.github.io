let number,
    divisorsCounter = 0;

do {
    number = prompt('Input number bigger than 1');
} while (number < 2);

for (let i = 2; i <= number / 2; i++) {
    if (!(number % i)) {
        divisorsCounter++;
        break;
    }
}

if (divisorsCounter) {
    alert(`This number isn't simple`);
} else {
    alert(`This number is simple`);
}