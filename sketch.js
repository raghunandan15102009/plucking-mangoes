
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, boy, stone,slingshot;
function preload() {

}

function setup() {
  createCanvas(1200, 4000);
  engine = Engine.create();
  world = engine.world;
  tree = new Tree(900, 200, 250, 300);
  boy = new Boy(-600, 50, 170, 300);
  stone = new Stone(-100, 50);
  slingshot = new SlingShot(stone.body,{x:-50,y:-80})
  ground = new Ground(400,100,1200,20)
  mango=new Mango(520,-100)
  mango1=new Mango(550,-70)
  mango2=new Mango(580,-100)
  mango3=new Mango(610,-130)
  mango4=new Mango(580,-150)
  mango5=new Mango(640,-90)
  mango6=new Mango(640,-150)
  mango7=new Mango(680,-100)
    Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  boy.display();
  stone.display();
  ground.display();
  slingshot.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function detectCollision(){
  
}

