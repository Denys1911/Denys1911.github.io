const IMAGES_AMOUNT_IN_WORK_SECTION = 20;
const HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION = 8;
const workSectionImagesWrapper = document.querySelector('.section-works__grid');
const navigationList = document.querySelector('.header-inner__nav-list');
const openNavigationListBtn = document.querySelector('.nav-btn');
const closeNavigationListBtn = document.querySelector('.nav-btn-close');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
const showAllWorksBtn = document.querySelector('#btn-show-all-works');
const modalWrapper = document.querySelector('.modal-wrapper');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.modal-form__close-btn');
const subscribeBtn = document.querySelector('.footer-inner__social-input-button');

/// *** PRELOADER *** ///
window.addEventListener('load', handleLoadOnWindow);
/// *** PRELOADER *** ///

createImagesInWorkSection(IMAGES_AMOUNT_IN_WORK_SECTION,
    HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION,
    workSectionImagesWrapper);

/// *** SLIDER *** ///
new Glide('.header-inner__slider', {
    type: 'carousel',
}).mount();

new Glide('.section-quotes-slider', {
    type: 'carousel',
}).mount();
/// *** SLIDER *** ///

scrollToAnchors(navigationList);

window.addEventListener('resize', () => {
    scrollToAnchors(navigationList);
});

openNavigationListBtn.addEventListener('click', () => {
    addClassForElements('flex', navigationList, closeNavigationListBtn);
});

closeNavigationListBtn.addEventListener('click', () => {
    removeClassForElements('flex', navigationList, closeNavigationListBtn);
});

window.addEventListener('scroll', makeParallaxEffect);

/// *** Scroll to top button *** ///
window.addEventListener('scroll', handleScrollOnWindow);

scrollToTopBtn.addEventListener('click', handleClickOnScrollToTopBtn);
/// *** Scroll to top button *** ///

showAllWorksBtn.addEventListener('click', handleClickOnShowAllWorksBtn);

openModalBtn.addEventListener('click', showModal);

closeModalBtn.addEventListener('click', closeModal);

subscribeBtn.addEventListener('click', handleClickOnSubscribeBtn);

