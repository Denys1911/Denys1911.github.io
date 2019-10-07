let number,
    allDivisors = '',
    evenDivisorsCounter = 0,
    evenDivisorsSum = 0;

do {
    number = prompt('Type a natural number');
} while (number < 1);

for (let i = 2; i <= number / 2; i++) {
    if (number % i) {
        continue;
    }

    allDivisors += i + ' ';

    if (!(i % 2)) {
        evenDivisorsCounter++;
        evenDivisorsSum += i;
    }
}

document.write(`
    Divisors of the number ${number} are: ${allDivisors}. <br> 
    Amount of even divisors is: ${evenDivisorsCounter}. <br>
    The sum of even divisors is: ${evenDivisorsSum}.
`);