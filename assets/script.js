$(document).ready(function () {

    $('#project-links').hide();
    $('.project').hide();
    var isEnabled = false;

    //create animateCSS function
    const animateCSS = (element, animation, prefix = 'animate__') =>
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {
                once: true
            });
        });


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
                $('#random-output').removeClass('random-output-hover');
            } else {
                $('nav').addClass('side-nav');
                $('.links').removeClass(active);
                $('#link-about').addClass(active);
                $('.logo').addClass('logo-show');
                $('.logo').removeClass('logo-hide');
                randomInput();
                animateCSS('#random-output', 'bounce').then((message) => {
                    $('#random-output').addClass('random-output-hover');
                    isEnabled = true;
                });
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

                // don't show on small screens
                if (window.matchMedia("(min-width: 700px").matches) {
                    $('#project-links').show(100);
                }
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

    function randomInput() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        $('#random-output').html(quotes[randomNumber]);
    }

    randomInput();

    $('#random-output').mouseenter(function () {
        if (isEnabled) {
            randomInput();
        }
    })


    //toggle work sections

    var card, article;

    $('.card-cover').click(function () {
        card = $(this).parent();
        article = card.children('article');
    })

    $('.card-cover, .xout').click(function () {
        $('.card-cover').toggle();
        article.toggle();
        card.toggleClass('active-card');
        $('body').toggleClass('noscroll');
    })


})