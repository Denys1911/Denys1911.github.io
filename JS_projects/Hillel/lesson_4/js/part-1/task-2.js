let str = '';

for (let i = 10; i < 21; i++) {
    if (i === 20) {
        str += i * i + '.';
        continue;
    }

    str += i * i + ', ';
}

document.write(str);