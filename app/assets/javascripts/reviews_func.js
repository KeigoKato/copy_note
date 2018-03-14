$(function(){

  function buildHTML(data){
    var html = `
    <div class="comments__inner__posted-comments">
      <div class="comments__inner__posted-comments__body">
        <ul class="user-comment">
          <li class="user-comment__thumbnail">
            <img class="user-comment__thumbnail__image" src="/uploads/user/thumbnail/21/UNADJUSTEDNONRAW_thumb_2.jpg" alt="Unadjustednonraw thumb 2">
          </li>
          <li class="user-comment__info">
            <ul>
              <li>
                <div class="user-comment__info__user-name">
                  ゲストユーザーユーザー
                </div>
                <div class="user-comment__info__update">
                  2018/03/13 11:24
                </div>
              </li>
              <li>
                <div class="user-comment__info__comment">
                  んんんんんんんんんんん
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
    console.log("this");
    debugger;

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      debugger;
    })
    .fail(function(){
      debugger;
      alert("失敗");
    });
  });
});
