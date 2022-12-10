var partner = $('.partner');

// Partner Carousel
$(document).ready(function(){
    partner.owlCarousel({
        loop:true,
        items:5,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });
});