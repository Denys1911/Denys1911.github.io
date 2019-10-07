const field = document.querySelector('.field'),
    draw = () => {
    let out = '';
    count = 0;
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (count % 2 == 0) {
                out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
            } else {
                out += `<div class="chess-block chess-block--black" data-x="${k}" data-y="${i}"></div>`;
            }
            count++;
        }
        count++;
    }
    field.innerHTML = out;
    field.addEventListener('click', e => knight(e));
};

/// First solution, but the second one is more concise and simpler
/* const knight = e => {
    
    const dx = +e.target.dataset.x,
        dy = +e.target.dataset.y;

    document.querySelectorAll('.chess-block').forEach(block => {
        block.classList.remove('chess-block--green');
        block.classList.remove('chess-block--blue');
    });

    e.target.classList.add('chess-block--green');

    if (dx + 2 < 8 && dy - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${dx+2}"][data-y="${dy-1}"]`).classList.add('chess-block--blue');
    }
    if (dx + 2 < 8 && dy + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${dx+2}"][data-y="${dy+1}"]`).classList.add('chess-block--blue');
    }
    if (dx - 2 >= 0 && dy + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${dx-2}"][data-y="${dy+1}"]`).classList.add('chess-block--blue');
    }
    if (dx - 2 >= 0 && dy - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${dx-2}"][data-y="${dy-1}"]`).classList.add('chess-block--blue');
    }
    if (dx + 1 < 8 && dy + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${dx+1}"][data-y="${dy+2}"]`).classList.add('chess-block--blue');
    }
    if (dx - 1 >= 0 && dy - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${dx-1}"][data-y="${dy-2}"]`).classList.add('chess-block--blue');
    }
    if (dx + 1 < 8 && dy - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${dx+1}"][data-y="${dy-2}"]`).classList.add('chess-block--blue');
    }
    if (dx - 1 >= 0 && dy + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${dx-1}"][data-y="${dy+2}"]`).classList.add('chess-block--blue');
    }
}; */

const knight = e => {
    let dx = +e.target.dataset.x,
        dy = +e.target.dataset.y,
        xx = [2, 2, -2, -2, 1, 1, -1, -1],
        yy = [1, -1, 1, -1, 2, -2, 2, -2],
        x = 0,
        y = 0;

    document.querySelectorAll('.chess-block').forEach(block => {
        block.classList.remove('chess-block--green');
        block.classList.remove('chess-block--blue');
    });
    e.target.classList.add('chess-block--green');

    for (let i = 0; i < xx.length; i++) {
        x = dx + xx[i];
        y = dy + yy[i];
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            document.querySelector(`.chess-block[data-x="${x}"][data-y="${y}"]`).classList.add('chess-block--blue');
        }
    }
};

draw();