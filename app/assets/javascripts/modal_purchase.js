$(function() {

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
    if (price.match(/[0-9]+/)){
      replaceHTML(title, price);
      $(".modal-container__purchase-btn").attr({"href":postHref, "data-method":"post"});
      $(".modal-container__overlay, .modal-container__modal-window").fadeIn();
    } else {
      alert("購入済みです");
    }
  });

  $(".modal-container__close-btn").on("click", function() {
    if (!confirm("本当に購入を中止しますか？")){
      return false;
    } else {
      $(".modal-container__overlay, .modal-container__modal-window").fadeOut();
    }
  });

  $(".modal-container__overlay").on("click", function(e){
      var clickedElement = $(e.target);
      if($(clickedElement).hasClass("modal-container__overlay")){
          $(".modal-container__overlay").fadeOut();
      }
  });

});
