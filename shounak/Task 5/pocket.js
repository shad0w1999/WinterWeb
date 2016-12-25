$(document).ready(function(){
	$('div[id^="save"]').hover(
		function() {
			$(this).find("img").attr('src','save-hover.png');
		},
		function() {
			$(this).find("img").attr('src','save.png');
		}
	);
	$('div[id^="action"]').hover(
		function() {
			$(this).find("img").attr('src','dot-hover.png');
		},
		function() {
			$(this).find("img").attr('src','dot.png');
		}
	);
});