$(document).ready(function() {
	$(".account").click(function(){
		$(".form-register").fadeIn(600);
});

	$(".close button").click(function(){
		$(".form-register").fadeOut(600);
});
$(".order_card button").click(function(){
		$(".form-card").fadeIn(600);
});

	$(".close button").click(function(){
		$(".form-card").fadeOut(600);
});
});
$(document).ready(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
});