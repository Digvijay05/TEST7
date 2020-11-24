const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,bodies,bodies_rectangle;
var ground;

function setup() {
var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var bodies_option={isStatic:true};
var ball_option={resitution:5}
bodies = Bodies.circle(200,50,50,ball_option);
ground = Bodies.rectangle(200,390,50,50,bodies_option);
World.add(world,bodies);
World.add(world,ground);

}

function draw() {
background(0);  
Engine.update(engine);
rectMode(CENTER);
circle(bodies.position.x,bodies.position.y,50);
rect(ground.position.x,ground.position.y,400,30);

}