$(function(){

  function buildHTML(data){
    var html = `
    <div class="comments__inner__posted-comments">
      <div class="comments__inner__posted-comments__body">
        <ul class="user-comment">
          <li class="user-comment__thumbnail">
            <img class="user-comment__thumbnail__image" src="${data.user_thumbnail}" alt="user_thumbnail">
          </li>
          <li class="user-comment__info">
            <ul>
              <li>
                <div class="user-comment__info__user-name">
                  ${data.user_name}
                </div>
                <div class="user-comment__info__update">
                  ${data.created_at}
                </div>
              </li>
              <li>
                <div class="user-comment__info__comment">
                  ${data.review}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    `
    return html;
  }

  $("#new_review").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var commentCount = $(".comments__inner__posted-comments__body").length
      var appendHTML = buildHTML(data);
      $(".comments__inner__header p").text("コメント" + commentCount + "件")
      $(".comments__inner__header").after(appendHTML);
    })
    .fail(function(){
      alert("通信に失敗しました。");
    });
  });
});
