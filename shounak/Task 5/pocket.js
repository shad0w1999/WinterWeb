$(document).ready(function(){
	$(".save-button").mouseover(function(){
		$(".save-button img").attr("src","save-hover.png");
	});
	$(".save-button").mouseout(function() {
		$(".save-button img").attr("src","save.png");
	});
	$(".action-button").mouseover(function(){
		$(".action-button img").attr("src","dot-hover.png");
	});
	$(".action-button").mouseout(function() {
		$(".action-button img").attr("src","dot.png");
	});
});