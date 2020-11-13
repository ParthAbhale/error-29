const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground,player,slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    player = new Player(200,200,20)
    slingshot = new Sling(player.body,{x:200,y:200})
}

function draw(){
   background("black")
    Engine.update(engine);
    
    ground.display();
    player.display();
    slingshot.display();

}

function mouseDragged(){
  Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fire();
}