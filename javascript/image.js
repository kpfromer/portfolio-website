/*
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};
//var imagesArr = [];
// Add intro-1.jpg to intro-15.jpg
for(var i = 1; i <= 10; i++) {
  //imagesArr.push("photo" + i + ".jpg");
  $.preloadImages("imgs/photo" + i + ".jpg");
}

    var change_img_time     = 10000;
    var transition_speed    = 1000;

    var simple_slideshow    = $("#intro"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed*1.5);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
*/
