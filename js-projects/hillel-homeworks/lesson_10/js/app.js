const SLIDES_AMOUNT = 9;
const BASIC_SHIFT_CHANGE = 100;
const AUTO_CHANGE_SPEED = 3000;
const MAX_SHIFT_VALUE = getMaxShiftValue(SLIDES_AMOUNT);
const slidesContainer = document.querySelector('.slides-container');
const dotsContainer = document.querySelector('.dots-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let shiftValue = 0;

createSlidesOnPage(slidesContainer, SLIDES_AMOUNT);
createDotsOnPage(dotsContainer, SLIDES_AMOUNT);

const dotsArr = dotsContainer.querySelectorAll('.dot');

// Realizing the auto slide changing
setInterval(changeSlide, AUTO_CHANGE_SPEED);

prevButton.addEventListener('click', () => {
    shiftValue -= BASIC_SHIFT_CHANGE;
    const currentSlide = getCurrentSlide(shiftValue);
    changeSliderParameters(shiftValue, MAX_SHIFT_VALUE, slidesContainer, currentSlide);
});

nextButton.addEventListener('click', () => {
    shiftValue += BASIC_SHIFT_CHANGE;
    const currentSlide = getCurrentSlide(shiftValue);
    changeSliderParameters(shiftValue, MAX_SHIFT_VALUE, slidesContainer, currentSlide);
});

dotsContainer.addEventListener('click', e => {
    const targetedElement = e.target;

    if (targetedElement.classList.contains('dot')) {
       const elementId = targetedElement.dataset.id;
       shiftValue = elementId * 100;
       changeSliderParameters(shiftValue, MAX_SHIFT_VALUE, slidesContainer, elementId);
    }
});

