const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow = [];
  
var bg_img;

  function preload(){
   
  bg_img=loadImage("snow3.jpg");

  }

  function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  

}



function draw() {
  Engine.update(engine);
  background(bg_img); 
  
  if(frameCount%10===0){
    snow.push(new Snow(random(0,800),50,50));
  }
  
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }
   
  drawSprites();
}