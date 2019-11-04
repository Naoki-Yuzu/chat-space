$(document).on("turbolinks:load", function () {
  let userSearchResult = $("#user-search-result");

  function buildUser(user) {
    let html = `
            <div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
            </div>
            `
    userSearchResult.append(html);
  }

  function errorUser(){
    let html = `
               <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
               </div>
              `
   
    userSearchResult.append(html);
}

function addGroupUser (userName, userId){
  var html = `
          <div class='chat-group-user clearfix' id='${userId}'>
            <input name='group[user_ids][]' type='hidden' value='${userId}' id="group_user_ids_${userId}">
            <p class='chat-group-user__name'>${userName}</p>
            <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
          </div>
          `
  $("#chat-group-users").append(html)
}

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      dataType: "json",
      data: {keyword: input}
    })
    .done(function(data) {
      userSearchResult.empty();
      if (data.length !== 0) {
        $(data).each(function(index, userInfo) {
          buildUser(userInfo);
        });
      } else if (data.length === 0) {
        return false;
      } else {
        errorUser();
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })
  });
  $(document).on("click", ".user-search-add", function () {
    let user = $(this).data();
    $(this).parent().remove();
    addGroupUser(user.userName, user.userId);
  });
  $(document).on("click", ".user-search-remove", function() {
    $(this).parent().remove();
  })


});