let sum = 0;

for (let i = 30; i < 81; i++) {
    if (!(i % 2)) {
        sum += i;
    }
}

document.write(sum);

