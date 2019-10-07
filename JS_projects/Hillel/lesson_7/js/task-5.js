function getNumber(description) {
    let number;

    do {
        number = parseInt(prompt(description))
    } while (isNaN(number) || number < 1);

    return number;
}

function getArrayElement() {
    return prompt('Input an element of the nested array')
}

function createArray(length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        let nestedArray = [];
        const nestedArrayLength = getNumber(`Input an amount of elements in the nested array #${i + 1}`);

        for (let j = 0; j < nestedArrayLength; j++) {
            const element = getArrayElement();
            nestedArray.push(element);
        }

        arr.push(nestedArray)
    }

    return arr;
}

const arrLength =  getNumber('Input an amount of nested arrays in the array');

createArray(arrLength);