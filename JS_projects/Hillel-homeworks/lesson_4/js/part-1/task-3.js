// Showing the table. As a default at css it has property display: none.
document.querySelector('#multiplication-on-seven').style.display = 'table';

const tableRows = document.querySelectorAll('#multiplication-on-seven tbody tr');

for (let i = 1; i < 11; i++) {
    tableRows[0].innerHTML += `<td>${i}</td>`;
    tableRows[1].innerHTML += `<td>7 * ${i} = ${7 * i}</td>`;
}