window.onload = function() {
    var $gridElems = $('.js-gridElement'),
        $grid = $('.js-gridWrapper'),
        $slider = $('.js-slider');

    $slider.length && initSlider($slider);
    $gridElems.length && $grid.length && initGrid($gridElems, $grid);
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

    rowSpan = Math.ceil(($(elem).height() + settings.columnGap + settings.rowGap) / (settings.rowHeight+settings.rowGap)); 
    // <-- (element height) / (grid row height )
    
    $(elem).css('grid-row-end', 'span ' + rowSpan);
 }

