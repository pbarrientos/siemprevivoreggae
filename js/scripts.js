


$(document).ready(function(){

	var sliderTimeout;
	function sliderAutoplay(){
		$( '#slider1' ).trigger( 'nextSlide' );
		console.log("autoplay");
		sliderTimeout = setInterval( 'sliderAutoplay', 5000 );
	}

	/*
	 *  YT player overlay
	*/
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});

		$(".fancybox-media").eq(0).trigger('click');

		/*$('#twitter').followbox({
		   	'user' : 'vivoreggae',
		   	'height' : '170px',
		   	'width' : '250px'
		});*/


		

		$( '#slider1' ).lemmonSlider({
			infinite: true
		});

	//sliderAutoplay();


		
 });


