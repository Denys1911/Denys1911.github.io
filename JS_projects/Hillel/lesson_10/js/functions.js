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

function setNewShiftValue(value, maxShiftValue) {
    shiftValue += value;

    if (shiftValue > maxShiftValue) {
        shiftValue = 0;
    }
}

function getMaxShiftValue(slidesAmount) {
    return (slidesAmount - 1) * 100;
}

function getCurrentSlide(shiftValue) {
    return shiftValue / 100;
}

function changeSliderParameters(shiftValue, maxValue, slidesContainer, currentSlideIndex,
                                dots = dotsArr, button1 = prevButton, button2 = nextButton) {
    function changeButtonsClassAccordingToCondition(className = 'hide') {
        button1.classList.remove(className);
        button2.classList.remove(className);

        if (shiftValue === 0) {
            button1.classList.add(className);
        }

        if (shiftValue === maxValue) {
            button2.classList.add(className);
        }
    }

    function changeDotsClassAccordingToIndex(className = 'active') {
        dots.forEach(dot => dot.classList.remove(className));
        dots[currentSlideIndex].classList.add(className);
    }

    function changeTransformProperty() {
        slidesContainer.style.transform = `translateX(${-shiftValue}%)`;
    }

    changeButtonsClassAccordingToCondition();
    changeDotsClassAccordingToIndex();
    changeTransformProperty();
}

function changeSlide() {
    setNewShiftValue(BASIC_SHIFT_CHANGE, MAX_SHIFT_VALUE);
    const currentSlide = getCurrentSlide(shiftValue);
    changeSliderParameters(shiftValue, MAX_SHIFT_VALUE, slidesContainer, currentSlide);
}