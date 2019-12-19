// Showing the table. As a default at css it has property display: none.
document.querySelector('#table-of-multiplication').style.display = 'table';

let tableBody = document.querySelector('#table-of-multiplication tbody'),
    tableFirstRow = tableBody.querySelector('tr');

for (let i = 1; i < 11; i++) {
    let tableRow = document.createElement('tr');

    for (let j = 1; j < 11; j++) {
        if (i === 1) {
            tableFirstRow.innerHTML += `<td>${j}</td>`;
        }

        if (j === 1) {
            tableRow.innerHTML = `<td>${i}</td>`;
        }

        tableRow.innerHTML += `<td>${i} * ${j} = ${i * j}</td>`;
        tableBody.appendChild(tableRow);
    }
}
