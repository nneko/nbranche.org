(function( $ ) {
    var clicked = false;
    $('.navmenu').on('click',function(){
        if(clicked) {
            $('.navmenu-item').css({"display": "none"});
            clicked = false;
        }
        else {
          if ($(window).innerWidth() < 701) {
            $('.navmenu-item').css({
                "display": 'inline'});
          }
          else {
            $('.navmenu-item').css({
                "display": 'inline'});
          }
          clicked = true;
        }
    });

    $(window).resize(function(){
        $('.navmenu-item').each(function() {
                var item = $(this);
                if($(item).css("display") != "none") {
                    $(item).css({"display":"none"});
                }
        });
        clicked = false;
    });
})(window.jQuery);
