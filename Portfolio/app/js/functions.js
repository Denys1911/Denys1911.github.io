function addClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.add(className));
}

function removeClassForElements(className, ...elements) {
    elements.forEach(element => element.classList.remove(className));
}

function getNavBtnAndList() {
    const navBtn = document.querySelector('.header__nav-btn');
    const navList = document.querySelector('.header__nav-list');
    return [navBtn, navList];
}

function controlMenuAndBtn() {
    const [navBtn, navList] = getNavBtnAndList();

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('header__nav-btn--active');
        navList.classList.toggle('header__nav-list--active');
    });
}

function scrollToAnchors() {
    const [navBtn, navList] = getNavBtnAndList();

    navList.addEventListener('click', handleClickOnNavigationList);

    function handleClickOnNavigationList(e) {
        e.preventDefault();
        const clickedElement = e.target;
        
        if (clickedElement.tagName !== 'A') {
            return;
        }
    
        const anchorClass = clickedElement.getAttribute('href');
        const anchor = document.querySelector(`.${anchorClass}`);
        const anchorPosition = getElementPosition(anchor);

        removeClassForElements('header__nav-btn--active', navBtn);
        removeClassForElements('header__nav-list--active', navList);

        window.scrollTo({
            top: anchorPosition,
            behavior: 'smooth'
        });

        function getElementPosition(element) {
            const elementYCoordinate = element.getBoundingClientRect().top;
            const scrollYValue = pageYOffset;
            return elementYCoordinate + scrollYValue;
        }
    }
}

function controlScrollToTopBtn() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    scrollToTopBtn.addEventListener('click', handleClickOnScrollToTopBtn);
    window.addEventListener('scroll', handleScrollOnWindow);

    function handleClickOnScrollToTopBtn() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
}

function hidePreloader() {
    window.addEventListener('load', handleLoadOnWindow);

    function handleLoadOnWindow() {
        const fadeTarget = document.querySelector('.preloader-wrapper');
        let opacityValue = 1;

        function changeOpacityOrDisplayPropertyValue() {
            if (opacityValue > 0) {
                opacityValue -= 0.1;
                fadeTarget.style.opacity = opacityValue;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none';
            }
        }

        const fadeEffect = setInterval(changeOpacityOrDisplayPropertyValue, 70);
    }
}

function controlShowingOfWorks() {
    const allWorks = document.querySelectorAll('.works__list-item');
    const worksButtonsList = document.querySelector('.works__header-buttons');

    worksButtonsList.addEventListener('click', handleClickOnWorksButtonsList);

    function handleClickOnWorksButtonsList(e) {
        const targetedElement = e.target;

        if (!targetedElement.classList.contains('works__header-button')) {
            return;
        }

        if (targetedElement.id === 'all-works-btn') {
            removeClassForElements('works__list-item--hide', ...allWorks);
            return;
        }

        addClassForElements('works__list-item--hide', ...allWorks);

        if (targetedElement.id === 'react-works-btn') {
            const allReactWorks = document.querySelectorAll('.works__list-item[data-type="react"]');
            removeClassForElements('works__list-item--hide', ...allReactWorks);
        }

        if (targetedElement.id === 'js-works-btn') {
            const allJsWorks = document.querySelectorAll('.works__list-item[data-type="js"]');
            removeClassForElements('works__list-item--hide', ...allJsWorks);
        }

        if (targetedElement.id === 'websites-works-btn') {
            const allWebsites = document.querySelectorAll('.works__list-item[data-type="websites"]');
            removeClassForElements('works__list-item--hide', ...allWebsites);
        }
    }
}
