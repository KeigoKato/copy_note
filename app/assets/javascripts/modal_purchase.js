$(function() {

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    let cw = $(".modal-container__modal-window").outerWidth();
    let ch = $(".modal-container__modal-window").outerHeight();
    $(".modal-container__modal-window").css({
      "left": ((w - cw) / 2) + "px",
      "top": ((h - ch) / 2) + "px"
    });
  }

  function replaceHTML (title, price) {
    $(".purchase-detail__title").text(title);
    $(".purchase-detail__price").text(price);
  }

  $(".author-purchase-btn").on("click", function() {
    var note_id = $(this).attr("value");
    var noteURL = "[href='/notes/" + note_id + "']"
    var title = $(noteURL).text();
    var price = $(this).find("p").text().replace(/../, "").replace(/$/, "円")
    var postHref = "notes/" + note_id + "/deals";
    replaceHTML(title, price);
    $(".modal-container__purchase-btn").attr({"href":postHref, "data-method":"post"});
    $(".modal-container__overlay, .modal-container__modal-window").fadeIn();
  });

  $(".modal-container__close-btn").on("click", function() {
    $(".modal-container__overlay, .modal-container__modal-window").fadeOut();
  });

  locateCenter();
  $(window).resize(locateCenter);

});
