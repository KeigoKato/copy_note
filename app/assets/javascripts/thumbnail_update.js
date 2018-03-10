$(function(){
  $('form').on('change', 'input[type="file"]', function(e) {
    if($(e.target).siblings("img")){
      $(e.target).siblings("img").remove();
    }
    var file = e.target.files[0];
    var reader = new FileReader();
    var $preview = $(e.target);
    var t = this;
    if(file.type.indexOf("image") < 0){
      return false;
    }

    reader.onload = (function(file) {
      return function(e) {
        $preview.after($('<img>').attr({
                  src: e.target.result,
                  width:"110px",
                  height: "110px",
                  class: "preview",
                  title: file.name
              }));
      }
    })(file);
    reader.readAsDataURL(file);
  });
});
