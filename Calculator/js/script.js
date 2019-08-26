let input = document.querySelector('input');

/// *** Function which inserts value to the input *** ///
function insert(num) {
   input.value += num;
}
/// *** Function which inserts value to the input *** ///

const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', () => insert(button.textContent));
});

document.querySelector('.reset').addEventListener('click', () => {
    input.value = '';
});

document.querySelector('.arrow').addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length-1);
});

document.querySelector('.equal').addEventListener('click', result);

input.addEventListener('keypress', e => {
    if (e.keyCode === 44 || !(e.keyCode >= 40 && e.keyCode <= 57)) e.preventDefault();
    if (e.key === 'Enter') result();
});

/// *** Function which calculates result from input *** ///
function result() {
    //input.value = eval(input.value); can run with eval, but its dangerous and not optimal method
    let result = math.evaluate(input.value);
    result = parseFloat(result.toFixed(15));
    if (result === Infinity) {
        result = 'Error! Division by zero';
    }
    input.value = result;
}
/// *** Function which calculate result from input *** ///