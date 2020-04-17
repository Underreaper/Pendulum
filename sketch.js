const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  bob = new Circle(200,250,70);
  rects = new Rectangle(200,150,200,15);
  chain = new Chain(bob.body,rects.body);
}

function draw() {
  Engine.update(engine);
  background(205);  

  bob.display();
  rects.display();
  chain.display();

   keyPressed();
}

function KeyPressed(){
  if(keyCode === 32){
   move();
  }
}