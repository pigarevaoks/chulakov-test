'use strict'

$(function () {
	mobMenu();
});

var mobMenu = function() {
	var $menuBtn = $('[data-mob-menu-btn]'),
			$menu = $('[data-mob-menu]'),
			$close = $menu.find('[data-mob-menu-close]'),
			mobMenuOpen = false;

	$menuBtn.on('click',function(){
		if ($(this).hasClass('_active')) {
			_hide();
		} else {
			_show();
		}
	});

	$close.on('click', function () {
		_hide();
	});

	function _show(){
		mobMenuOpen = true;
		$menu.addClass('_show');
		$menuBtn.addClass('_active');
		$('body, html').addClass('overflow-hidden');
	}

	function _hide(){
		mobMenuOpen = false;
		$menu.removeClass('_show');
		$menuBtn.removeClass('_active');
		$('body, html').removeClass('overflow-hidden');
	}
}
