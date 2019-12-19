let str = '';

for (let i = 100; i < 201; i++) {
    if (!(i % 3)) {
        str += i + ' ';
    }
}

document.write(str);