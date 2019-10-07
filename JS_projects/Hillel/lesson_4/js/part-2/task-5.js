const number = parseInt(prompt('Input number'));
let degree;

for (let i = 0; ; i++) {
    let pow = Math.pow(3, i);

    if (pow >= number) {
        if (pow === number) {
            degree = i;
        }

        break;
    }
}

if (degree !== undefined) {
    alert(`${number} can be presented as 3 to the power of ${degree}`);
} else {
    alert(`${number} can't be presented as 3 in some degree`);
}