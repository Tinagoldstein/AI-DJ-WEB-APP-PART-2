song1 = "";
song2 = "";

function setup() {
    canvas = createCanvas(500,400);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,0,0,500,400);
}

function preload() {
song1 = loadSound("music1.mp3");
}


function play() {
song1.play();
}
    
