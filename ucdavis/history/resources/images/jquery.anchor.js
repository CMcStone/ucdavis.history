/*******

	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.
	
*****/
		


jQuery(document).ready(function() {
	jQuery("a.anchorLink").anchorAnimate()
});

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this
		jQuery(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = jQuery(caller).attr("href")
			
			var destination = jQuery(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}


var name = "#floatMenu";
var menuYloc = null;
	
jQuery(document).ready(function(){
	if(jQuery(name).length) {
		setTimeout('jQuery("#content-notice").slideDown("slow");',400);
		menuYloc = parseInt(jQuery(name).css("top").substring(0,jQuery(name).css("top").indexOf("px")));
		jQuery(window).scroll(function () { 
			if (jQuery(document).scrollTop() >= menuYloc) {
				var offset = 20 + jQuery(document).scrollTop() + "px";
				jQuery(name).animate({top:offset},{duration:1100,queue:false});
			} else {
				jQuery(name).stop().css({'top' : menuYloc});
			}
		});
	}
}); 
