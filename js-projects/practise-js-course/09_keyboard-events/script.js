let input = document.querySelector('.input'),
    input2 = document.querySelector('.magic'),
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    box = document.querySelector('.box'),
    leftRight = 0,
    bottomTop = 0;

// Input converts letters
input.addEventListener('input', () => {
    input.value = input.value.toUpperCase();
});

// Moving of the box
document.addEventListener('keydown', e => {
    if (e.keyCode === 39) {
        if (leftRight < 270) {
            leftRight += 10;
            box.style.transform = `translate(${leftRight}px, ${bottomTop}px)`;
        } 
    }
    if (e.keyCode === 37) {
        if (leftRight > 0) {
            leftRight -= 10;
            box.style.transform = `translate(${leftRight}px, ${bottomTop}px)`;
        } 
    }
    if (e.keyCode === 40) {
        if (bottomTop < 120) {
            bottomTop += 10;
            box.style.transform = `translate(${leftRight}px, ${bottomTop}px)`;
        }
    }
    if (e.keyCode === 38) {
        if (bottomTop > 0) {
            bottomTop -= 10;
            box.style.transform = `translate(${leftRight}px, ${bottomTop}px)`;
        }
    }
});

input2.addEventListener('keypress', e => {
    e.preventDefault();
    input2.value += letters[Math.floor(Math.random()*letters.length)];
});



