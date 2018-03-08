$(function (){
  $(document).on("click", ".mypage", function(){
    $(".modal-container-mypage__modal-window").fadeIn();
  });

  $(document).on("click", function(e){
    if (!$(e.target).closest("#user_img").length){
      $(".modal-container-mypage__modal-window").fadeOut();
    }
  });
});
