
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;


var ground;
var leftside;
var rightside;

function setup() {
  createCanvas(1500,700);
  
  engine = Engine.create();
  world = engine.world;
  
  var ball_option = 
  {
	  isStatic: false,
	  restitution: 0.8,
	  friction: 0,
	  density: 1.3,
 }

  ball = Bodies.circle(200, 10, 15, ball_option);
 World.add (world, ball);

  ground =new Ground(width/2, 670, width,20);
  rightside = new Ground(1100,600,20,120);
  leftside = new Ground(1200,600,20,120);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);{

  var pos = ball.position;






  ellipse(pos.x, pos.y, 15);
  ground.display();
  leftside.display();
  rightside.display();

  Engine.update(engine);
}


}

function keyPressed() 
{
  if (keyCode === UP_ARROW) 
{
Matter.Body.applyForce (ball, {x:0, y:0}, {x: 30, y: -30}) 
}
}
