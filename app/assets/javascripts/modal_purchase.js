$(function() {

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    let cw = $('.modal-container__modal-window').outerWidth();
    let ch = $('.modal-container__modal-window').outerHeight();
    $('.modal-container__modal-window').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }

  locateCenter();
  $(window).resize(locateCenter);

  $('.author-purchase-btn').on('click', function() {
    var note_id = $(this).attr("value")
    $(".modal-container__purchase-btn__post").attr("href", "/notes/" + note_id + "/deals");
    $(".modal-container__purchase-btn__post").attr("data-method", "post");
    $('.modal-container__overlay, .modal-container__modal-window').fadeIn();
  });

  $('.modal-container__close-btn').on('click', function() {
    $('.modal-container__overlay, .modal-container__modal-window').fadeOut();
  });

});
