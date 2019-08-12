document.querySelectorAll('.modal-open').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = hideModal;
});

document.querySelector('.modal-wrapper').onclick = hideModal;

function showModal() {
    let idModal = this.dataset.modal;
    document.querySelector(idModal).classList.remove('hide');
    document.onkeydown = function(event) {
        if (event.key == 'Escape') hideModal();
    }
}

function hideModal() {
    document.querySelector('.modal-wrapper').classList.add('hide');
    document.onkeydown = null;
}
