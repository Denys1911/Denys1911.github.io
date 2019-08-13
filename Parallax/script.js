window.addEventListener('scroll', () => {
    console.log(window.innerHeight)
    console.log( document.querySelector('.parallax-image').style.backgroundPosition = 'center ' + ((pageYOffset-2*window.innerHeight)*0.35) + 'px')
})



