const navButton = document.querySelector(".nav-button");

navButton.addEventListener('click', function () {
    const navMenu = document.querySelector(".nav");
    navMenu.classList.toggle("nav--open");
});