function postTweet() {
  var tweetText = document.getElementById("tweet_text").value;

  var tweetDiv = document.createElement("div");

  tweetDiv.innerHTML = tweetText;


  var likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    likeButton.onclick = function() {
      tweetDiv.style.color = "red";
    };
    tweetDiv.appendChild(likeButton);

    var repostButton = document.createElement("button");
    repostButton.innerHTML = "Repost";
    repostButton.onclick = function() {
      document.getElementById("tweet_list").prepend(tweetDiv.cloneNode(true));
    };
    tweetDiv.appendChild(repostButton);

    document.getElementById("tweet_list").prepend(tweetDiv);

}