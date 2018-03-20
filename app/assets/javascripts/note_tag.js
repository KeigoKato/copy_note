$(function(){
  $(document).on('turbolinks:load', function() {
    console.log("hogehoge");
    $('#note-tags').tagit({placeholderText:"タグをつけよう",fieldName:"tags[]"});
  });
});

