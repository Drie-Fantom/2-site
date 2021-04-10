$(document).ready(function(){
	$('.menu__icon').click(function(event){
		$('.menu__icon,.lang__list,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
jQuery(document).ready(function() {
jQuery("a.scrollto").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
return false;
});
});