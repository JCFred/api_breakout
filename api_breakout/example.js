

$.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/pics.json').then(function(value){
  //console.log(value);
  return value;
// }).catch(function(){
//   console.log("failed");
}).then(function(data){

  var postSub = data.data.children[2].data.subreddit_name_prefixed;
  var postPic = data.data.children[2].data.url;
  var postTitle = data.data.children[2].data.title;
  var next = data.data.children[2].data.permalink;
  displayPost(postSub, postTitle, postPic);

  return $.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com' + next + '.json')
}).then(function(commentData){
  //console.log(commentData);
  var postComment = commentData[1].data.children[0].data.body;
  // console.log(postSub);
  // console.log(postPic);
  // console.log(postTitle);
  // console.log(postComment);
  displayText(postComment);
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
