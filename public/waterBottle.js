var waterBottle = {
  color: "green",
  name:"marks kleen kanteen, he's a fiend"
};

/*var hideMeteorites = function (){
    var element = document.getElementById("barf");
    element.style.display = "none";
};*/

$(document).ready(function(){

  $('#barf').css({
    color:"brown"
  });

  $('#btn').click(function(el){
    $("#barf").hide();
  });
});