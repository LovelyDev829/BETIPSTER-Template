(function ($) {
    "use strict";


    jQuery(document).ready(function($){

        $('.dropdown-menu-betipsta').each(
            function(){
                $(this).find('.dropdown-item').on().click(
                    function(e){
                        var thisPrents = $(this).parents();
                        var showSelectedItem = $(this).parents().siblings('.dropdown-toggle');
                        e.preventDefault();

                        

                        if(thisPrents.hasClass('bookmakers')) {
                            showSelectedItem.html($(this).find('.text').html());
                            showSelectedItem.addClass('focused');
                        } else if(thisPrents.hasClass('bkm-category')) {
                            showSelectedItem.html($(this).html());
                            showSelectedItem.addClass('focused');
                        } else if(thisPrents.hasClass('select-sports')) {
                            showSelectedItem.html($(this).find('.text').html());
                            showSelectedItem.addClass('focused');
                        } else {
                            showSelectedItem.html($(this).html());
                            showSelectedItem.addClass('focused');
                       }

                    }
                );

            }
        );

        // testimonial slider
        var testimonialSlider = $('.testimonial-slider');
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            items: 2,
            smartSpeed: 1000,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    

        // back to top
        $(document).on('click', '.back-to-top button',function(){
            $('html,body').animate({
                scrollTop:0
            },3000);
        });

        // initialize live clock
        const clock = new Clock();
        clock.start();

    });

   

    // fixed navbar
           
    $(window).on('scroll', function(){
        var headerSection = $('.header');

        if ($(window).scrollTop() > 100) {
            headerSection.addClass('header-fixed fadeInDown animated');
        } else {
            headerSection.removeClass('header-fixed fadeInDown animated');
        }
        
    });


    $(window).on('load',function(){
        // preLoder
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

    
}(jQuery));	







