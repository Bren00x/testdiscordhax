var mp3snd = "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4";
setTimeout(function(){
var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = mp3snd;
sound.type     = 'audio/mpeg';
document.getElementById('song').appendChild(sound);
}, 3000);
