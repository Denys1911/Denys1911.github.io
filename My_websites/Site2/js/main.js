const menuButton = document.querySelector(".menu-button");
const servicesButtons = document.querySelectorAll(".services__button");

menuButton.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("nav--open");
});

servicesButtons.forEach(function (button) {
    button.addEventListener("click", function() {
        const worksList = document.querySelector(".works-list");
        worksList.classList.toggle('works-list--hide');
    })
});



