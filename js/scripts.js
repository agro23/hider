$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#hide-images").toggle();
    $("#show-images").toggle();
    $("img").slideToggle(500);
  });
});

/*
$("#walrus-showing").fadeToggle();
$("#walrus-hidden").fadeToggle();
*/
