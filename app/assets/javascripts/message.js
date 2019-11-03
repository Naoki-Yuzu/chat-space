$(function() {

  function buildMessage(data) {

    let htmlBranch = data.image ? data.content?
    `<div class="lower-message">
        <p class="lower-message__content">
          ${data.content}
        </p>
        <img class="lower-message__image" src="${data.image}" alt="Dog 4504013 640">
      </div>`:
    `<div class="lower-message">
        <img class="lower-message__image" src="${data.image}" alt="Dog 4504013 640">
      </div>`:
    `<div class="lower-message">
        <p class="lower-message__content">
          ${data.content}
        </p>
      </div>`;

    let html = 
     `<div class="message">
        <div class="message__upper-info">
          <p class="message__upper-info__taker">
            ${data.user_name}
          </p>
          <p class="message__upper-info__date">
            ${data.created_at}
          </p>
        </div>
        ${htmlBranch}
      </div>`
  
    return html;
  }

  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildMessage(data);
      $(".messages").append(html);
      $("#message_content").val("");
      $(".messages").animate({scrollTop:$(".messages")[0].scrollHeight});
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});