(function($) {
    // 'use strict';

    function update() {
	  $('#clock').html(moment().format('D MMMM YYYY, h:mm:ss A'));
	}

	setInterval(update, 1000);

	$(".regular").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	$(".lazy").slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	});

	$(".latestevents").slick({
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("menu");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("fixed-top")
	  } else {
		navbar.classList.remove("fixed-top");
	  }
	}

	/*(var topLimit = $('#sidebar').offset().top;
	$(window).scroll(function() {
	  if (topLimit <= $(window).scrollTop()) {
	    $('#sidebar').addClass('stickIt')
	  } else {
	    $('#sidebar').removeClass('stickIt')
	  }
	})
	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var footer_top = $("#footer").offset().top;
	    var div_top = $('.page-content').offset().top;
	    var div_height = $("#sidebar").height();
	    
	    if (window_top + div_height > footer_top)
	        $('#sidebar').removeClass('stick');    
	    else if (window_top > div_top) {
	        $('#sidebar').addClass('stick');
	    } else {
	        $('#sidebar').removeClass('stick');
	    }
	}

	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});*/
})(jQuery);