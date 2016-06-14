/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Mapbox
    L.mapbox.accessToken = 'pk.eyJ1IjoiamFzZWVtYWJpZCIsImEiOiJjaXBjeDFjc3kwMGFmdDhuajVqOTdkemc1In0.d-fO5iyn5u-xGbQYC3eFqA';
    var map = L.mapbox.map('map', 'jaseemabid.0da3cnd2');
    map.scrollWheelZoom.disable();

})(jQuery); // End of use strict
