$query.done((data) => {
  if($query.status !== 200){
    return;
  }
  console.log(data);
  display(data);
})



var isImage = false;
var childPos = 2;
  while(isImage == false){
    childPos += 1;
    var redditContent = data.data.children[childPos]
    var redditURL = redditContent.data.url
    var type = redditURL.substring(redditURL.length - 3,redditURL.length)
    if(type === "jpg" || type === "png"){
      isImage = true;
    } else {console.log("failed: " + type)}
  }
