const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var ground1;
var bg1, bg1Img;
var boy, boyImg;
var enemy, enemyImg;
var hammer, hammerImg;
var bow, bowImg;
var arrow2, arrowImg;
var launcher1;

function preload(){
bg1Img=loadImage("bg1.jpg");
boyImg=loadImage("boy.png");
enemyImg=loadImage("enemy.png");
hammerImg=loadImage("hammer.png");
bowImg=loadImage("bow.png");
arrow2Img=loadImage("arrow.png");
}

function setup() {
  createCanvas(1600,755);

  engine=Engine.create();
  world=engine.world;
 

bg1=createSprite(800, 375);
bg1.addImage(bg1Img);

boy=createSprite(160,650,30,30);
boy.addImage(boyImg);

bow=createSprite(210,640,30,30);
bow.addImage(bowImg);
bow.scale=0.3

arrow2=new arrow(215,660,30);
ground1=new ground(0,0,0,0);
 
 //launcher1= new launcher(arrow2.body,{x:215,y:640})

Engine.run(engine);
}

function draw() {
  background("white"); 
  
  
   ground1.display();
   arrow2.display();
  // launcher1.display();
   
  console.log(arrow2)

  spawnHammer();
  spawnEnemy();

  drawSprites();
}


function spawnHammer(){

  if(frameCount%300===0){
    hammer=createSprite(1565,570,30,30);
    hammer.addImage(hammerImg);
    hammer.scale=0.2;
    hammer.velocityX=-4;
  }
}

function spawnEnemy(){

  if(frameCount%300===0){
    enemy=createSprite(1610,637,30,30);
    enemy.addImage(enemyImg);
    enemy.scale=0.4;
    enemy.velocityX=-4;
  }
}
