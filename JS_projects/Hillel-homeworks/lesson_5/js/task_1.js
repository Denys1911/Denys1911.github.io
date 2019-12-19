const arr = [];
let arrLength;

do {
    arrLength = prompt('Input a length of the array');
} while (isNaN(arrLength) || arrLength < 0);

for (let i = 0; i < arrLength; i++) {
    const arrElement = prompt('Input an element of the array');
    arr.push(arrElement);
}

document.write(`<p>The array, created by a user: <b>${arr}.</b></p>`);

arr.sort((a, b) => a - b);

document.write(`<p>Sorted array: <b>${arr}.</b></p>`);

if (arr.length > 4) {
    arr.splice(2, 3);
    document.write(`
        <p>
            Sorted array after deleting of the elements with indexes 2-4: 
            <b>${arr}.</b>
        </p>
    `);
}



