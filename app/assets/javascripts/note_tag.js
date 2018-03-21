$(function(){
  $(document).on('turbolinks:load', function() {
    $('#note-tags').tagit({
      placeholderText: "タグをつけよう",
      fieldName: "note[tag_list]",
      availableTags: gon.available_tags,
      singleField: true
    });
    if(gon.available_tags){
      for (let tag in gon.available_tags){
        $("#note-tags").tagit("createTag", gon.available_tags[tag]);
      }
    }
  });
});

