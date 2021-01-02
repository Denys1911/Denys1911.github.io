$(function(){
    $('.slider__inner, .news__comments').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false,
        draggable: true
    });

    $('select').styler();

    $('.menu__btn').on('click', function() {
        $('.menu ul').slideToggle();
    });
});