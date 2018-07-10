window.onload = function() {

    var $slider = $('.js-slider'),
        $menuButton = $('.js-menuButton');

    $slider.length && initSlider($slider);
    $menuButton.length && menuToggle($menuButton);
}

function initSlider($slider) {
    
    $slider.slick({
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        prevArrow: '<button class="intro-slider__arrow _prev"></button>',
        nextArrow: '<button class="intro-slider__arrow _next"></button>'
    });
}

function menuToggle($menuButton) {

    $menu = $('.js-menu');

    $menuButton.on('click', function() {
        $menu.toggleClass('_open');
    });

    $menu.find('a').on('click', function() {
        $menu.removeClass('_open');
    });
}