// Set the Access Token
var accessToken = 'd5a1eccebaed2519fed8508fcbe7518a6895effa93dacf3d75f698701c494fed';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('#shots').prepend(
            '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/><div class="title">' + val.title + '</div></a>'
            )
        })
      }
      else {
        $('#shots').append('<p>No shots yet!</p>');
      }
    }
});