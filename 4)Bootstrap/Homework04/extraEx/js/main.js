(function() {
	'use strict';
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('myForm');
			var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

$('.my-carousel').carousel({
	interval: 4000
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$("input.main-info").attr("maxlength", 13);

$('input.main-info').maxlength({
	alwaysShow: false,
	warningClass: "alert alert-success",
	limitReachedClass: "alert alert-danger",
	separator: ' out of ',
	preText: 'You write ',
	postText: ' chars.',
	validate: true
});


$("input#age").attr("maxlength", 2);

$('input#age').maxlength({
	alwaysShow: false,
	warningClass: "alert alert-success",
	limitReachedClass: "alert alert-danger",
	separator: ' out of ',
	preText: 'You write ',
	postText: ' chars.',
	validate: true
});


