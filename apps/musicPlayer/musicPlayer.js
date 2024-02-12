let allMusic = [
    
    {
    name: 'Background Trap',
    artist: 'AlexiAction',
    src: "music/BackgroundTrap.mp3"
    },
               
    
  ];
let audio = document.getElementById('audio');

var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
let iconImage = document.getElementById('iconImage');

let sliderTimer = document.getElementById('sliderTimer');
let box2 = document.getElementById('box2');

let volumeIcon = document.getElementById('VolumeIcon');
let volumeRange = document.getElementById('volumeRange');

let mscSource = document.getElementById('musicSource');



function VolumeIconF(){
    if (volumeRange.value > 77){
        volumeIcon.setAttribute('class','fa fa-volume-up');
        iconImage.style.visibility = 'hidden';
        volumeIcon.style.visibility = 'visible';
    }
    else if(volumeRange.value == 0){
        volumeIcon.setAttribute('class','fa fa-volume-off');
        iconImage.style.visibility = 'hidden';
        volumeIcon.style.visibility = 'visible';
    }
    else if(volumeRange.value > 33 && volumeRange.value < 77){
        iconImage.style.visibility = 'visible';
        volumeIcon.style.visibility = 'hidden';
        
    }
    else if(volumeRange.value < 33 && volumeRange.value > 0){
        volumeIcon.setAttribute('class',"fa fa-volume-down");
        iconImage.style.visibility = 'hidden';
        volumeIcon.style.visibility = 'visible';
    }
    
    
    
}


audio.onloadedmetadata = function() {
    sliderTimer.setAttribute('max',`${audio.duration}`);   
    let resultMinutes = Math.floor(audio.duration/60);
    let resultSeconds = Math.floor((audio.duration/60  - resultMinutes)* 60);
    if (resultSeconds > 9){
        document.getElementById('maxDuration').innerHTML = resultMinutes+":"+resultSeconds;
    }
   else{
    document.getElementById('maxDuration').innerHTML = resultMinutes+":0"+resultSeconds;
   }
   
}


const play = () =>{
    playButton.style.visibility = 'hidden';
    pauseButton.style.visibility = 'visible';
    pauseButton.style.backgroundColor = 'transparent';
    audio.play();
}

const pause = () =>{
    playButton.style.visibility = 'visible';
    pauseButton.style.visibility = 'hidden';
    pauseButton.style.backgroundColor = 'transparent';
    audio.pause();
}


let slider = document.querySelector('input');
        slider.oninput = function(){
            let progressBar = document.querySelector('progress');
            progressBar.value = slider.value;
            audio.volume = slider.value / 100;
}


function slideFunction(){
    
    audio.currentTime = document.getElementById('sliderTimer').value;
    
}


let timer = document.getElementById('timer');
        
var update = setInterval(function() {
    
    var mins = Math.floor(audio.currentTime / 60);
    var secs = Math.floor(audio.currentTime % 60 + 0.9);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
    
    timer.innerHTML = mins + ':' + secs;
    
    if (playButton.style.visibility == 'hidden'){
        sliderTimer.value = audio.currentTime;
    }
   
    if (document.getElementById('timer').innerHTML == document.getElementById('maxDuration').innerHTML){
        audio.pause();
        audio.currentTime = 0;
        playButton.style.visibility = 'visible';
        pauseButton.style.visibility = 'hidden';
        document.getElementById('timer').innerHTML = "0:00";
        document.getElementById('sliderTimer').value = '0';
        
       }
       

  }, 1000);


allMusic.forEach((song) =>{
    var songButton = document.createElement('button');
    songButton.innerHTML = (song.name+" - "+song.artist);
    songButton.setAttribute('id','songButton');
    let hr = document.createElement('hr');

    
    
    
    box2.appendChild(songButton);
    box2.appendChild(hr);
    songButton.onclick = function playSong(){
        audio.src = (song.src);
        playButton.style.visibility = 'visible';
        pauseButton.style.visibility = 'hidden';
        sliderTimer.value = '0';

        document.getElementById('songDetails').innerHTML = song.name + " - "+song.artist;
        

        
    }
    
    
    
    


});






