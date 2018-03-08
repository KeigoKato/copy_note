$(function() {

  function replaceHTML (title, price) {
    $(".purchase-detail__title").text(title);
    $(".purchase-detail__price").text(price);
  }

  $(document).on("click", ".author-purchase-btn", function(e) {
    var authorId = $(e.target).parent().parent().prev().find("a").attr("href").replace(/\/users\//, "")
    var userId = $(".mypage__menu__list__configure").attr("href").replace(/\/users\//, "").replace(/\/edit/, "")
    var noteId = $(this).attr("value");
    var noteURL = "[href='/notes/" + noteId + "']"
    var title = $(noteURL).text();
    var price = $(this).find("p").text().replace(/../, "").replace(/$/, "円")
    var postHref = "notes/" + noteId + "/deals";
    if (authorId !== userId) {
      if (price.match(/[0-9]+/)){
        replaceHTML(title, price);
        $(".modal-container__purchase-btn").attr({"href":postHref, "data-method":"post"});
        $(".modal-container__overlay, .modal-container__modal-window").fadeIn();
      } else {
        alert("購入済みです");
      }
    } else {
      alert("これはあなたが投稿したノートです。購入することはできません。")
    }
  });

  $(document).on("click", ".modal-container__close-btn", function() {
    if (!confirm("本当に購入を中止しますか？")){
      return false;
    } else {
      $(".modal-container__overlay, .modal-container__modal-window").fadeOut();
    }
  });

  $(document).on("click", ".modal-container__overlay", function(e){
      var clickedElement = $(e.target);
      if($(clickedElement).hasClass("modal-container__overlay")){
          $(".modal-container__overlay").fadeOut();
      }
  });

});
