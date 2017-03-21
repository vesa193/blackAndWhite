//settings for navbar menu

var main = function() {
	$("#hamburger").click(function() {
		$("#menu").toggleClass('closed');
	});
};

$(document).ready(main);

//Carousel

$('.carousel').carousel();

//settings for hover images

$(document).ready(function() {
	$("#img3").mouseover(function() {
		$("#hover-text, #heart, .overlay-img3").slideDown("fast").delay(200).css("visibility", "visible");
	});

	$("#img3").mouseleave(function() {
		$("#hover-text, #heart, .overlay-img3").fadeOut().delay(200).css("visibility", "visible");
	});
});







