'use strict';

function getCurrentDate() {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

function createCurrentDateOnPage(wrapper, {seconds, minutes, hours}) {
    hours = convertNumber(hours);
    minutes = convertNumber(minutes);
    seconds = convertNumber(seconds);

    wrapper.innerHTML = `
        <img id="hours-first-index" src="./images/number-${hours[0]}.png" alt="">
        <img id="hours-last-index" src="./images/number-${hours[1]}.png" alt="">
        <div class="colon">:</div>
        <img id="minutes-first-index" src="./images/number-${minutes[0]}.png" alt="">
        <img id="minutes-last-index" src="./images/number-${minutes[1]}.png" alt="">
        <div class="colon">:</div>
        <img id="seconds-first-index" src="./images/number-${seconds[0]}.png" alt="">
        <img id="seconds-last-index" src="./images/number-${seconds[1]}.png" alt="">
    `;
}

function convertNumber(number) {
    number = number.toString();

    if (number.length === 1) {
        number = '0' + number;
    }

    return number;
}

function updateCurrentDate(dataArr) {
    const prevHoursValue = dataArr.hours;
    const prevMinutesValue = dataArr.minutes;
    const prevSecondsValue = dataArr.seconds;

    if (++dataArr.seconds === 60) {
        dataArr.seconds = 0;
        updateMinutes();
    }

    updateSeconds();

    function updateSeconds() {
        changeAttributeValueAccordingToCondition(prevSecondsValue, dataArr.seconds, 'seconds');
    }

    function updateMinutes() {
        if (++dataArr.minutes === 60) {
            dataArr.minutes = 0;
            updateHours();
        }

        changeAttributeValueAccordingToCondition(prevMinutesValue, dataArr.minutes, 'minutes');
    }

    function updateHours() {
        if (++dataArr.hours === 24) {
            dataArr.hours = 0;
        }

        changeAttributeValueAccordingToCondition(prevHoursValue, dataArr.hours, 'hours');
    }

    function changeAttributeValueAccordingToCondition(prevNumber, currentNumber, type) {
        currentNumber = convertNumber(currentNumber);
        prevNumber = convertNumber(prevNumber);

        if (prevNumber[0] !== currentNumber[0]) {
            const firstIndexImg = document.getElementById(`${type}-first-index`);
            firstIndexImg.setAttribute('src', `./images/number-${currentNumber[0]}.png`)
        }

        if (prevNumber[1] !== currentNumber[1]) {
            const lastIndexImg = document.getElementById(`${type}-last-index`);
            lastIndexImg.setAttribute('src', `./images/number-${currentNumber[1]}.png`)
        }
    }
}
