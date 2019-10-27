function createElementWithClassOnPage(tagName, className, parentNode, text) {
    const element = document.createElement(tagName);
    element.className = className;

    if (text) {
        element.textContent = text;
    }

    if (parentNode) {
        parentNode.appendChild(element);
    }

    return element;
}

function createTableContent(table, rowAmount, columnAmount, startValue) {
    for (let i = 0; i < rowAmount; i++) {
        const tableRow = createElementWithClassOnPage('tr', 'table-row', table);

        for (let j = 0; j < columnAmount; j++) {
            createElementWithClassOnPage('td', 'table-element', tableRow, startValue++);
        }
    }
}

function getRandomNumberInRange(min, max) {
    const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(randomNumber);
}
