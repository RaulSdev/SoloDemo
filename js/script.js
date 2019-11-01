/* ========================================
                Preloader
======================================== */
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");

});
/* ========================================
                Team
======================================== */
$('.carousel').carousel();

/* ========================================
              Progress Bars
======================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* ========================================
              Responsive Tabs
======================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
/* ========================================
              Porfolio
======================================== */
$(window).on("load", function () {
    //initialize isotope
    $("#isotope-container").isotope({});
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* ========================================
              Magnifier
======================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* ========================================
              Stats
======================================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

$('#blogCarousel').carousel({
    interval: 5000
});
/* ========================================
              Google Map
======================================== */
// $(window).on("load", function initMap() {
//     //Map Variables
//     var addressString = "Plaza Patria, 45160 Zapopan, Jalisco";
//     var myLatlng = {
//         lat: 20.709950
//     , lng: -103.391080
//     };
//     //1. Render Google Map
//      var map = new google.maps.Map(
//          document.getElementById('map'), {
//              zoom: 11,
//              center: myLatlng
//          });
//     //2.add Marker
//        var marker = new google.maps.Marker({
//            position: myLatlng,
//            map: map
//        });

//   });

/* ========================================
              Navigation
======================================== */
/*Show and hide white nav */
$(function () {
    //show/hide nav on page load
    showHideNav();


    $(window).scroll(function () {
        //show/hide nav on window scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white
            $("nav").addClass("white-nav-top");

            //dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //show back to top btn
            $("#back-to-top").fadeIn();
        } else {
            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            //hide back to top btn
            $("#back-to-top").fadeOut();
        }
    }
});

//Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get section id like #about, #work......
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
/* ========================================
              Wow Animation
======================================== */
//Animate on scroll
$(function () {
    new WOW().init();
});
//Home animation on page load
$(window).on("load", function () {
   $("#home-heading-1").addClass("animated fadeInDown");
   $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});