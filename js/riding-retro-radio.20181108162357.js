(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/playbutton-172.png' : 'images/playbutton-86.png');
$('.js2').attr('src', (dpi>1) ? 'images/streamwithtunein-788.png' : 'images/streamwithtunein-394.png');
$('.js3').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-copy-480.png' : 'images/ridingretroplainsquare_clipped_rev_2-copy-240.png');

var a='data-src'; if($('.js6 .slide0').hasAttr('src')) { a='src'; } $('.js6 .slide0').attr(a, (dpi>1) ? 'images/img_7375-832.jpg' : 'images/img_7375-416.jpg');
var a='data-src'; if($('.js6 .slide1').hasAttr('src')) { a='src'; } $('.js6 .slide1').attr(a, (dpi>1) ? 'images/img_7383-832.jpg' : 'images/img_7383-416.jpg');




};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js6 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1000,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 3000});
});