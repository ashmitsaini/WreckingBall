
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope;
var ground, wreckingball, box;

function setup() {
	createCanvas(800, 700);
	background(255);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690);
	wreckingball = new Wreckingball(200, 200, 70);
	box1 = new Box(300, 400);
	box2 = new Box(300, 450);
	box3 = new Box(300, 500);
	box4 = new Box(300, 550);
	box5 = new Box(300, 600);
	box6 = new Box(350, 400);
	box7 = new Box(350, 450);
	box8 = new Box(350, 500);
	box9 = new Box(350, 550);
	box10 = new Box(350, 600);
	box11 = new Box(400, 400);
	box12 = new Box(400, 450);
	box13 = new Box(400, 500);
	box14 = new Box(400, 550);
	box15 = new Box(400, 600);
	rope = new Rope(wreckingball.body, {x: 200, y: 200});

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:40, y:-80});
	}
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  wreckingball.display();
  rope.display();
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(wreckingball.body, {x: mouseX, y: mouseY});
}


