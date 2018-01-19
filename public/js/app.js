$(document).ready(function() {
    console.log('ready!');

    // Intro buttons
    $('#intro-view').on('click', function() {
        $('#intro-events').slideToggle(500);
    });

    $('#slider').flexslider({
        animation: "fade",
        directionNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 4000,
        prevText: '',
        nextText: ''
    });

    $('#slider2').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 3500
    });

    // Awards
    var last = '2017';
    
    $('.year').on('click', function (e) {
        if (e.target.id !== last) {
            clearYears(last);
            $('#' + e.target.id + '-list').removeClass('hidden');
            $('#' + e.target.id).addClass('active');
            last = e.target.id;
        }
    });

    var clearYears = function (i) {
        $('#' + i + '-list').addClass('hidden');
        $('#' + i).removeClass('active');
    }

    // Members

    $('.people').on('click', function(e) {
        console.log(e.target.attributes.value.value);
    });
    
});
