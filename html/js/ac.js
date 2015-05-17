

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function() {

    /***************** Waypoints ******************/

    $('.wp0').waypoint(function() {
        $('.wp0').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });

    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });


});    


// Fixed menu.
var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("fix-header");
  } else {
    wrap.removeClass("fix-header");
  }
  
});

