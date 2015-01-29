/*
	Author Name : Zia ur Rehman
	Plugin Name : zAccordion
	Version		: 1.0.0
	Description : This is my Own plugin.
*/
jQuery.fn.zAccordion = function( options ) {
// Bob's default settings:
var defaults = {
	ShowSubCat 		: false,
	SubMenuClass  	: 'submenu',
	SubSubMenuClass : 'subsubmenu',
	ActiveClass		: 'active',
	toggle			: false

};
var settings = $.extend( {}, defaults, options );
	el 	= $(this);
	li 	= el.children('li');
	a 	= li.children('a');
	ul 	= li.children('ul')
	sli = ul.children('li');
	slia = sli.children('a');
	ssul = sli.children('ul')
	ssli = ssul.children('li');
	ssa  = ssli.children('a');
	init = function  (argument) {
		ul.addClass(settings.SubMenuClass);
		ssul.addClass(settings.SubSubMenuClass);
		el.addClass('z-accordion');
		el.wrap('<div class="my-item" />');
	}
	
	return this.each(function() {
		init();
		if(settings.ShowSubCat){}
		else{ul.hide();ssul.hide()}
		a.on('click', function (event) {
			if($(this).attr('href') == '#'){
				event.preventDefault();
			}
			if(settings.toggle){
				if($(this).hasClass(settings.ActiveClass)){
					$(this).next().find('.'+settings.ActiveClass).removeClass(settings.ActiveClass);
					//$(this).next().slideUp()
					$(this).next().children('li').children('ul').slideUp();
					$(this).removeClass(settings.ActiveClass);
					$(this).next().slideUp();
				}
				else{
					$(this).addClass(settings.ActiveClass).next().slideDown(500);
				}
			}
			else{
				ssul.slideUp(400);
				ul.not($(this).next()).slideUp(400);
				a.removeClass(settings.ActiveClass);
				slia.removeClass(settings.ActiveClass);
				$(this).addClass(settings.ActiveClass).next().slideDown(500)
			}
		});
		slia.on('click', function (event) {
			if($(this).attr('href') == '#'){
				event.preventDefault();
			}
			if(settings.toggle){
				if($(this).hasClass(settings.ActiveClass)){
					$(this).removeClass(settings.ActiveClass);
					$(this).next().slideUp();
				}
				else{
					$(this).addClass(settings.ActiveClass).next().slideDown(500);
				}
			}
			else{
				ul.not($(this).parent().parent()).slideUp(400)
				ssul.not($(this).next()).slideUp(400);
				slia.removeClass(settings.ActiveClass);
				$(this).addClass(settings.ActiveClass).next().slideDown(500)
			}
		});
	});
};
