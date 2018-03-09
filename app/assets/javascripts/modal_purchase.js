$(function() {

  function replaceHTML(title, price) {
    $(".purchase-detail__title").text(title);
    $(".purchase-detail__price").text(price);
  }

  $(document).on("click", function(e){
    if ($(e.target).attr("class") == "author-purchase__value") {

      if (!$(e.target).text().match(/購入済み/)) {

        if($("#user_name").text().replace(/\n/g, "") != $(e.target).attr("name")) {

          var clickNote = $(e.target).attr("value")
          var clickTitle = $(e.target).parents(".articles").find(".title_mypage_link").text();
          var clickValue = $(e.target).text().replace(/¥ /, "").replace(/$/, " 円");

          var replaceUrl = "/notes/" + clickNote + "/deals"
          var purchaseBtn = $("body").find(".modal-container__purchase-btn");
          purchaseBtn.attr("href", replaceUrl)
          purchaseBtn.attr("data-method", "post")

          replaceHTML(clickTitle, clickValue);

          $(".modal-container__overlay").fadeIn();

        } else {
          alert("あなたが投稿したノートを購入することができません");
        }

      } else {
        alert("すでに購入済みです");
      }

    } else if(!$(e.target).closest('.modal-container__modal-window').length) {
      $(".modal-container__overlay").fadeOut();
    }
  });

  $(document).on("click", function(e){
    if($(e.target).attr("class") == "modal-container__close-btn"){
      if(!confirm("購入を中止しますか？")){
        return false;
      } else {
        $(".modal-container__overlay").fadeOut();
      }
    }
  });

});
