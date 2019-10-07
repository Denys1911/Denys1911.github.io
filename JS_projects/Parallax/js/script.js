window.addEventListener('scroll', () => {
    let rect = document.querySelector('.parallax-image').getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        distanseToElement = rect.top + scrollTop,
        value = scrollTop - distanseToElement;
    document.querySelector('.parallax-image').style.backgroundPosition = 'center ' + value*0.6 + 'px';
});


 