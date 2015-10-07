$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider').slides({
			generatePagination: false,
			generateNextPrev: true,
			container: 'container',
			effect: 'fade',
			slideSpeed: 500,
			play: 10000,
			pause: 2500,
			animationStart: function() {
				$('.slider h2').stop().animate({
					'margin-left': '100px',
					'opacity': '0'
				}, 250);
				$('.slider .container p').stop().animate({
					'margin-left': '-100px',
					'opacity': '0'
				}, 250);
			},
			animationComplete: function() {
				$('.slider h2').css({
					'margin-left': '-100px',
				});
				$('.slider h2').stop().animate({
					'margin-left': '0',
					'opacity': '1'
				}, 250);
				$('.slider .container p').css({
					'margin-left': '100px'
				});
				$('.slider .container p').stop().animate({
					'margin-left': '0',
					'opacity': '1'
				}, 250);
			}
		});
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	$('.places .gallery > div a').hover(
		function() {
			$(this).parent().addClass('hover');
		},
		function() {
			$(this).parent().removeClass('hover');
		}
	);
	$('a.zoom').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
			$(this).parent().addClass('focus');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
			if ( $(this).val().length > 0 ) {
				$(this).parent().addClass('complete').removeClass('focus');
			}
			else {
				$(this).parent().removeClass('focus complete');
			}
		});
	});
	$('.form p span, .modal p span').bind('click', function(event) {
		$(this).parent().find('input, textarea').focus();
		event.preventDefault();
	});
	$('.modal').append('<span class="close"></span>');
	$('[data-open]').bind('click', function(event) {
		$('.modal').stop(true,true).fadeOut(500);
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(500);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < 0 ) {
			h = 0;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(500);
		event.preventDefault();
	});
	$('.fade, .modal .close').bind('click', function(event) {
		$('.fade, .modal').stop(true,true).fadeOut(500);
		event.preventDefault();
	});
});