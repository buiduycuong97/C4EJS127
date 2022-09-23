let playButton = document.getElementById("playButton")
let mySong = document.getElementById("mySong")
let stopButton =document.getElementById("stopButton")
playButton.onclick = function(){
   if(mySong.paused){
        mySong.play();
   }
   else{
        mySong.pause();
   }
};
