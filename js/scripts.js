$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).next(".hidden-text").toggle();
    //$(".hidden-text").toggle();
  });
});
