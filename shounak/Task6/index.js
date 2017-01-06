$(document).ready(function(){
  $("#btn1").click(function(){
    $("#p1").toggle();
  });
  $("#p21").click(function(){
    $("#p21").hide();
  });
  $("#p22").click(function(){
    $("#p22").hide();
  });
  $("#p23").click(function(){
    $("#p23").hide();
  });
  $("#p24").click(function(){
    $("#p24").hide();
  });
  $("#p25").click(function(){
    $("#p25").hide();
  });
  $("#btn3").click(function(){
        var div = $("#p3");
        div.animate({left:'+=100px'}, "slow");
        div.animate({top:'+=100px'}, "slow");
        div.animate({left: '-=100px'}, "slow");
        div.animate({top: '-=100px'}, "slow");
    });
  $("#clicker").click(function(){
    $("#counter").html(function(i,val) {
      return val * 1 + 1;
    });
  });
});
