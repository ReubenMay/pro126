song="";
song2=""
leftwristx="0"
leftwristy="0"
rightwristx="0"
rightwristy="0"
function setup(){
  canvas =  createCanvas(600,450);
  canvas.center();
  video=  createCapture(VIDEO);
  video.hide()
  poseNet=ml5,poseNet(video,modelLoaded);
  ml5.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("pose net is installed")
}
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,450);
}
function play(){
    song.play();
}