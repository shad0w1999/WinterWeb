$(document).ready(function() {


	$('#b1').click(function() {
		$('.part1').hide('slow');
	});

	$('p').click(function(){
		$(this).hide('slow');
	});

	$('#b2').click(function(){
		$('.part3').animate({left: '100px'}).animate({top: '100px'}).animate({left: '0px'}).animate({top: '0px'});
		});

	$('#b3').click(function() {
    		$('.part4').text(parseInt($('.part4').text()) + 1);
    	});


});
	
