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

// interval delay OR do an event listener for when the user has scrolled down almost to portfolio section, THEN enable window.scroll() , then disable otherwise. 


  // $(function(){   
  //   var $portfolioContent = $('.portfolio-content');
  //   var itemOffset = $portfolioContent.offset().top;

  //   $(window).scroll(function(){
  //       var scrollTop = $(window).scrollTop();
  //       if(scrollTop >= itemOffset){
  //           console.log("item has reached the top");
  //           $('.portfolio-content').css('overflow-y','scroll');
  //           } else {
  //             $('.portfolio-content').css('overflow-y', '');
  //           }
  //   });
  // });



// $(function(){   
//   var itemOffset = $('.portfolio-content').offset().top;

//   $(window).scroll(function(){
//       var scrollTop = $(window).scrollTop();
//       if(scrollTop >= itemOffset){
//           console.log("item has reached the top");
//           $('.portfolio-content').css('overflow-y','scroll');
//           } else {
//             $('.portfolio-content').css('overflow-y', '');
//           }
//   });
// });

// this works:
// $(function(){
//   var itemOffset = $('.portfolio-content').offset().top;

//   $(window).scroll(function(){
//       var scrollTop = $(window).scrollTop();
//       if(scrollTop >= itemOffset){
//           console.log("item has reached the top");
//           $('.portfolio-content').css('opacity','.1');
//           }
//   });
// });

/* ----- Hamburger Menu Toggle ----- */

$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('.nav').toggleClass('mobile-open');
    });

    // Close menu when a nav link is clicked
    $('.nav a').on('click', function(){
        $('.hamburger').removeClass('active');
        $('.nav').removeClass('mobile-open');
    });
});