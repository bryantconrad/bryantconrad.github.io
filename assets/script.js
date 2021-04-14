$(document).ready(function () {

    $('#project-links').hide();

    const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
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

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
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

})