var mp3snd = "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4";
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(function(){
  
//  var audioElement = document.createElement('audio');
//audioElement.setAttribute('src', 'https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4');
//audioElement.play();
  
  $("<audio id='audioElement'>").appendTo("body");
$("#audioElement").attr("src", "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4").attr("autoplay", "autoplay");

}, 3000);
