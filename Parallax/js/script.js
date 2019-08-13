window.addEventListener('scroll', () => {
    console.log(window.innerHeight)
    console.log(pageYOffset-window.innerHeight)
    document.querySelector('.parallax-image').style.backgroundPosition = 'center ' + ((pageYOffset-window.innerHeight)*0.35 - 150) + 'px'
});
