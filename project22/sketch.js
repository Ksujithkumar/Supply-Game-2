var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var leftBox,rightBox,bottomBox
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	rightBox = createSprite(490,585,20,150)
	rightBox.shapeColor = ("red")

	leftBox = createSprite(310,585,20,150)
	leftBox.shapeColor = ("red")

	bottomBox = createSprite(width/2,height-35,200,20)
	bottomBox.shapeColor = ("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	
	
	 
	rightBox = Bodies.rectangle(490,585,20,150);
	World.add(world, rightBox);

	leftBox = Bodies.rectangle(310,585,20,150);
	World.add(world, leftBox);

	bottomBox = Bodies.rectangle(310,650,200,20,{isStatic:true});
	World.add(world, bottomBox);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false)
	
  }
}



