'use strict';

function createSlidesOnPage(slidesContainer, slidesAmount) {
    for (let i = 0; i < slidesAmount; i++) {
        slidesContainer.innerHTML += `
                <div class="slide">
                    <img src="./images/picture-${i + 1}.jpg" alt="">
                </div>
            `;
    }
}

function createDotsOnPage(dotsContainer, slidesAmount) {
    for (let i = 0; i < slidesAmount; i++) {
        dotsContainer.innerHTML += `
                <div class="${(i === 0) ? 'dot active' : 'dot'}" 
                data-id="${i}"></div>
            `;
    }
}

function getMaxShiftValue(slidesAmount) {
    return (slidesAmount - 1) * 100;
}

function getCurrentSlide(shiftValue) {
    return shiftValue / 100;
}

function calculateShiftValueWhenMovingToNextSlide(shiftValue, basicShiftChange, maxShiftValue) {
    shiftValue += basicShiftChange;

    if (shiftValue > maxShiftValue) {
        shiftValue = 0;
    }

    return shiftValue;
}

function calculateShiftValueWhenMovingToPrevSlide(shiftValue, basicShiftChange, maxShiftValue) {
    shiftValue -= basicShiftChange;

    if (shiftValue < 0) {
        shiftValue = maxShiftValue;
    }

    return shiftValue;
}

function changeSliderParameters(shiftValue, slidesContainer, currentSlideIndex) {
    const dotsArr = dotsContainer.querySelectorAll('.dot');

    function changeDotsClassAccordingToIndex(className = 'active') {
        dotsArr.forEach(dot => dot.classList.remove(className));
        dotsArr[currentSlideIndex].classList.add(className);
    }

    function changeTransformProperty() {
        slidesContainer.style.transform = `translateX(${-shiftValue}%)`;
    }

    changeDotsClassAccordingToIndex();
    changeTransformProperty();
}

function refreshInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(changeSlideAccordingToCondition, AUTO_CHANGE_SPEED, 'next');
}

function changeSlideAccordingToCondition(condition) {
    if (condition === 'next') {
        shiftValue = calculateShiftValueWhenMovingToNextSlide(shiftValue, BASIC_SHIFT_CHANGE, MAX_SHIFT_VALUE);
    } else {
        shiftValue = calculateShiftValueWhenMovingToPrevSlide(shiftValue, BASIC_SHIFT_CHANGE, MAX_SHIFT_VALUE);
    }

    const currentSlide = getCurrentSlide(shiftValue);
    changeSliderParameters(shiftValue, slidesContainer, currentSlide);
    refreshInterval();
}

function handleClickOnPrevButton() {
    changeSlideAccordingToCondition('prev');
}

function handleClickOnNextButton() {
    changeSlideAccordingToCondition('next');
}

function handleClickOnDotsContainer(e) {
    const targetedElement = e.target;

    if (targetedElement.classList.contains('dot')) {
        const elementId = targetedElement.dataset.id;
        shiftValue = elementId * 100;
        changeSliderParameters(shiftValue, slidesContainer, elementId);
        refreshInterval();
    }
}
