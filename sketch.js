// physics engine - to ensure all game objects behave like real world objects
// to do that we include Matter.js physics engine

//Engine = this is the physics engine
//world = this is the physical world where all our objects of game will live/inhabit
//bodies = these are the objects of game which live in the world and follow physics engine.

//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;
var ground;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();

  world = engine.world;

  var ball_options = {
    isStatic : false,
    restitution : 0.7

  } //JSON stucture

  ball = Bodies.circle(200,200,40, ball_options );//this is not a sprite
  World.add(world,ball);

 
  console.log(ball);
 var ground_options = {
   isStatic : true
 }
 ground = Bodies.rectangle(400,380,800,20,ground_options);
 World.add(world,ground);
  
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);
  Engine.update(engine); 

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40,40);

  drawSprites();
}