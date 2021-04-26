$(document).ready(function () {

    $('#project-links').hide();
    $('.project').hide();

    
    //set up waypoints
    var active = 'active-nav';

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
                $('#project-links').hide(100);
            } else {
                $('.links').removeClass(active);
                $('#link-work').toggleClass(active);
                $('#project-links').show(100);
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
                $('#project-links').show(100);
            } else {
                $('#project-links').hide(100);
            }
        },
        offset: '60%'
    })


    //reset scroll on refresh
    // history.scrollRestoration = 'manual';


    //random "I like to" generator

    var quotes = [
        'try new things.',
        'learn.',
        'improve.',
        'iterate.',
        'optimize.',
        'take pride in it.',
        'have fun.',
        'experiment.',
        'solve problems.',
        'collaborate.',
        'reflect.',
        'innovate.',
        'test.',
        're-test.',
        'communicate.',
        'explore.',
        'plan.',
        'brainstorm.',
        'ideate.',
        'deliberate.',
        'make it different.',
        'make something new.',
        'pay attention to details.',
        'care.',
        'program.',
        'get inspired.',
        'find new ideas.',
        'put together different ideas.',
        'start over.'
    ]

    var randomInput = function () {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        $('#random-output').html(quotes[randomNumber]);
    }

    randomInput();

    $('#random-output').mouseenter(function () {
        randomInput();
    })


    //toggle work sections

    var card, logo, article;

    $('.card-cover').click(function () {
        card = $(this).parent();
        logo = $(this).children('img');
        article = card.children('article');
        console.log(logo);
    })

    $('.card-cover, .xout').click(function () {
        logo.toggle();
        article.toggle();
        card.toggleClass('active-card');
        $('body').toggleClass('noscroll');
    })


})