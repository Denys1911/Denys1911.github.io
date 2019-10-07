$(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false
    });
    $('select').styler()
    $('.news__comments').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: false
    });
    $('.menu__btn').on('click', function() {
        $('.menu ul').slideToggle();
    });
})