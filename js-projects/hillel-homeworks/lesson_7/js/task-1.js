function getMultiplication(a) {
    return function (b) {
        return a * b;
    };
}

// Just random example
getMultiplication(3)(50);