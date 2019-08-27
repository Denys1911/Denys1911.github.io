let btnOpenModal = document.querySelector('.modal-open'),
    btnCloseModal = document.querySelector('.modal-close'),
    wrapper = document.querySelector('.wrapper'),
    btnRules = document.querySelector('.rules'),
    btnBack = document.querySelectorAll('.back'),
    modalLeft = document.querySelector('.modal-left');

btnOpenModal.addEventListener('click', () => {
    wrapper.style.display = 'block';
    document.onkeydown = e => {
        if (e.key === 'Escape') wrapper.style.display = 'none';
    };
});

btnCloseModal.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

btnRules.addEventListener('click', () => {
    modalLeft.style.marginLeft = '-250px';
});

btnBack.forEach(button => {
    button.addEventListener('click', () => {
        modalLeft.style.marginLeft = '0';
    });  
});