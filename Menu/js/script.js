/**
 *	PROJECT			:		Mobile Menu
 *	Developer		:		Glean Team
 *	Date			:		25-February-2015
 */
 
 $ ( function() {
	var MobileMenu = {
		init: function() {
			this.toggleMenu();
		},
		toggleMenu: function() {
			$('.toggle-button').click( function() {
				$('ul.menu').toggleClass('show');
			});
			
			$('ul.menu li > a').click( function() {
				$(this).next('ul').toggleClass('show');
			});
		}
	}
	
	$( document ).ready( function() {
		MobileMenu.init();
	});
});