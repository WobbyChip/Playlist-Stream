var audio = new Audio();
audio.loop = true;

function PlaySound(FileName) {
    audio.src = FileName;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

PlaySound("Lotus Flower.mp3");