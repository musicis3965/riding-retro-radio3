(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', 'images/playbutton-99-101.png');
$('.js2').attr('src', 'images/facebook-logo-transparent-back-70-72.png');
$('.js3').attr('src', 'images/insta-logo-transparent-back-71-73.png');
$('.js4').attr('src', 'images/twitter-logo-transparent-back-67-69.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/playbutton-99-102.png' : 'images/playbutton-99-51.png');
$('.js2').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-70-72.png' : 'images/facebook-logo-transparent-back-70-36.png');
$('.js3').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-71-72.png' : 'images/insta-logo-transparent-back-71-36.png');
$('.js4').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-67-68.png' : 'images/twitter-logo-transparent-back-67-34.png');}else{$('.js').attr('src', (dpi>1) ? 'images/playbutton-99-68.png' : 'images/playbutton-99-34.png');
$('.js2').attr('src', (dpi>1) ? 'images/facebook-logo-transparent-back-70-48.png' : 'images/facebook-logo-transparent-back-70-24.png');
$('.js3').attr('src', (dpi>1) ? 'images/insta-logo-transparent-back-71-48.png' : 'images/insta-logo-transparent-back-71-24.png');
$('.js4').attr('src', (dpi>1) ? 'images/twitter-logo-transparent-back-67-46.png' : 'images/twitter-logo-transparent-back-67-23.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});