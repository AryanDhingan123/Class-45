var track,trackImg
var car,CarImg
var tyre,tyreImg
var gameover,gameoverImg
var restart,restartImg
var coin,coinImg

function preload(){
  trackImg=loadImage("assets/track.jpg")
  carImg=loadImage("assets/Car.png")
  tyreImg=loadImage("assets/Tyre.png")
  gameoverImg=loadImage("assets/gameOver.png")
  restartImg=loadImage("assets/restart.png")
  coinImg=loadImage("assets/Coin.png")
}

function setup(){
createCanvas(800,800)
track=createSprite(400,400,1200,800)
track.scale=2
track.addImage(trackImg)
track.velocityY=-10
}

function draw(){
background(0)
if(track.y<0){track.y=400}
drawSprites()
}