(function($, window, document) {
    'use strict';
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };

    $(document).ready(function() {


        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-row').on('inview', function(event, isInView) {
            $('.count-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function() {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });
    });
})(jQuery, window, document);



$(document).ready(function() {
    $btn2 = $('#img2').find('button');
    $img2 = $('#img2').find('img');
    $img2.hide();
    $('#img2').on('click', 'button', function() {
        $img2.slideToggle(2000);
        $btn2.toggleClass('hide');
    });

    $btn3 = $('#img3').find('button');
    $img3 = $('#img3').find('a');
    $img3.hide();
    $('#img3').on('click', 'button', function() {
        $img3.slideToggle(2000);
        $btn3.toggleClass('hide');
    });

    $btn4 = $('#img4').find('button');
    $img4 = $('#img4').find('img');
    $img4.hide();
    $('#img4').on('click', 'button', function() {
        $img4.slideToggle(2000);
        $btn4.toggleClass('hide');
    });


    $btn5 = $('#img5').find('button');
    $img5 = $('#img5').find('img');
    $img5.hide();
    $('#img5').on('click', 'button', function() {
        $img5.slideToggle(2000);
        $btn5.toggleClass('hide');
    });

    $btn6 = $('#img6').find('button');
    $img6 = $('#img6').find('img');
    $img6.hide();
    $('#img6').on('click', 'button', function() {
        $img6.slideToggle(2000);
        $btn6.toggleClass('hide');
    });
});



$(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});

var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
    var bubble;
    for (var i = 0; i < noOfBubbles; i++) {
        bubble = createBubble();
        wrapper.appendChild(bubble);
    }
}

function createBubble() {
    var circleContainer = document.createElement('div');
    circleContainer.classList.add('circle_container');
    circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

    var circle = createCircle();
    circleContainer.appendChild(circle);

    return circleContainer;
}

function createCircle() {
    var circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

    var side = (5 + Math.floor(Math.random() * 5)) + 'px';
    circle.style.width = side;
    circle.style.height = side;

    return circle;
}