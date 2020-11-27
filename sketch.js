var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	box1 = createSprite(280, 610, 20, 100);
	box1.shapeColor = "red";

	box2 = createSprite(390, 650, 200, 20);
	box2.shapeColor = "red";

	box3 = createSprite(480, 610, 20, 100);
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	var pakageBody_options = {
		restitution: 0.5,
		isStatic: true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , pakageBody_options);
	World.add(world, packageBody);
	
	var ground_options = {
		isStatic: true
	}

	var box_options = {
		isStatic: true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);

	box1 = Bodies.rectangle(280, 610, 20, 100, box_options );
	World.add(world, box1);

	box2 = Bodies.rectangle(390, 640, 200, 20, box_options );
	World.add(world, box2);

	box3 = Bodies.rectangle(480, 610, 20, 100);
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody, false);
  }
}



