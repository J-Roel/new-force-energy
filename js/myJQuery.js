window.onload = function(){

  
  // Create cross browser requestAnimationFrame method:
  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}
   
  //var div1 = document.getElementById('bubbles1');
  //var div2 = document.getElementById('bubbles2');
  var opacity1 = document.getElementById('logo');
  var opacity2 = document.getElementById('headerlogo');
  var opacity3 = document.getElementById('smlTitle');
  opacity1.style.opacity = 1;
   
  function parallax(){
   var scrolltop = $(window).scrollTop();//window.pageYOffset // get number of pixels document has scrolled vertically 
   //div1.style.top = -scrolltop * .2 + 'px'; // move bubble1 at 20% of scroll rate
   //div2.style.top = -scrolltop * .5 + 'px'; // move bubble2 at 50% of scroll rate
    
      //Decrease opacity on scroll down
      opa = (1 - (scrolltop * 0.002));
      if (opa > 1) { opa = 1; }
      if (opa < 0) { opa = 0; }
      opacity1.style.opacity = opa;
      opacity3.style.opacity = opa;


      //Increase opacity on scroll down
      opa = (scrolltop * 0.002);
      if (opa > 1) { opa = 1; }
      if (opa < 0) { opa = 0; }
      opacity2.style.opacity = opa;


  }
  window.addEventListener('scroll', function(){ // on page scroll
   requestAnimationFrame(parallax);
  }, false)


//------------------------------------------------------
//SMOOTH SCROLL
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



}();