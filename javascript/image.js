$(document).ready(function(){
  setTimeout(function() {
    $("#loader").fadeOut(250);
    setTimeout(function() {
      $("#loader").remove();
      $("#intro").css("animation-play-state","running");
      $("#intro").css("-webkit-animation-play-state","running");
      setTimeout(function () {
        $("#mainmenu").css("animation-play-state","running");
        $("#mainmenu").css("-webkit-animation-play-state","running");
      }, 1500);
    },350);
  }, 1500);

});
