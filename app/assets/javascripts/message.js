$(document).on("turbolinks:load", function() {
  // function buildMessage(data) {

  //   let htmlBranch = data.image.url ? data.content?
  //   `<div class="lower-message">
  //       <p class="lower-message__content">
  //         ${data.content}
  //       </p>
  //       <img class="lower-message__image" src="${data.image.url}" alt="Dog 4504013 640">
  //     </div>`:
  //   `<div class="lower-message">
  //       <img class="lower-message__image" src="${data.image.url}" alt="Dog 4504013 640">
  //     </div>`:
  //   `<div class="lower-message">
  //       <p class="lower-message__content">
  //         ${data.content}
  //       </p>
  //     </div>`;

  //   let html = 
  //    `<div class="message">
  //       <div class="message__upper-info">
  //         <p class="message__upper-info__taker">
  //           ${data.user_name}
  //         </p>
  //         <p class="message__upper-info__date">
  //           ${data.created_at}
  //         </p>
  //       </div>
  //       ${htmlBranch}
  //     </div>`
  
  //   return html;
  // }

  var buildMessageHTML = function(data) {
    let htmlBranch = data.content? data.image.url?
    `<div class="message" data-message-id="${data.id}">
        <div class="message__upper-info">
          <div class="message__upper-info__taker">
            ${data.user_name}
          </div>
          <div class="message__upper-info__date">
            ${data.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${data.content}
          </p>
          <img src="${data.image.url}" class="lower-message__image" >
        </div>
      </div>`:
      `<div class="message" data-message-id="${data.id}">
        <div class="message__upper-info">
          <div class="message__upper-info__taker">
            ${data.user_name}
          </div>
          <div class="message__upper-info__date">
            ${data.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${data.content}
          </p>
        </div>
      </div> `:
      `<div class="message" data-message-id="${data.id}">
        <div class="message__upper-info">
          <div class="message__upper-info__taker">
            ${data.user_name}
          </div> +
          <div class="message__upper-info__date"> +
            ${data.created_at}
          </div>
        </div>
        <div class="lower-message">
          <img src="${data.image.url}" class="lower-message__image" >
        </div>
      </div>`;
    return htmlBranch;
  };



  var reloadMessages = function() {
    let url = window.location.pathname;

    if (url.match(/\/groups\/\d+\/messages/)) {
      last_message_id = $(".message").last().data("messageId");
      console.log(last_message_id);
      group_id = $(".messages").data("groupId");
      $.ajax({
        url: `/groups/${group_id}/api/messages`,
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(data) {
          let insertHTML = '';
          console.log(data);
          console.log(data.wday);
          data.forEach(function(value) {
          console.log(value);          
          insertHTML = value
          let html = buildMessageHTML(insertHTML);
          $(".messages").append(html);
          $(".messages").animate({scrollTop:$(".messages")[0].scrollHeight});
          })
      })
      .fail(function() {
        alert("エラーです");
      });
    } else {
      return false;
    }


    
  };

  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    console.log("text");
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      // console.log(data);
      // console.log(data.created_at);
      // console.log(data.wday);
      let html = buildMessageHTML(data);
      $(".messages").append(html);
      $(".messages").animate({scrollTop:$(".messages")[0].scrollHeight});
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $(".submit-btn").prop("disabled", false);
    })
    $("#new_message")[0].reset();
  });


  // let url = location.href;

  // if (url.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 5000);
  // } else {
  //   return false;
  // }
});