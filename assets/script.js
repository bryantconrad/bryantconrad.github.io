$(document).ready(function () {

    var active = 'active-nav'

    //@@@@@ TO DO - fix active highlight when clicking on navigation links

    var waypoint = new Waypoint({
        element: $('#about'),
        handler: function (direction) {
            if (direction == 'up') {
                $('.links').removeClass(active);
                $('nav').removeClass('side-nav');
                // $('#splash').show();
            } else {
                // $('#splash').hide();
                $('nav').addClass('side-nav');
                $('.links').removeClass(active);
                $('#link-about').addClass(active);
            }
        },
        offset: '50%'
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
        offset: '50%'
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
        offset: '50%'
    })


})