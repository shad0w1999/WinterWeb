$(document).ready(function() {
	$("#square").click(function() {
		$("#circle").animate({top: 0}, 0).animate({top: '100%'}, 1500);
	});
});