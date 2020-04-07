const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  bob = new Circle(200,150,70,30);
}

function draw() {
  Engine.update(engine);
  background(205);  

  bob.display();
  
}