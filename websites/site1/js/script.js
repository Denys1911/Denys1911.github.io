$(document).ready(function(){
    $(".slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout: 3500
    });

    $(".btn-nav").on("click", function() {
        const target = $(this).data("target");
        $(target).toggleClass("nav__list--open");
    });
});

