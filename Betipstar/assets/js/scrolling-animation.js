// affiliate image animation when scroll
(function ($) {
    "use strict";
    
    $(window).on("scroll", function(){
        var $section = $('#part-img');
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.part-img').addClass('shape-active');
        }
    });

}(jQuery));