$(window).load(function() {
  setTimeout(function() {
    $("#loader").fadeOut(200);
    setTimeout(function() {
      $("#loader").remove();
      $("#intro").css("animation-play-state","running");
      $("#intro").css("-webkit-animation-play-state","running");
      //setTimeout(function () {
        //$("#title").css("animation-play-state","running");
        //$("#title").css("-webkit-animation-play-state","running");
        setTimeout(function () {
          $("#intro").remove();
          $("#mainmenu").css("animation-play-state","running");
          $("#mainmenu").css("-webkit-animation-play-state","running");
        //}, 1500);
      }, 1500);
    },350);
  }, 1500);
});
