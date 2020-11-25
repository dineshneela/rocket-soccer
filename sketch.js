var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,cars;
var car1img,car2img,goallimg,goalrimg,backgroundimg,ballimg
var ball,goall,goalr

function preload(){
car1img=loadImage("images/car1.png")
car2img=loadImage("images/car.png")
goallimg=loadImage("images/goall.png")
goalrimg=loadImage("images/goalr.png")
backgroundimg=loadImage("images/background.png")
ballimg=loadImage("images/ball.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("green")
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
