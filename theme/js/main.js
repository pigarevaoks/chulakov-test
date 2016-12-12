$(function () {
	mobMenu();
});

mobMenu = function () {
	var $items = $('[data-mob-menu-link]'),
			$mobMenu = $('[data-mob-menu]'),
			$mobMenuBtn = $('[data-mob-menu-btn]');

	$mobMenuBtn.on('click', function () {
		$(this).toggleClass('_active');
		$mobMenu.toggleClass('_show');
	});

	$items.on('click', function () {
		if($(this).hasClass('_active')){
			return false;
		}else{
			$items.removeClass('_active');
			$(this).addClass('_active');
			$mobMenu.removeClass('_show');
			$mobMenuBtn.removeClass('_active');
		}
	});
};
