var waterBottle = {
  color: "green",
  name: "maks klean kanteen, he's a fiend"
};

var hideMeteorites = function() {
  var element = document.getElementById("barf");
  element.style.visibility = "hidden";
};


$(document).ready(function() {
  $('#barf').css({
    color: 'red'
  });
  
  $('#btn').click(function() {
    $('#barf').hide();
  });  
});