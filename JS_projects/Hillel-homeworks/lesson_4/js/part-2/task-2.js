// Showing the table. As a default at css it has property display: none.
document.querySelector('#dollar-hryvnia-exchange').style.display = 'table';

const DOLLAR_TO_HRYVNIA = 24,
    tableRows = document.querySelectorAll('#dollar-hryvnia-exchange tbody tr');

for (let i = 10; i <= 100; i += 10) {
    tableRows[0].innerHTML += `<td>${i}</td>`;
    tableRows[1].innerHTML += `<td>${DOLLAR_TO_HRYVNIA * i}</td>`;
}