document.querySelectorAll('.modal-open').forEach(element => element.addEventListener('click', showModal));

document.querySelectorAll('.modal-close').forEach(element => element.addEventListener('click', hideModal));

document.querySelector('.modal-wrapper').addEventListener('click', hideModal);

function showModal() {
    let idModal = this.dataset.modal;
    document.querySelector(idModal).classList.remove('hide');
    document.querySelector('.modal').classList.remove('hide');
    document.onkeydown = event => {
        if (event.key == 'Escape') hideModal();
    };
}

function hideModal() {
    document.querySelector('.modal-wrapper').classList.add('hide');
    document.querySelector('.modal').classList.add('hide');
    document.onkeydown = null;
}
