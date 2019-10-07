const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveElementsSum = 0,
    positiveElementsMultiplication = 1,
    minElement = arr[0],
    maxElement = arr[0],
    minElementIndex,
    maxElementIndex,
    positiveElementsCount = 0,
    negativeElementsCount = 0,
    positiveEvenElementsCount = 0,
    positiveOddElementsCount = 0,
    positiveEvenElementsSum = 0,
    positiveOddElementsSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveElementsCount++;
        positiveElementsSum += arr[i];
        positiveElementsMultiplication *= arr[i];

        if (arr[i] % 2) {
            positiveOddElementsCount++;
            positiveOddElementsSum += arr[i];
        } else {
            positiveEvenElementsCount++;
            positiveEvenElementsSum += arr[i];
        }
    }

    if (arr[i] < 0) {
        negativeElementsCount++;
    }

    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxElementIndex = i;
    }

    if (arr[i] < minElement) {
        minElement = arr[i];
        minElementIndex = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}

document.write(`
    <p>
        1) Sum of all positive numbers of the array is: <b>${positiveElementsSum}.</b> 
        Quantity of all positive numbers is: <b>${positiveElementsCount}.</b>
    </p>
    <p>
        2) The min element of the array is: <b>${minElement}.</b>
        Index of this element is: <b>${minElementIndex}.</b>
    </p>
    <p>
        3) The max element of the array is: <b>${maxElement}.</b>
        Index of this element is: <b>${maxElementIndex}.</b>
    </p>
    <p>
        4) Quantity of all negative numbers of the array is: 
        <b>${negativeElementsCount}.</b>
    </p>
    <p>
        5) Quantity of all odd positive numbers of the array is: 
        <b>${positiveOddElementsCount}.</b>
    </p>
    <p>
        6) Quantity of all even positive numbers of the array is: 
        <b>${positiveEvenElementsCount}.</b>
    </p>
    <p>
        7) Sum of all even positive numbers of the array is: 
        <b>${positiveEvenElementsSum}.</b>
    </p>
    <p>
        8) Sum of all odd positive numbers of the array is: 
        <b>${positiveOddElementsSum}.</b>
    </p>
    <p>
        9) Multiplication of all positive numbers of the array is: 
        <b>${positiveElementsMultiplication}.</b>
    </p>
    <p>
        10) Updated array with only 1 element nonzero - the highest number of previous array: 
        <b>${arr}.</b>
    </p>
`);