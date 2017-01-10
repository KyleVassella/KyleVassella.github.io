/*----Eased scrolling when clicking page-jump anchors----*/

// $('a[href*=\\#]').on('click', function(event){     
//     event.preventDefault();
//     $('html,body').css("overflow-x", "visible");
//     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
//     $('html,body').css("overflow-x", "hidden");
// });


/* ----- Smooth Scroll Nav Links ----- */

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html').css("overflow","visible");
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    // setTimeout(function() {$('html').css("overflow", "hidden");}, 1000);
});

/* ----- Parallax ----- */

$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
 
   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
		// $('.parallax-stationary').css('background-position','center -'+((scrolledY*0.2))+'px');
		$('.parallax-hero').css('top','-'+((scrolledY*0.5))+'px');
		$('.fish').css('top','-'+((scrolledY*0.8))+'px');
   	}
 
});