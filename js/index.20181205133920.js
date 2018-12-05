(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-140.png' : 'images/facebook-logo-transparent-back-70.png');
$('.js2').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-142.png' : 'images/insta-logo-transparent-back-71.png');
$('.js3').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-134.png' : 'images/twitter-logo-transparent-back-67.png');
$('.js4').attr('src', (dpi>1) ? 'images/playbutton-198.png' : 'images/playbutton-99.png');
var a='data-src'; if($('.js5 .slide0').hasAttr('src')) { a='src'; } $('.js5 .slide0').attr(a, (dpi>1) ? 'images/img_7375-922.jpg' : 'images/img_7375-461.jpg');
var a='data-src'; if($('.js5 .slide1').hasAttr('src')) { a='src'; } $('.js5 .slide1').attr(a, (dpi>1) ? 'images/img_7383-922.jpg' : 'images/img_7383-461.jpg');

};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.js5 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1000,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 3000});
});