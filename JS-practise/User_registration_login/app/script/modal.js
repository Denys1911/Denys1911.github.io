let btnOpenModal = document.querySelectorAll('.modal-open'),
    btnCloseModal = document.querySelectorAll('.modal-close'),
    wrapper = document.querySelectorAll('.wrapper'),
    btnRules = document.querySelector('.rules'),
    btnBack = document.querySelectorAll('.back'),
    modalLeft = document.querySelector('.modal-left'),
    form = document.querySelectorAll('form');

/// *** Prevents reloading of the page after closing of modal windows *** ///
form.forEach(element => {
    element.addEventListener('submit', e => e.preventDefault());
});
/// *** Prevents reloading of the page after closing of modal windows *** ///

/// *** Open/close modal windows *** ///
for (let i = 0; i < wrapper.length; i++) {
    btnOpenModal[i].addEventListener('click', () => {
        wrapper[i].style.display = 'block';
        document.onkeydown = e => {
            if (e.key === 'Escape') wrapper[i].style.display = 'none';
        };
    });
    
    btnCloseModal[i].addEventListener('click', () => {
        wrapper[i].style.display = 'none';
    });
}
/// *** Open/close modal windows *** ///

btnRules.addEventListener('click', () => {
    modalLeft.style.marginLeft = '-270px';
});

btnBack.forEach(button => {
    button.addEventListener('click', () => {
        modalLeft.style.marginLeft = '0';
    });  
});