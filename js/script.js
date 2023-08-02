// Window Load screen

$(window).on('load', function () {

     // Loading Page
     $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

    // $(".sliderHome img, .main-body-slider").height($(document).height());

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Scroll Fix Header
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('header').addClass('header-fixed')
            }else{
                $('header').removeClass('header-fixed')
            }
        }
    });

    // Click Add class Link
    $(document).on("click", "header ul li",function(e) {
        e.preventDefault()
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Scroll For Section
    $(document).on("click", "header ul li a",function(e) {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 1000);
        e.preventDefault();
        if ($(window).width() < 990) {
            $(".handle").toggleClass("closed");
            $("header").toggleClass("back");
            $(".overlay").toggleClass("back");
         }
    });

    // Click Open Nav Mobile
    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed");
        $("header ul").toggleClass("back");
        $(".overlay").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    // Slider Skills
    $('#sliderHome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:false,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});