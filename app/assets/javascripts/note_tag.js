$(function(){
  $(document).on('turbolinks:load', function() {
    $('#note-tags').tagit({ placeholderText: "タグをつけよう", fieldName: "note[tag_list]", singleField: true });
    if(gon.note_tags){
      for (var tag in gon.note_tags){
      $("#note-tags").tagit("createTag", tag);
      }
    }
  });
});

