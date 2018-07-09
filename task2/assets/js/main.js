window.onload = function() {
    var $gridElems = $('.js-gridElement'),
        $grid = $('.js-gridWrapper'),
        $slider = $('.js-slider'),
        $menuButton = $('.js-menuButton');

    $slider.length && initSlider($slider);
    $gridElems.length && $grid.length && initGrid($gridElems, $grid);
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

function initGrid($elems, $grid) {
    var settings = {
        rowHeight: parseInt($grid.css('grid-auto-rows')),
        rowGap: parseInt($grid.css('grid-row-gap')),
        columnGap: parseInt($grid.css('grid-column-gap')),
    };

    updateGrid($elems, settings);

    $(window).on('resize', function() {
        updateGrid($elems, settings);
    });
}

function updateGrid($elems, settings) {
    $elems.each(function(_, elem) {
        resizeGridItem(elem, settings)
    });
}

function resizeGridItem(elem, settings) {
    rowSpan = Math.ceil(($(elem).outerHeight() + settings.columnGap + settings.rowGap) / (settings.rowHeight+settings.rowGap)); 
    // <-- (element height) / (grid row height )
    
    $(elem).css('grid-row-end', 'span ' + rowSpan);
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