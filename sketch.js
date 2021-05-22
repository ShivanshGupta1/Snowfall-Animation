var bg, flakeImg, flake;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload(){
  bg = loadImage("snow1.jpg");
  flakeImg = loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
	rectMode(CENTER);
	



	engine = Engine.create();
	world = engine.world;

  flake = new Flake(50,50)
	


	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);	
  background(bg);  
  
  flake.display();
 


 
}






