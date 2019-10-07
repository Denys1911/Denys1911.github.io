let tabBody = document.querySelectorAll('.tab-body'),
    tab = document.querySelectorAll('.tab');

function init() {
    for (i=1; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
}

init();

tab.forEach(element => {
    element.onclick = showTabs;
});

function showTabs() {
    for (i=0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
        tab[i].classList.remove('active');
    };
    this.classList.add('active')
    let data = this.getAttribute('data');
    document.querySelector(`.tab-body[data = "${data}"]`).style.display = 'block';


}
