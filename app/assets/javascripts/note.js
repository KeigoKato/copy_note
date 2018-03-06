$(function (){
  $(document).on("click", ".articles__info__delete__btn", function(){
    if (confirm("この投稿を削除しますか？")) {
      return true;
    } else {
      return false;
    }
  })
});
