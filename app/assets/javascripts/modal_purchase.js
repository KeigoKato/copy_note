$(function() {
  // 購入ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
  $('.purchase-settlement').on('click', function() {
    $('.modal-container__overlay, .modal-container__modal-window').fadeIn();
  });
  // キャンセルボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
  $('.modal-container__close-btn').on('click', function() {
    $('.modal-container__overlay, .modal-container__modal-window').fadeOut();
  });
  locateCenter();  // => モーダルウィンドウを中央配置するための初期値を設定する
  $(window).resize(locateCenter);  // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える

// モーダルウィンドウを中央配置するための配置場所を計算する関数
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
});
