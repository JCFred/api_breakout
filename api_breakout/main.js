console.log("connected");
///this code isn't fully working... main it during presentation

var apiObject = $.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/pics/.json').then(function(data){
  return data;
}).catch(function(error){
  console.log("failed: ", error);
}).then(function(api){
  console.log(api);
  var postSub =api.data.children[2].data.subreddit_name_prefixed;
  var url = api.data.children[2].data.url;
  console.log(url);

  // var postPic = url.data.children[2].data.url;
  // var postTitle = url.data.children[2].data.title;
  displayPost(postSub, postPic, postTitle)
  var comment = api.data.children[2].data.permalink
  return $.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com' + comment + '/.json')
}).then(function(postComment){
  console.log(postComment)
  var comOne = postComment.data.children[1].data.body

})


function displayPost(sub, title, post){
  $('.rightBar').append(
    $('<img>', {src: post})
  )
  $('.midBar').append(
    $('<h1>', {text: sub}),
    $('<p>', {text: title})
  )
}

function displayText(comment){
  $('.leftBar').append(
    $('<p>', {text: comment})
  )
}
