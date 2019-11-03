// $(function() {

//   function buildMessage(data) {
//     let imageAndContent = data.image ? data.content?
//     `<div class="lower-message">
//     <p class="lower-message__content">
//       ${data.content}
//     </p>
//     <img class="lower-message__image" src="${data.image}" alt="Dog 4504013 640">
//   </div>`:
// `<div class="lower-message">
//     <img class="lower-message__image" src="${data.image}" alt="Dog 4504013 640">
//   </div>`:
// `<div class="lower-message">
//     <p class="lower-message__content">
//       ${data.content}
//     </p>
//   </div>`;

//     let html = 
//      `<div class="message">
//         <div class="message__upper-info">
//           <p class="message__upper-info__taker">
//             ${data.user_name}
//           </p>
//           <p class="message__upper-info__date">
//             ${data.created_at}
//           </p>
//         </div>
//         ${imageAndContent}
//       </div>`

//     console.log(imageAndContent);
//     return html;
//   }

//   $("#new_message").on("submit", function(e) {
//     e.preventDefault();
//     console.log("イベント発火");
//     console.log(this);
//     let formData = new FormData(this);
//     let url = $(this).attr("action");
//     console.log(formData);
//     $.ajax({
//       url: url,
//       type: 'POST',
//       data: formData,  
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data) {
//       // console.log(data);
//       // console.log(data.image);
//       // console.log(buildMessage(data));
//       let html = buildMessage(data);
//       $(".messages").append(html);
//       $("#message_content").val("");
//       // let messageLastでchat内の最新のメッセージの位置を取得
//       let messageLast = $(".message").last().position().top;
//       console.log(messageLast);
//       // $(".messages").animate({scrollTop:messageLast});
//       $(".messages").animate({scrollTop:$(".messages")[0].scrollHeight});
//       // console.log($(".submit-btn").attr("disabled"));     
//       // console.log($(".submit-btn").prop("disabled"));
//       $(".submit-btn").prop("disabled", false);
//       // console.log($(".submit-btn").prop("disabled"));
//     })
//     .fail(function() {
//       alert("メッセージ送信に失敗しました");
//     })
//   });
// });