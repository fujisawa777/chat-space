$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__upper-info">
            <p class="message__upper-info__talk-user">
              ${message.user_name}
            </p>
            <p class="message__upper-info__date">
              ${message.created_at}
            </p>
          </div>
          <p class="message__text">
            <p class="message__text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message"data-message-id=${message.id}>
        <div class="message__upper-info">
          <p class="message__upper-info__talk-user">
            ${message.user_name}
          </p>
          <p class="message__upper-info__date">
            ${message.created_at}
          </p>
        </div>
        <p class="message__text">
          <p class="message__text">
            ${message.content}
          </p>
        </p>
      </div>`
      return html;
    };
  }

  $('.new-message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-messages').append(html);  
      $('form')[0].reset();
      $('.main-messages').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'fast'); 
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.submit-btn').removeAttr("disabled");
    });
  });
});
