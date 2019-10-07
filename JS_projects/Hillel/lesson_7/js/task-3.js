const arr = ['coffee', 50, 670, -65, 'milk', true, 9, 'dog', {}, 1];

function calculateAverage(arr) {
    const arrOfNumbers = arr.filter(elem => typeof elem === 'number');
    const sum = arrOfNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);
    return sum / arrOfNumbers.length;
}

calculateAverage(arr);