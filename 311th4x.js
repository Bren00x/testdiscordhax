var mp3snd = "https://archive.org/download/SNOOPDOGG-DROPITLIKEITSHOTMINECRAFTPARODY/meme.mp4";
setTimeout(function(){
document.write('<audio autoplay="autoplay">');
document.write('<source src="'+mp3snd+'" type="audio/mpeg">');
document.write('<!--[if lt IE 9]>');
document.write('<bgsound src="'+mp3snd+'" loop="1">');
document.write('<![endif]-->');
document.write('</audio>');
}, 3000);
