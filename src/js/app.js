$(document).ready(function() {
    console.log('ready!');

    $('#test-btn').on('click', function () {
        console.log('work');
    });

    $(window).on('load', function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
});
