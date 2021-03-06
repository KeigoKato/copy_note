$(function (){
  $(document).on("click", function(e){
    var clickClass = $(e.target).attr("class")
    if (clickClass == "fa fa-ellipsis-h") {
      var target = $(e.target).next();
      if (!target.attr("style") || target.attr("style").match(/none/)) {
        target.show();
      }
    }
  });

  $(document).on("click", ":not(.modal-delete[style='display: block;'])", function(e){
    $(".modal-delete[style='display: block;']").hide();
  });

  $(document).on("click", "#delete-note", function(){
    if (!confirm("本当に削除しますか？")){
      return false;
    } else {
      return true;
    }
  });
});
