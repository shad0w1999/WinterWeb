$(document).ready(function() {
	$("#hide").click(function() {
		$("#square").hide();
	});
	$("p").click(function() {
		$(this).hide();
	});
	$("#move").click(function() {
		$("#circle").animate({left: '100px'}).animate({top: '100px'}).animate({left: '0'}).animate({top: '0'});
	});
	$("#click").click(function() {
		$("#counter").text(parseInt($("#counter").text()) + 1);
	});
});