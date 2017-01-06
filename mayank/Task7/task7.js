$(document).ready(function(){

	$(document).click(function(){

		$('.circle').fadeIn('slow');
	

      	var colorR = Math.floor((Math.random() * 256));
      	var colorG = Math.floor((Math.random() * 256));
      	var colorB = Math.floor((Math.random() * 256));
      	$('.circle').css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");


      	$('.circle').fadeOut('slow');
      	
    });
  });
