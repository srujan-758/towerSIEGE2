
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(400,668,270,20);
	ground2= new Ground(900,360,220,20);
	block1= new Block(300,630,42,60,"red");
	block2= new Block(342,630,42,60,"red");
	block3= new Block(384,630,42,60,"red");
	block4= new Block(426,630,42,60,"red");
	block5= new Block(468,630,42,60,"red");
	block6= new Block(510,630,42,60,"red");
	block7= new Block(342,570,42,60,"blue");
	block8= new Block(384,570,42,60,"blue");
	block9= new Block(426,570,42,60,"blue");
	block10= new Block(468,570,42,60,"blue");
	block11= new Block(384,510,42,60,"green");
	block12= new Block(426,510,42,60,"green");
	block13= new Block(405,450,42,60,"yellow");
	block14= new Block(816,340,32,32,"yellow");
	block15= new Block(852,340,32,32,"yellow");
	block16= new Block(884,340,32,32,"yellow");
	block17= new Block(912,340,32,32,"yellow");
	block18= new Block(944,340,32,32,"yellow");
	block19= new Block(976,340,32,32,"yellow");
	block20= new Block(852,290,32,32,"green");
	block21= new Block(884,290,32,32,"green");
	block22= new Block(916,290,32,32,"green");
	block23= new Block(948,290,32,32,"green");
	block24= new Block(884,280,32,32,"blue");
	block25= new Block(916,280,32,32,"blue");
	block26= new Block(903,260,32,32,"red");
	hex= new Hex(140,536,52,52);
	sling= new SlingShot(hex.body,{x:134,y:550});

	fill("blue");
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  hex.display();
}
function mouseDragged(){
	Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});	
  }
  
  function mouseReleased(){
	  sling.fly();
	
	}
	function keyPressed(){
		if (keyCode===32){
		   sling.attach(hex.body); 
		}
	}

