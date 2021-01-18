//create variables for sprites
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rBox1, rbox2, rBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
//load the images for sprites
{
	
 helicopterIMG=loadImage("helicopter.png")
	
 packageIMG=loadImage("package.png")

}


function setup() 
{
	//creating the size of canvas
createCanvas(800, 700);
	
rectMode(CENTER);
	

	// create sprite for package
packageSprite=createSprite(width/2, 80, 10,10);
	
packageSprite.addImage(packageIMG)
	
packageSprite.scale=0.2

//create sprite for helicopter
helicopterSprite=createSprite(width/2, 200, 10,10);
	
helicopterSprite.addImage(helicopterIMG)
	
helicopterSprite.scale=0.6

	//create sprite for ground
groundSprite=createSprite(width/2, height-35, width,10);
	
groundSprite.shapeColor=color(255)

// create sprite for red boxes
rBox1Sprite=createSprite(width/2, height-40, 700, 30);
rBox1Sprite.shapeColor=color("red");

rBox2Sprite=createSprite( width-40,height-80, 30, 180);
rBox2Sprite.shapeColor=color("red");

rBox3Sprite=createSprite( width-700, height-80, 30, 180);
rBox3Sprite.shapeColor=color("red");
	
engine = Engine.create();
	
world = engine.world;

	
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	
World.add(world, packageBody);
	

	
//Create a Ground

ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	
World.add(world, ground);

    console.log(ground);
    console.log(ground.position.x);
    console.log(ground.position.y);

	
packageBody.scale=0.5;


//package = Bodies(200,100,50,50,package_options);

	Engine.run(engine);
  
  

}



function draw()
{

  rectMode(CENTER);
  
background(0);
  
packageSprite.x= packageBody.position.x 
  Engine.update(engine);
  rectMode(CENTER); 
  //rect(package.position.x,package.position.y,50,50);
packageSprite.y= packageBody.position.y 

packageSprite.collide(rBox1Sprite);

drawSprites();
 

}


function keyPressed() {

 if (keyCode === DOWN_ARROW) {

    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
  }
}



