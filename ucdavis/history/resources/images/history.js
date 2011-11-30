
(function($){
	
	if(!document.defaultView || !document.defaultView.getComputedStyle){
		var oldCurCSS = jQuery.curCSS;
		jQuery.curCSS = function(elem, name, force){
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
})(jQuery);

(function($) {
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			fx.start = [start[0],start[2]];
			
			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);









jQuery("#menu a:not(.active)").css({backgroundPosition: '25px 5px'})
	.mouseover(function(){
		jQuery(this).stop().animate( { backgroundPosition:"(25px -26px)" }, {duration:400} );
    }).mouseout(function(){
		jQuery(this).stop().animate({backgroundPosition: "(25px 5px)"}, {duration:250} );
    });

jQuery("#content-highlight-areas-thumbs img").fadeTo(0, .2)
	.mouseover(function(){
		jQuery(this).stop().fadeTo(650, 1);
    }).mouseout(function(){
		jQuery(this).stop().fadeTo(450, .2);
    });


function hideAll() {
	jQuery("#content-highlight-areas-descrip #highlight-africa").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-asia").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-samerica").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-europe").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-middleeast").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-usa").stop().fadeOut(450);
	jQuery("#content-highlight-areas-descrip #highlight-world").stop().fadeOut(450);
};


jQuery("#content-highlight-areas-thumbs #thumb-africa").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-africa').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-asia").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-asia').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-samerica").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-samerica').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-europe").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-europe').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-middleeast").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-middleeast').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-usa").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-usa').stop().fadeIn(650);",460); });
jQuery("#content-highlight-areas-thumbs #thumb-world").click(function () { hideAll(); setTimeout("jQuery('#content-highlight-areas-descrip #highlight-world').stop().fadeIn(650);",460); });

jQuery("#undergrad-notice-close").click(function() {
	jQuery.cookie('hide_undergrad_mailing_list', true, { expires: 99999 });
	jQuery("#content-notice").slideUp("slow");
});

jQuery("#friends-notice-close").click(function() {
	jQuery.cookie('hide_friends_mailing_list', true, { expires: 99999 });
	jQuery("#content-notice").slideUp("slow");
});
