$(window).on("load", ()=>{
    $("#transparancy-range").val(0.5);
    $("#transparancy-layer").css("opacity", 0.5);

    const actualImage = new Image();
    actualImage.src = $("#canvas").css("background-image").replace(/url\(['"]*(.*?)['"]*\)/g, '$1');
    if(actualImage.src){
    actualImage.onload = ()=>{
        let cbWidth = $("#canvas-box").width();
        let cbHeight = $("#canvas-box").height();
        let ratio = actualImage.height / actualImage.width;
        $("#canvas").width(cbWidth);
        let calcHeight = ratio * cbWidth;
        if (cbHeight < calcHeight) {
            $("#canvas").height(cbHeight);
            $("#canvas").width(cbHeight / ratio);
        }
        else{
            $("#canvas").height(calcHeight);
        }
    }
}
});

// transparancy
$("#transparancy-range").on("input", (e)=>{
    $("#transparancy-layer").css("opacity", e.target.value);
});

(function(){
    var $content = $('.modal_info').detach();
  
    $('#export').on('click', function(e){
      modal.open({
        content: $content,
        width: 800,
        height: 400,
      });
      $content.addClass('modal_content');
      $('.modal, .modal_overlay').addClass('display');
      $('.modal, .modal_overlay').removeClass('conceal');
      $('.open_button').addClass('load');
    });
  }());
  
  var modal = (function(){
  
    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);
  
    $modal.append($content, $close);
  
    $close.on('click', function(e){
      $('.modal, .modal_overlay').addClass('conceal');
      $('.modal, .modal_overlay').removeClass('display');
      $('.open_button').removeClass('load');
      e.preventDefault();
      modal.close();
    });
  
    return {
      center: function(){
        var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
        var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
        $modal.css({
          top: top + $window.scrollTop(),
          left: left + $window.scrollLeft(),
        });
      },
      open: function(settings){
        $content.empty().append(settings.content);
  
        $modal.css({
          width: settings.width || 'auto',
          height: settings.height || 'auto'
        }).appendTo('body');
  
        modal.center();
        $(window).on('resize', modal.center);
      },
      close: function(){
        $content.empty();
        $modal.detach();
        $(window).off('resize', modal.center);
      }
    };
  }());
  
  