const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snowimage
var snow = []

function preload(){
snowimage = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowimage);  
  Engine.update(engine);
  if(frameCount%5 === 0){
    snow.push(new Snowfall(random(1,800),10,30))
  }
  for(var i = 0; i<snow.length;i++){
    snow[i].display()
  }
  drawSprites();

}



