'use strict'

$(function () {
	mobMenu();
	chosen();
	validateForm();
});
// mobile menu
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
//custom select
var chosen = function () {
	$('[data-chosen]').chosen({
		disable_search_threshold: 1000,
		width: "100%"
	})
}
//validation form
var validateForm = function () {
	$('input[name="card[number_1]"], input[name="card[number_2]"], input[name="card[number_3]"], input[name="card[number_4]"]').inputmask('9999', {
		placeholder: "",
		oncomplete: function(){
			$(this).next().focus()
		}
	});
	$('input[name="card[name]"]').inputmask("A", {
		placeholder: '',
		greedy: false,
		repeat: 100,
		definitions: {
			'A': {
				validator: "[A-Za-z ]",
				cardinality: 1
			}
		}
	});
	$('input[name="card[code]"]').inputmask('999', { placeholder: "" });

	$("[data-card-form]").validate({
	    rules: {
	      "card[number_1]": {
	        required: true,
	        number: true,
	        minlength: 4,
	        maxlength: 4
	      },
				"card[number_2]": {
					required: true,
					number: true,
					minlength: 4,
					maxlength: 4
				},
				"card[number_3]": {
					required: true,
					number: true,
					minlength: 4,
					maxlength: 4
				},
				"card[number_4]": {
					required: true,
					number: true,
					minlength: 4,
					maxlength: 4
				},
				"card[month]": { required: true },
				"card[year]": { required: true },
				"card[name]": {
					required: true,
					minlength: 4
				},
				"card[code]": {
					required: true,
					number: true,
					minlength: 3,
					maxlength: 3
				}
	  	},
			errorPlacement: function(error,element) {
				return true;
			},
	});
}
