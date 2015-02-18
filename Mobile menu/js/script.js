/**
 *	PROJECT			:		Mobile Menu
 *	Developer		:		Glean Team
 *	Date			:		10-February-2015
 */
 
 $ ( function() {
	var MobileMenu = {
		init: function() {
			this.toggleMenu();
		},
		toggleMenu: function() {
			$('.toggle-button').click( function() {
				$('ul').toggleClass('show');
			});
		}
	}
	
	$( document ).ready( function() {
		MobileMenu.init();
	});
});