'use strict';

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

let autoSlideInterval = setInterval(changeSlideAccordingToCondition, AUTO_CHANGE_SPEED, 'next');

prevButton.addEventListener('click', handleClickOnPrevButton);
nextButton.addEventListener('click', handleClickOnNextButton);
dotsContainer.addEventListener('click', handleClickOnDotsContainer);

