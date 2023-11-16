const songs = [
    {title: 'The Devil in I', artist: 'Slipknot', src: 'music/Slipknot The Devil in I sub españolinglés.mp3', cover: 'img/Slipknot.png'},
    {title: 'Mercury', artist: 'Ghostemane', src: 'music/GHOSTEMANE  Mercury.mp3', cover: 'img/ghostemane.png '},
    {title: 'And to those i love', artist: 'SuicideBoys', src: 'music/SuicideBoy  And To Those I Love Thanks For Sticking Around Traducida al Español.mp3', cover: 'img/suicide.png '},
    {title: 'Te quiero P ', artist: 'Rammstein', src: 'music/Te quiero puta  Rammstein.mp3', cover: 'img/rammstein.png '},
    {title: 'Diva virtual ', artist: 'Don Omar', src: 'music/virtual diva  don omar  letra.mp3', cover: 'img/don.png '}
];

let currentSongIndex = 0;

let isPlaying = false;

let audio;

function playCurrentSong(){
    if(audio){
        audio.stop();
    }

    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function(){
            playNextSong();
        }
    });
    updateSongInfo();
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtists = document.getElementById('songArtits');
const albumCover = document.querySelector('.card-img-top');

playButton.addEventListener('click', ()=>{
    isPlaying = true;
    playCurrentSong();
});

pauseButton.addEventListener('click',()=>{
    isPlaying = false;
    audio.pause();
});

nextButton.addEventListener('click',()=>{
    playNextSong();
});

prevButton.addEventListener('click',()=>{
    if(audio.seek() > 5){
        audio.seek(0);
    }else{
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }
});

volumeSlider.addEventListener('input',()=>{
    audio.volume(volumeSlider.value);
});

function updateSongInfo(){
    songTitle.textContent = songs[currentSongIndex].title;
    songArtists.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
}

function playNextSong(){
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
}

playCurrentSong();




