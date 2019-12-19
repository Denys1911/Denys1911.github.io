$(document).ready(() => {
    const createMenu = () => {
        const menu = new Mmenu( '#my-menu', {
            'extensions': ['fx-menu-slide', 'pagedim-black', 'theme-black', 'position-right', 'border-none'],
            'onClick': {
                preventDefault: true,
                close: true
            },
            'navbar': {
                title: '<a href="#"><img src="./images/logo-1.svg" alt="" class="logo"></a>'
            }
        });

        const api = menu.API;
        const hamburger = $('.hamburger');

        api.bind('open:finish', () => hamburger.addClass('is-active'));
        api.bind('close:finish', () => hamburger.removeClass('is-active'));
    };

    const initializeServicesCarousel = () => {
        const servicesCarousel = $('.services-carousel');

        const setCarouselHeight = () => {
            $('.services-carousel__item').each(function() {
                const item = $(this);
                const itemContentHeight = item.find('.services-carousel__item-content').innerHeight();
                item.find('.services-carousel__item-image').css('height', itemContentHeight);
            });
        };

        servicesCarousel.on('initialized.owl.carousel', () => {
            setTimeout(setCarouselHeight, 100);
        });

        servicesCarousel.owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="icon-angle-double-left"></i>', '<i class="icon-angle-double-right"></i>'],
            dots: false,
            smartSpeed: 700,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        });

        const setEqualHeightsForCarouselItemsContent = () => $('.services-carousel__item-content').equalHeights();

        setEqualHeightsForCarouselItemsContent();
        window.addEventListener('resize', setEqualHeightsForCarouselItemsContent);
    };

    const initializeCommentsCarousel = () => {
        $('.comments-carousel').owlCarousel({
            loop: true,
            items: 1,
            smartSpeed: 700
        });
    };

    const initializePartnersCarousel = () => {
        $('.partners-carousel').owlCarousel({
            loop: true,
            smartSpeed: 700,
            dots: false,
            nav: true,
            navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1100: {
                    items: 4
                }
            }
        });
    };

    const createGallery = () => {
        $('.fotorama').fotorama({
            width: 1000,
            maxwidth: '100%',
            arrows: true,
            nav: 'thumbs',
            thumbwidth: 80,
            thumbheight: 60,
            thumbmargin: 10,
            thumbborderwidth: 5,
            keyboard: true,
            click: true
        });
    };

    const controlFormConfirmation = () => {
        function handleSubmitOnForm() {
            const currentThis = $(this);

            $.ajax({
                type: 'GET',
                url: 'mail.php',
                data: currentThis.serialize()
            }).done(() => {
                currentThis.find('.form__success')
                    .addClass('active')
                    .css('display', 'flex')
                    .hide()
                    .fadeIn();

                setTimeout(() => {
                    currentThis.find('.form__success')
                        .removeClass('active')
                        .fadeOut()
                        .trigger('reset');
                }, 2500);
            });

            return false;
        }

        $('.form').submit(handleSubmitOnForm);
    };

    const stylizeSelect = () => {
        $('select').selectize({
            allowEmptyOption: true,
            addPrecedence: true
        });
    };

    const controlVisibilityOfScrollToTopBtn = () => {
        const scrollToTopBtn = $('.up');

        $(window).scroll(function() {
            const currentThis = $(this);

            if (currentThis.scrollTop() > currentThis.height()) {
                scrollToTopBtn.css('right', '25px');
            }
            else {
                scrollToTopBtn.css('right', '-100px');
            }
        });
    };

    const controlClickOnScrollToTopBtn = () => {
        $('.up').click(() => {
            $('html, body').stop()
                .animate({scrollTop: 0}, 'slow', 'swing');
        });
    };

    const hidePreloader = () => $(window).on('load', () => $('.preloader').fadeOut('slow'));

    createMenu();
    initializeServicesCarousel();
    initializeCommentsCarousel();
    initializePartnersCarousel();
    createGallery();
    controlFormConfirmation();
    stylizeSelect();
    controlVisibilityOfScrollToTopBtn();
    controlClickOnScrollToTopBtn();
    hidePreloader();
});
