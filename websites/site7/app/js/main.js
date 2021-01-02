const IMAGES_AMOUNT_IN_WORK_SECTION = 20;
const HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION = 8;
const PARALLAX_MULTIPLIER = 0.35;

controlPreloader();
createImagesInWorkSection(IMAGES_AMOUNT_IN_WORK_SECTION, HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION);
makeSlider('.header-inner__slider', 'carousel');
makeSlider('.section-quotes-slider', 'carousel');
controlShowingOfNavigationList();
performScrollingToAnchors();
performParallaxEffect(PARALLAX_MULTIPLIER);
controlAppearingAndClicksOnScrollToTopBtn();
controlShowingOfModalWindow();
controlShowingOfAllWorks();
controlUserSubscription();
