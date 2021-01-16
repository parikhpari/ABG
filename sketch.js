//namespacing or nicknaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

//created engien and world for ABG
var engine, world;
//created objects
var ground;
var ball;

function setup() {
  //creates a canvas where my objects and everything will appear
  createCanvas(1200,400);

  //created a engine for ABG from the main Engine so that it runs
  engine = Engine.create();
  //made the world of ABG game same as engine's world
  world = engine.world;

  //created option to make it static
 Options ={
   isStatic:true
 }

  //gave ground its body and added it to world
  ground = Bodies.rectangle(600,350,1200,10,Options);
  //Added the ground to the main World
  World.add(world,ground);
  
  //created option to make it bounce more
  options ={
    restitution: 1
  }
  
  //gave my ball a body
  ball= Bodies.circle(200,100,25,options);
  //added the ball to the main world
  World.add(world,ball);
  
}

function draw() {
  
  // background to clear screen and give some color
  background("crimson");  
  //to update the engine continuosly
  Engine.update(engine);

  //to give ground some color
  fill("green");
  //to position x and y as the center of the object
  rectMode(CENTER);
  //to display the ground
  rect(ground.position.x,ground.position.y,1200,10);

  //to give color to the ball
  fill("violet");
  //to make the ball actually touch the ground
  ellipseMode(RADIUS);
  //to display the ball
  ellipse(ball.position.x,ball.position.y,25,25);
  
}