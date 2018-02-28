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

  function buildHTML(data) {
    var purchaseBtnHTML = `
      <a class="modal-container__purchase-btn__post" data-method="post" href="/notes/${data}/deals">
        <button class="modal-container__purchase-btn">購入</button>
      </a>
      `
    return purchaseBtnHTML;
  }

  locateCenter();
  $(window).resize(locateCenter);

  $('.author-purchase-btn').on('click', function() {
    var note_id = $(this).attr("value")
    var html = buildHTML(note_id)
    $(".modal-container__modal-window__footer__purchase").append(html);
    $('.modal-container__overlay, .modal-container__modal-window').fadeIn();
    debugger;
  });

  $('.modal-container__close-btn').on('click', function() {
    $('.modal-container__overlay, .modal-container__modal-window').fadeOut();
    $(".modal-container__modal-window__footer__purchase").empty();
  });

});
