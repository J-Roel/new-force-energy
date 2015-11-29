window.onload = function(){

	//MENU SLIDER
	$('.menuBox').click( function (){ 
		$('.slidedown').slideToggle('fast');
	});
	$('.slidedown').mouseleave(function() {
		 $(this).slideToggle('fast');
	});

	//BOX CAPTIONS
	$('.box').hover( 
		function () { 
			$(this).find('.caption').slideDown(250);
		},
		function () {
			$(this).find('.caption').slideUp(250);
		}
	);

	// $(document).ready(function(){
	// 	$('#slider1') .cycle({
	// 		fx: 'fade', // here change effect to blindX, blindY, blindZ etc 
	// 		speed: 'slow', 
	// 		timeout: 2000 
	// 	});
	// });




//Scroll JQuery - http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }




}();