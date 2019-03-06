(function ($) {
	$(function(){
		$('.icon').on('click', function(){
			$(this).closest('.navbar').toggleClass('navbar-open');
		});
	});
});