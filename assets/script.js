$(document).ready(function () {

    //set up waypoints
    var active = 'active-nav'

    var waypoint = new Waypoint({
        element: $('#about'),
        handler: function (direction) {
            if (direction == 'up') {
                $('.links').removeClass(active);
                $('nav').removeClass('side-nav');
                $('.logo').addClass('logo-hide');
                $('.logo').removeClass('logo-show');
            } else {
                $('nav').addClass('side-nav');
                $('.links').removeClass(active);
                $('#link-about').addClass(active);
                $('.logo').addClass('logo-show');
                $('.logo').removeClass('logo-hide');
            }
        },
        offset: '60%'
    })

    var waypoint2 = new Waypoint({
        element: $('#work'),
        handler: function (direction) {
            if (direction == 'up') {
                $('.links').removeClass(active);
                $('#link-about').addClass(active);
            } else {
                $('.links').removeClass(active);
                $('#link-work').toggleClass(active);
            }
        },
        offset: '60%'
    })

    var waypoint3 = new Waypoint({
        element: $('#contact'),
        handler: function (direction) {
            $('.links').removeClass(active);
            $('#link-contact').toggleClass(active);
            if (direction == 'up') {
                $('.links').removeClass(active);
                $('#link-work').addClass(active);
            } else {
            }
        },
        offset: '60%'
    })


    //reset scroll on refresh
    // history.scrollRestoration = 'manual';

})