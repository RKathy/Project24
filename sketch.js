
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 200);

	keyPressed();
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(290,150,15,80);
	box2 = new Box(360,185,130,15);	
	box3 = new Box(430,150,15,80);

	paper = new Paper(90,150,20); 

	ground = new Ground(400,height,800,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  
  box1.display();
  box2.display();
  box3.display();
  
  ground.display();
  paper.display();
}

 function keyPressed() {
	 if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-39});
	 }
 }


