const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    } 
    ball = Bodies.circle(200,200,25,ball_options);
    ball2 = Bodies.circle(200,100,25,ball_options);
    rect2 = Bodies.rectangle(200,50,50,50,ball_options);
    World.add(world,rect2);
    World.add(world,ball);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    circle(ball.position.x,ball.position.y, 50);
    circle(ball2.position.x,ball2.position.y, 50);
    rect(rect2.position.x,rect2.position.y, 50,50);

}