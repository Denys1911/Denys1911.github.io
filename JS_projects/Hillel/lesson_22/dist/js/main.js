const IMAGES_AMOUNT_IN_WORK_SECTION = 20;
const HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION = 8;
const CLIENTS_COUNT = 10;
const PARALLAX_MULTIPLIER = 0.35;

controlPreloader();
createImagesInWorkSection(IMAGES_AMOUNT_IN_WORK_SECTION, HIDDEN_IMAGES_AMOUNT_IN_WORK_SECTION);
makeSlider('.header-inner__slider', 'carousel');
createQuotes();
controlShowingOfNavigationList();
performScrollingToAnchors();
performParallaxEffect(PARALLAX_MULTIPLIER);
controlAppearingAndClicksOnScrollToTopBtn();
controlModalWindowAction();
controlShowingOfAllWorks();
controlUserSubscription();
showClientsBrandsImages(CLIENTS_COUNT);
