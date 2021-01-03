const addClassForElements = (className, ...elements) => {
    elements.forEach(element => element.classList.add(className));
};

const removeClassForElements = (className, ...elements) => {
    elements.forEach(element => element.classList.remove(className));
};

const getNavBtnAndList = () => {
    const navBtn = document.querySelector('.header__nav-btn');
    const navList = document.querySelector('.header__nav-list');

    return [navBtn, navList];
};

const controlNavMenuAndBtn = () => {
    const [navBtn, navList] = getNavBtnAndList();

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('header__nav-btn--active');
        navList.classList.toggle('header__nav-list--active');
    });
};

const scrollToAnchors = () => {
    const [navBtn, navList] = getNavBtnAndList();

    const handleClickOnNavigationList = e => {
        e.preventDefault();
        const clickedElement = e.target;

        const getElementPosition = element => {
            const elementYCoordinate = element.getBoundingClientRect().top;
            return elementYCoordinate + pageYOffset;
        };

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
    };

    navList.addEventListener('click', handleClickOnNavigationList);
};

const controlScrollToTopBtn = () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    const handleClickOnScrollToTopBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScrollOnWindow = () => {
        const modifierClassName = 'scroll-to-top-btn--shift';

        if (pageYOffset > window.innerHeight) {
            addClassForElements(modifierClassName, scrollToTopBtn);
        } else {
            removeClassForElements(modifierClassName, scrollToTopBtn);
        }
    };

    scrollToTopBtn.addEventListener('click', handleClickOnScrollToTopBtn);
    window.addEventListener('scroll', handleScrollOnWindow);
};

const hidePreloader = () => {
    const handleLoadOnWindow = () => {
        const fadeTarget = document.querySelector('.preloader-wrapper');
        let opacityValue = 1;

        const changeOpacityOrDisplayPropertyValue = () => {
            if (opacityValue > 0) {
                opacityValue -= 0.1;
                fadeTarget.style.opacity = opacityValue;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none';
            }
        };

        const fadeEffect = setInterval(changeOpacityOrDisplayPropertyValue, 70);
    };

    window.addEventListener('load', handleLoadOnWindow);
};

const controlShowingOfWorks = () => {
    const DEFAULT_FILTER_TYPE = 'latest';
    const worksButtonClassName = 'works__header-button';
    const worksButtonActiveClassName = 'active';
    const worksList = document.querySelector('.works__list');
    const worksButtonsWrapper = document.querySelector('.works__header-buttons');
    const worksButtonsCollection = worksButtonsWrapper.querySelectorAll('.' + worksButtonClassName);
    const worksData = getWorksData();
    let currentWorksFilter = '';

    const handleClickOnWorksButtonsList = ({target}) => {
        const newWorksFilter = target.dataset.type;

        if (!target.classList.contains(worksButtonClassName) || currentWorksFilter === newWorksFilter) {
            return;
        }

        currentWorksFilter = newWorksFilter;
        worksList.innerHTML = createWorkCards(filterWorksDataByType(worksData, newWorksFilter));
        removeClassForElements(worksButtonActiveClassName, ...worksButtonsCollection);
        target.classList.add(worksButtonActiveClassName);
    };

    worksButtonsWrapper.addEventListener('click', handleClickOnWorksButtonsList);
    document.querySelector(`.${worksButtonClassName}[data-type=${DEFAULT_FILTER_TYPE}]`).click();
};

const filterWorksDataByType = (worksData, filtrationType) => {
    switch (filtrationType) {
        case 'latest':
            return worksData.filter(({isLatest}) => isLatest);
        case 'react':
        case 'js':
        case 'websites':
            return worksData.filter(({projectType}) => projectType === filtrationType);
        default:
            return worksData;
    }
};

const createWorkCards = worksData => worksData.map(({isLatest, projectType, ...rest}) => createWorkCard(rest)).join('');

const createWorkCard = ({imgSrc, headerText, bodyText, linkOnCode, linkOnApp}) => `
    <li class="works__list-item">
        <img class="works__list-item-img" src=${imgSrc} alt="" loading="lazy">
        <div class="works__list-item-hover">
            <h3>${headerText}</h3>
            <p>${bodyText}</p>
            <div class="works__list-item-hover-buttons">
                ${linkOnApp ? `<a href=${linkOnApp} target="_blank">View</a>` : ''}
                <a href=${linkOnCode} target="_blank">Code</a>
            </div>
        </div>
    </li>
`;

const setCopyrights = () => {
    const copyrightsBlock = document.querySelector('.footer__copyright');
    const copyrightsText = `@ Denys Goloborodko ${new Date().getFullYear()}`;
    
    copyrightsBlock.innerText = copyrightsText;
};