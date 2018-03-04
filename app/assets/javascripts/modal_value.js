$(function() {

  function valueAreaHTML(){
    var html = `
    <li class="depend-on-radioButton">
      <div class="configure-value">
        <input class="edit-value" placeholder="値段を入力" type="text" value="100" name="note[value]" id="note_value">
      </div>
    </li>
    <li class="depend-on-radioButton">
      円
    </li>
    `
    return html;
  }

  function noticeHTML(){
    var html = `
    <div class="configure-purchase__body__notice">
      <p>
        販売価格は100円〜10,000円まで設定できます。
      </p>
    </div>
    `
    return html;
  }

  $(document).on("click", ".configure-post", function(){
    if ($(".edit-title").val()){
      $('input[id=check_1]').prop('checked', true);
      $(".configure-purchase-overlay").fadeIn();
    } else {
      alert("タイトルを入力してください。");
    }
  });

  $(document).on("click", ".post-btn__cancel", function(){
    $('[id=check_1]').prop('checked');
    $(".configure-purchase-overlay").fadeOut();
  });

  $(document).on("click", '[name=check]', function(){
    var valueArea = valueAreaHTML();
    if ($('[id=check_2]').prop('checked')){
      $(".purchase-type-list").append(valueArea);
    } else {
      $(".depend-on-radioButton").remove();
      $(".configure-purchase__body__notice").css("display", "none");
      $(".post-btn__post").prop("disabled", false);
      $(".post-btn__post").css({"background-color":"#2cb696", "color":"white", "border":"1px solid #2cb696", "cursor":"pointer"});
    }
  });

  $(document).on("keyup", ".edit-value", function(){
    var inputValue = parseInt($(".edit-value").val());
    var notice = noticeHTML();
    if (inputValue >= 100 && inputValue <= 10000) {
      $(".configure-purchase__body__notice").css("display", "none");
      $(".post-btn__post").prop("disabled", false);
      $(".post-btn__post").css({"background-color":"#2cb696", "color":"white", "border":"1px solid #2cb696", "cursor":"pointer"});
    } else {
      $(".configure-purchase__body__notice").css("display", "block");
      $(".post-btn__post").prop("disabled", true);
      $(".post-btn__post").css({"background-color":"#f8f9fa", "color":"#bdc3c7", "border":"1px solid #e1e5e7", "cursor":"auto"});
    }
  });



});
