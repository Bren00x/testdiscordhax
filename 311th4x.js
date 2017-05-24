var mp3snd = "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4";
var text = "";
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

 
  
  $("#audioElement").bind("timeupdate", function() {
    var currentTime = parseInt(this.currentTime, 10);
    if(currentTime == 1) { 
      text = "Miiiiiiiinnnnnnnnnnneeeeeeeee";
        postmsg(text);
    }

if(currentTime == 4) { 
        
    }
});
  
  
  
  
}, 3000);






function postmsg(txt) {

$( ".messages" ).append( ‘<div class="message-group hide-overflow"><div class="avatar-large stop-animation" style="background-image: url(&quot;https://static.planetminecraft.com/files/resource_media/screenshot/1342/MY-EPIC-DRAWN-FACE-ICON-THING-BETTER-SHADED_6555352_lrg.jpg&quot;);"></div><div class="comment"><div class="message first"><div class="body"><h2><span class="username-wrapper"><strong class="user-name" style="color: rgb(46, 204, 113);">Die</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today</span></h2><div class="message-text"><div class="btn-option"></div><div class="btn-reaction"></div><div class="markup"><!-- react-text: 1165 —>’ + txt + ’<!— /react-text --></div></div></div><div class="accessory"></div></div></div></div>’);


}

