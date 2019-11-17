const navBtn = document.querySelector('.header__nav-btn');
const navList = document.querySelector('.header__nav-list')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('header__nav-btn--active');
    navList.classList.toggle('header__nav-list--active')
});