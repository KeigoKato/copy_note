$(function() {
  $(document).on("click", function(e){
    if($(e.target).closest("#user_img").length){
      $(".modal-container-mypage__overlay").show();
    } else {
      $(".modal-container-mypage__overlay").hide();
    }
  });
});
