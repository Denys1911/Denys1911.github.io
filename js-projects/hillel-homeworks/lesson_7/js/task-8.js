function makeSum() {
    let sum;

    return function (number) {
        if (sum) {
            sum += number;
        } else {
            sum = number;
        }

        return sum;
    };
}

let sum = makeSum();

// Just random examples
console.log(sum(7));
console.log(sum(63));
console.log(sum(10));
console.log(sum(180));

