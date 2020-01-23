(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -15,
				hoverDelay: 0,
				alignment: 'center'
			});
			
		// Dropdowns.
			$('#subnav > ul').dropotron({
				offsetY: -15,
				hoverDelay: 0,
				alignment: 'center'
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});
	
	/************ GALLERY ************/
	var counter = 0, // to keep track of current slide
		$items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
		numItems = $items.length; // total number of slides
		
	// this function is what cycles the slides, showing the next or previous slide and hiding all the others
	var showCurrent = function(){
		var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  

	  $items.removeClass('show'); // remove .show from whichever element currently has it
	  $items.eq(itemToShow).addClass('show');    
	};

	// add click events to prev & next buttons 
	$('.next').on('click', function(){
		counter++;
		showCurrent(); 
	});
	$('.prev').on('click', function(){
		counter--;
		showCurrent(); 
	});

	// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
	if('ontouchstart' in window){
	  $('.diy-slideshow').swipe({
		swipeLeft:function() {
		  counter++;
		  showCurrent(); 
		},
		swipeRight:function() {
		  counter--;
		  showCurrent(); 
		}
	  });
	}
	
	//inicio slider
	$(window).load(function() {           
		   var i =0; 
		   var images = ['images/portada-menorca7.jpg','images/portada-menorca3.jpg','images/portada-menorca4.jpg','images/portada-menorca.jpg'];
		   var image = $('.menorca#banner');
		   image.css('background-image', 'url("images/portada-menorca.jpg")');
		   setInterval(function(){			
				image.css('background-image', 'url(' + images [i++] +')');
			   if(i == images.length)
				   i = 0;
		   }, 3000);            
	   });

})(jQuery);


