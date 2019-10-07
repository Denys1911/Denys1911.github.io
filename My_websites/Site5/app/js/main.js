/// *** Mmenu *** ///
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new Mmenu( "#my-menu", {
            "extensions": [
               "fx-menu-zoom",
               "pagedim-black",
               "theme-black",
               "position-right",
               "border-none"
            ],
            "onClick": {
                preventDefault: true,
                close: true
            },
            "navbar": {
                title: '<a href="#"><img src="./images/logo-1.svg" alt="" class="logo"></a>'
            }
         });

        const api = menu.API;

        api.bind( "open:finish",
            () => {
                document.querySelector('.hamburger').classList.add('is-active')
            }
        );
        api.bind( "close:finish",
            () => {
                document.querySelector('.hamburger').classList.remove('is-active')
            }
        );
    }
);
/// *** Mmenu *** ///

$(document).ready(function(){
    /// **** OWL CAROUSEL(1) *** ///

    /// *** Function "Same width" initialize *** ///
    $(".services-carousel").on('initialized.owl.carousel', function(){
        setTimeout(function() {
            carouselWidth()
        }, 100);
    });
    /// *** Function "Same width" initialize *** ///

    $(".services-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: [
            '<i class="icon-angle-double-left"></i>', '<i class="icon-angle-double-right"></i>'
        ],
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

    /// *** Function for the same width (carousel item and picture) *** ///
    function carouselWidth() {
        $('.services-carousel__item').each(function() {
            let ths = $(this),
                thsheight = ths.find('.services-carousel__item-content').innerHeight();
                ths.find('.services-carousel__item-image').css('height', thsheight);
        });
    };
    /// *** Function for the "Same width" (carousel item and picture) *** ///

    /// **** OWL CAROUSEL(1) *** ///

    //resize window
    function onResize(){
        $('.services-carousel__item-content').equalHeights();
    }onResize();

    window.addEventListener("resize", function() {
        onResize();
    }, false);
    //resize window

    // FORORAMA
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
      // FORORAMA

    //E-mail Ajax Send
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "GET",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find(".form__success").addClass("active").css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
                // Done Functions
                $(th).find(".form__success").removeClass("active").fadeOut();
				th.trigger("reset");
			}, 2500);
		});
		return false;
    });
    //E-mail Ajax Send

    /// *** SELECTIZE *** ///
    $('select').selectize({
        allowEmptyOption: true,
        addPrecedence: true
    });
    /// *** SELECTIZE *** ///

    /// **** OWL CAROUSEL(2) *** ///
    $('.comments-carousel').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700
    })
    /// **** OWL CAROUSEL(2) *** ///

    /// **** OWL CAROUSEL(3) *** ///
    $('.partners-carousel').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: [
            '<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'
        ],
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
    })
    /// **** OWL CAROUSEL(3) *** ///

    /// *** BUTTON UP *** ///
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $('.up').css('right', '25px');
        }
        else {
            $('.up').css('right', '-100px');
        }
    });

    $('.up').click(function(){
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    }) 
    /// *** BUTTON UP *** ///

    /// *** PRELOADER *** ///
    $(window).on('load', function(){
        $('.preloader').fadeOut('slow');
    })
});
