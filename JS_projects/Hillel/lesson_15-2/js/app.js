'use strict';

const wrapper = document.querySelector('.time');
const dataArr = getCurrentDate();

createCurrentDateOnPage(wrapper, dataArr);
setInterval(updateCurrentDate, 1000, dataArr);




