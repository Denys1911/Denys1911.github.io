function addClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.add(className));
}

function removeClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.remove(className));
}

function getElementPosition(element) {
    const elementYCoordinate = element.getBoundingClientRect().top;
    const scrollYValue = pageYOffset;
    return elementYCoordinate + scrollYValue;
}

function handleLoadOnWindow() {
    const fadeTarget = document.querySelector(".preloader-wrapper");
    let opacityValue = fadeTarget.style.opacity;
    opacityValue = 1;

    function changeOpacityOrDisplayPropertyValue() {
        if (opacityValue > 0) {
            opacityValue -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
        }
    }

    const fadeEffect = setInterval(changeOpacityOrDisplayPropertyValue, 70);
}

function createImagesInWorkSection(imagesAmount, hiddenImagesAmount, wrapper) {
    for (let i = 1; i <= imagesAmount; i++) {
        const indexOfLastVisibleImage = imagesAmount - hiddenImagesAmount;
        const className = 'section-works__grid-image';
        const classList = (i > indexOfLastVisibleImage) ? `${className} ${className}--hidden` : className;

        wrapper.innerHTML += `
<a href="#">
    <img src="./images/work-section-images/grid-${i}.jpg" class="${classList}" alt="our works">
</a>
`;
    }
}

function scrollToAnchors(element) {
    element.addEventListener('click', handleClickOnNavigationList);
}

function handleClickOnNavigationList(e) {
    e.preventDefault();
    const clickedElement = e.target;

    if (!clickedElement.classList.contains('header-inner__nav-link')) {
        return;
    }

    const anchorId = clickedElement.getAttribute('href');
    const anchor = document.querySelector(`${anchorId}`);
    const anchorPosition = getElementPosition(anchor);

    window.scrollTo({
        top: anchorPosition,
        behavior: 'smooth'
    });
}

function makeParallaxEffect() {
    const item1 = document.querySelector('.header');
    const item2 = document.querySelector('.section-video');
    const item3 = document.querySelector('.section-team');
    const item4 = document.querySelector('.section-quotes');
    const itemsList = [item1, item2, item3, item4];

    itemsList.map(item => {
        const elementPosition = getElementPosition(item);
        const scrollYValue = pageYOffset;
        const value = scrollYValue - elementPosition;
        item.style.backgroundPosition = `center ${value * 0.35}px`;
    });
}

function handleScrollOnWindow() {
    const modifierClassName = 'scroll-to-top-btn--shift';

    if(pageYOffset > window.innerHeight) {
        addClassForElements(modifierClassName, scrollToTopBtn);
    } else {
        removeClassForElements(modifierClassName, scrollToTopBtn);
    }
}

function handleClickOnScrollToTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleClickOnShowAllWorksBtn() {
    const hiddenImagesClassName = 'section-works__grid-image--hidden';
    const imagesCollection = document.querySelectorAll('.section-works__grid-image');

    imagesCollection.forEach(image => {
        if (image.classList.contains(hiddenImagesClassName)) {
            removeClassForElements(hiddenImagesClassName, image);
        }
    });

    showAllWorksBtn.style.display = 'none';
}

function showModal() {
    addClassForElements('modal-wrapper--flex', modalWrapper);
    document.addEventListener('keydown', handleKeydownOnDocument);
}

function closeModal() {
    removeClassForElements('modal-wrapper--flex', modalWrapper);
    document.removeEventListener('keydown', handleKeydownOnDocument);
}

function handleKeydownOnDocument(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function handleClickOnSubscribeBtn(e) {
    e.preventDefault();

    const subscribeInput = document.querySelector('.footer-inner__social-input');
    const successMessageSpan = document.querySelector('.footer-inner__social-success');
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const emailValue = subscribeInput.value;

    function showSubscribeMessage(message, className) {
        successMessageSpan.textContent = message;

        addClassForElements(className, successMessageSpan);
        setTimeout(removeClassForElements, 1500,
            className, successMessageSpan
        );
    }

    if (emailRegExp.test(emailValue)) {
        showSubscribeMessage('Subscribed successfully!',
            'footer-inner__social-success--approved');
    } else {
        showSubscribeMessage('Please, enter a valid email',
            'footer-inner__social-success--rejected');
    }
}