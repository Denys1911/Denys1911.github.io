function handleClickOnCalculator(e) {
    const targetedElement = e.target;

    if (targetedElement.classList.contains('calculator__btn')) {
        insertValueInInput(targetedElement.textContent, input);
    }

    if (targetedElement.classList.contains('calculator__reset-btn')) {
        input.value = '';
    }

    if (targetedElement.classList.contains('calculator__arrow-btn')) {
        input.value = input.value.substring(0, input.value.length - 1);
    }

    if (targetedElement.classList.contains('calculator__result-btn')) {
        input.value = getResultAccordingToValidation(input.value);
    }
}

function handleKeyPressOnInput(e) {
    const allowedCharactersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ')', '(', '/', '+', '-', '*'];

    if (!allowedCharactersArr.includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === 'Enter') {
        input.value = getResultAccordingToValidation(input.value);
    }
}

function insertValueInInput(receivedValue, input) {
    input.value += receivedValue;
}

function getResultAccordingToValidation(str) {
    function validateExpression() {
        const strRegExp = /[+-/*][/*]/;
        const numberOfOpeningBrackets = str.split('').filter(character => character === '(').length;
        const numberOfClosingBrackets = str.split('').filter(character => character === ')').length;

        return !strRegExp.test(str) && numberOfOpeningBrackets === numberOfClosingBrackets;
    }

    function calculateResult() {
        let result = math.evaluate(str);

        if (!result.d) {
            result = 'Error! Division by zero';
        }

        return result;
    }

    return validateExpression() ? calculateResult() : 'Invalid expression';
}