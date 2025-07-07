$(document).ready(function(){
	$('.header__navbar-btn').click(function(){
		$(this).toggleClass('active');
		$('.header__navbar-list').stop(true, true).fadeToggle(500);
	});
});