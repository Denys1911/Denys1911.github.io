/// *** SLIDER *** ///
new Glide('.header-inner__slider', {
    type: 'carousel',
}).mount();

new Glide('.section-quotes-slider', {
    type: 'carousel',
}).mount();
/// *** SLIDER *** ///

/// *** SCROLL to ANCORS *** ///
function ancors() {
    let linksList = document.querySelectorAll('.header-inner__nav-link');
    for (i = 0; i < 7; i++) {
        let id = linksList[i].getAttribute('href'),
            element = document.querySelector(`${id}`),
            rect = element.getBoundingClientRect(),
            scroll = pageYOffset,
            elementPosition = rect.top + scroll;
        linksList[i].addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            }); 
        })
    };
};
ancors();
window.addEventListener('resize', ancors);
/// *** SCROLL to ANCORS *** ///

/// *** NAV BUTTON'S *** ///
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
};
/// *** NAV BUTTON'S *** ///

/// *** PARALLAX EFFECT *** ///
window.addEventListener('scroll', () => {
    let item1 = document.querySelector('.header'),
        item2 = document.querySelector('.section-video'),
        item3 = document.querySelector('.section-team'),
        item4 = document.querySelector('.section-quotes'),
        itemList = [item1, item2, item3, item4];
    for (i = 0; i < 4; i++) {
        let rect = itemList[i].getBoundingClientRect(),
            scroll = pageYOffset,
            elementPosition = rect.top + scroll,
            value = scroll - elementPosition;
            itemList[i].style.backgroundPosition = `center ${value*.35}px`;   
    };
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
};

window.addEventListener('load', fadeOutEffect);
/// *** PRELOADER *** ///

/// *** GO UP BUTTON *** ///
window.addEventListener('scroll', () => {
    if(pageYOffset > window.innerHeight) {
        document.querySelector('.go-up').style.right = '2rem';
    } else {
        document.querySelector('.go-up').style.right = '-5rem';
    };
});

document.querySelector('.go-up').addEventListener('click', () => {
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/// *** GO UP BUTTON *** ///

/// *** BUTTON LOAD MORE *** ///
let button = document.querySelector('#btn-load-more');
button.addEventListener('click', () => {
    let element1 = document.querySelector('[data-number="1"]'),
        group1 = document.querySelectorAll('[data-number="1"]'),
        group2 = document.querySelectorAll('[data-number="2"]'),
        element1Style = getComputedStyle(element1, null).display;
    if (element1Style == 'none') {
        group1.forEach((element) => {
            element.style.display = 'block';
        });
    }
    else {
        group2.forEach((element) => {
            element.style.display = 'block';
        });
        button.style.display = 'none';
    };
});
/// *** BUTTON LOAD MORE *** ///

/// *** MODAL WINDOW *** ///
let modalWindow = document.querySelector('.modal-wrapper');

document.getElementById('modal').addEventListener('click', showModal);
document.querySelector('.modal-form__close-btn').addEventListener('click', closeModal);

function showModal() {
    modalWindow.style.display = 'flex';
    document.onkeydown = (event) =>  {
        if (event.key == 'Escape') closeModal();
    }
}

function closeModal() {
    modalWindow.style.display = 'none';
    document.onkeydown = null;
}
/// *** MODAL WINDOW *** ///

/// *** SUBSCRIBE BUTTON *** ///
let subscribeButton = document.querySelector('.footer-inner__social-input-button');
subscribeButton.addEventListener('click', () => {
    if(document.querySelector('.footer-inner__social-input').value != ''){
        let newSpan = document.createElement('span');
        newSpan.innerHTML = 'Subscribed successfully!';
        newSpan.classList.add('footer-inner__social-success');
        subscribeButton.insertAdjacentElement('afterend', newSpan);
        setTimeout(() => newSpan.remove(), 1000);
    };
});
/// *** SUBSCRIBE BUTTON *** ///
