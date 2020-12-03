var surviableTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.08;
  
  ground=createSprite(200,340,400,5);
}


function draw() {
  background("0");
  text("surviableTime:",+surviableTime,100,50);
  surviableTime=Math.ceil(frameCount/frameRate());
  
  if(keyDown("space")) {
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(monkey.y<100) {
    monkey.velocityY=0;
    monkey.velocityY=monkey.velocityY+0.8;
  }
  fruits();
  obstacles();
  drawSprites();
}

function fruits() {
  if(World.frameCount%80===0) {
  banana=createSprite(400,100,20,20);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX=-5;
  banana.lifetime=75;
  }
}

function obstacles() {
  if(World.frameCount%300===0) {
    obstacle=createSprite(400,320);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-6;
    obstacle.lifetime=70;
  }
}