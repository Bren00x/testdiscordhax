var mp3snd = "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4";
setTimeout(function(){
  
//  var audioElement = document.createElement('audio');
//audioElement.setAttribute('src', 'https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4');
//audioElement.play();
  
  $("<audio id='audioElement'>").appendTo("body");
$("#audioElement").attr("src", "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4").attr("autoplay", "autoplay");

}, 3000);
