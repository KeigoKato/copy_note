$(function(){
  $(document).on('turbolinks:load', function() {
    $('#note-tags').tagit({ placeholderText: "タグをつけよう", fieldName: "note[tag_list]", singleField: true });
  });
});

