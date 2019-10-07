let numberLimiter = prompt('Input a number'),
    finalNumberList = '';

for (let i = 1; i < 101; i++) {
    if (i * i > numberLimiter) {
        break;
    }

    finalNumberList += i + ' ';
}

document.write(finalNumberList);