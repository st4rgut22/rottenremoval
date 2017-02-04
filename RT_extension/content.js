console.log('content js');
var ratings = document.getElementsByClassName("meter-value")
var critics = ratings[0].innerText
var audienceIndex = ratings.length - 1
var audience = ratings[audienceIndex].innerText
var title = document.getElementById("movie-title").innerText
chrome.storage.local.set({"keyName": [critics,audience,title]},function(){console.log('mah critics stored')});
