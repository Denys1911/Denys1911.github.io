/// *** SLIDER *** ///
new Glide('.header-inner__slider', {
    type: 'carousel',
}).mount();
/// *** SLIDER *** ///

/// *** NAV BUTTON *** ///
document.querySelector('.nav-btn').addEventListener('click', () => {
    document.querySelector('.header-inner__nav-list').style.display = 'flex';
    document.querySelector('.nav-btn-close').style.display = 'block';
});

document.querySelectorAll('.header-inner__nav-link').forEach((element) => {
    element.addEventListener('click', () => {
        if (document.body.clientWidth < 768) closeMenu()
    });
});

document.querySelector('.nav-btn-close').addEventListener('click', closeMenu);

function closeMenu() {
    document.querySelector('.header-inner__nav-list').style.display = 'none';
    document.querySelector('.nav-btn-close').style.display = 'none';
}
/// *** NAV BUTTON *** ///

/// *** PARALLAX EFFECT *** ///
window.addEventListener('scroll', () => {
    let item1 = document.querySelector('.header'),
        item2 = document.querySelector('.section-video'),
        item3 = document.querySelector('.section-team'),
        itemList = [item1, item2, item3];
    for (i = 0; i < 3; i++) {
        let rect = itemList[i].getBoundingClientRect(),
            scroll = pageYOffset,
            elementPosition = rect.top + scroll,
            value = scroll - elementPosition;
            itemList[i].style.backgroundPosition = `center ${value*.35}px`    
    }
});
/// *** PARALLAX EFFECT *** ///

/// *** PRELOADER *** ///
function fadeOutEffect() {
    let fadeTarget = document.querySelector(".preloader-wrapper");
    fadeTarget.style.opacity = 1;
    let fadeEffect = setInterval( () => {
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
        }
    }, 70);
}

window.addEventListener('load', fadeOutEffect);
/// *** PRELOADER *** ///

/// *** GO UP BUTTON *** ///
window.addEventListener('scroll', () => {
    if(pageYOffset > window.innerHeight) {
        document.querySelector('.go-up').style.right = '2rem';
    } else {
        document.querySelector('.go-up').style.right = '-5rem';
    }
});

document.querySelector('.go-up').addEventListener('click', () => {
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/// *** GO UP BUTTON *** ///



