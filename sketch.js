const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var tower1;

function setup() {
  var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(970,320,50,50);
    box2 = new Box(790,320,50,50);
    box3 = new Box(700,330,60,60);
    box4 = new Box(700,340,60,60);
    box5 = new Box(790,330,50,50);
    box6 = new Box(700,350,60,60);
    box7 = new Box(790,340,50,50);
    box8 = new Box(880,320,50,70);
    box9 = new Box(970,330,50,50);
    box10 = new Box(970,340,50,50);
    box11 = new Box(1060,320,60,60);
    box12 = new Box(1060,330,60,60);
    box13 = new Box(1060,340,60,60);
    box14 = new Box(1060,350,60,60)
    box15 = new Box(700,360,60,60);

    box16 = new Box(650,320,10,400);
    box17 = new Box(1110,320,10,400);


}

function draw() {
  background(0);
  Engine.update(engine);
 
  triangle(880,340,890,340,885,340);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display(0);
  box6.display(0);
  box7.display(0);
  box8.display(0);
  box9.display(0);
  box10.display(0);
  box11.display(0);
  box12.display(0);
  box13.display(0);
  box14.display(0);
  box15.display(0);

  box16.display(0);
  box17.display(0);



  ground.display();

}