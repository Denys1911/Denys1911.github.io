const ROWS_AMOUNT_IN_CHESSBOARD = 8;
const COLUMNS_AMOUNT_IN_CHESSBOARD = 8;
const chessBoard = document.querySelector('.chessboard');

function createChessboardFields(chessboard, rows, columns) {
    let count = 0;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            const classList = (count % 2) ? 'chessboard-field chessboard-field--black' : 'chessboard-field';

            chessboard.innerHTML += `<div class="${classList}" data-x="${j}" data-y="${i}"></div>`;
            count++;
        }

        count++;
    }
}

function handleClickOnChessBoard(e) {
    const targetedField = e.target;
    const targetedFieldCoordinateX = parseInt(targetedField.dataset.x);
    const targetedFieldCoordinateY = parseInt(targetedField.dataset.y);
    const xShiftValuesArr = [2, 2, -2, -2, 1, 1, -1, -1];
    const yShiftValuesArr = [1, -1, 1, -1, 2, -2, 2, -2];
    const chessBoardFields = document.querySelectorAll('.chessboard-field');

    chessBoardFields.forEach(field => {
        field.classList.remove('chessboard-field--green');
        field.classList.remove('chessboard-field--blue');
    });

    targetedField.classList.add('chessboard-field--green');

    for (let i = 0; i < xShiftValuesArr.length; i++) {
        const knightCoordinateX = targetedFieldCoordinateX + xShiftValuesArr[i];
        const knightCoordinateY = targetedFieldCoordinateY + yShiftValuesArr[i];

        if (knightCoordinateX >= 0 && knightCoordinateX < 8 && knightCoordinateY >= 0 && knightCoordinateY < 8) {
            const knightField = document.querySelector(
                `.chessboard-field[data-x="${knightCoordinateX}"][data-y="${knightCoordinateY}"]`);

            knightField.classList.add('chessboard-field--blue');
        }
    }
}

createChessboardFields(chessBoard, ROWS_AMOUNT_IN_CHESSBOARD, COLUMNS_AMOUNT_IN_CHESSBOARD);

chessBoard.addEventListener('click', handleClickOnChessBoard);