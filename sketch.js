const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var spaceEng, myworld;
var ground
var ball


function setup() {
  createCanvas(400,400);
 spaceEng= Engine.create();
 myworld= spaceEng.world;
var object= {
  isStatic:true
}

ground= Bodies.rectangle(200,390,200,20, object);
World.add(myworld,ground);
console.log(ground);

var bounce={
  restitution:0.9
}
ball= Bodies.circle(200,100,20,bounce)
World.add(myworld,ball);
}

function draw() {
  background(0); 
Engine.update(spaceEng);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

 ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}