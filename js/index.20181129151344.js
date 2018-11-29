(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-460.png' : 'images/ridingretroplainsquare_clipped_rev_2-230.png');
$('.js2').attr('src', (dpi>1) ? 'images/playbutton-198.png' : 'images/playbutton-99.png');
$('.js3').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-140.png' : 'images/facebook-logo-transparent-back-70.png');
$('.js4').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-142.png' : 'images/insta-logo-transparent-back-71.png');
$('.js5').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-134.png' : 'images/twitter-logo-transparent-back-67.png');
var a='data-src'; if($('.js6 .slide0').hasAttr('src')) { a='src'; } $('.js6 .slide0').attr(a, (dpi>1) ? 'images/img_7375-832.jpg' : 'images/img_7375-416.jpg');
var a='data-src'; if($('.js6 .slide1').hasAttr('src')) { a='src'; } $('.js6 .slide1').attr(a, (dpi>1) ? 'images/img_7383-832.jpg' : 'images/img_7383-416.jpg');
$('.js8').attr('src', 'images/79b01f_592cda91164548c5a87ca807c463cae2-mv2-207.png');
$('.js9').attr('src', 'images/cooltext281580030645491-229.png');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-368.png' : 'images/ridingretroplainsquare_clipped_rev_2-184.png');
$('.js2').attr('src', (dpi>1) ? 'images/playbutton-158.png' : 'images/playbutton-79.png');
$('.js3').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-114.png' : 'images/facebook-logo-transparent-back-57.png');
$('.js4').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-114.png' : 'images/insta-logo-transparent-back-57.png');
$('.js5').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-108.png' : 'images/twitter-logo-transparent-back-54.png');
var a='data-src'; if($('.js6 .slide0').hasAttr('src')) { a='src'; } $('.js6 .slide0').attr(a, (dpi>1) ? 'images/img_7375-982.jpg' : 'images/img_7375-491.jpg');
var a='data-src'; if($('.js6 .slide1').hasAttr('src')) { a='src'; } $('.js6 .slide1').attr(a, (dpi>1) ? 'images/img_7383-982.jpg' : 'images/img_7383-491.jpg');
$('.js8').attr('src', 'images/79b01f_592cda91164548c5a87ca807c463cae2-mv2-166.png');
$('.js9').attr('src', (dpi>1) ? 'images/cooltext281580030645491-366.png' : 'images/cooltext281580030645491-183.png');}else{$('.js').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-152.png' : 'images/ridingretroplainsquare_clipped_rev_2-76.png');
$('.js2').attr('src', (dpi>1) ? 'images/playbutton-68.png' : 'images/playbutton-34.png');
$('.js3').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-48.png' : 'images/facebook-logo-transparent-back-24.png');
$('.js4').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-46.png' : 'images/insta-logo-transparent-back-23.png');
$('.js5').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-46.png' : 'images/twitter-logo-transparent-back-23.png');
var a='data-src'; if($('.js6 .slide0').hasAttr('src')) { a='src'; } $('.js6 .slide0').attr(a, (dpi>1) ? 'images/img_7375-410.jpg' : 'images/img_7375-205.jpg');
var a='data-src'; if($('.js6 .slide1').hasAttr('src')) { a='src'; } $('.js6 .slide1').attr(a, (dpi>1) ? 'images/img_7383-410.jpg' : 'images/img_7383-205.jpg');
$('.js8').attr('src', (dpi>1) ? 'images/79b01f_592cda91164548c5a87ca807c463cae2-mv2-138.png' : 'images/79b01f_592cda91164548c5a87ca807c463cae2-mv2-69.png');
$('.js9').attr('src', (dpi>1) ? 'images/cooltext281580030645491-154.png' : 'images/cooltext281580030645491-77.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
$('.js6 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1000,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 3000});
});