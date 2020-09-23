
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bottomSprite,lsideSprite,rsideSprite,bottom,lside,rside,bottomImg;

function preload(){
	bottomImg=loadImage("dustbingreen1.png")
}

function setup() {
	var canvas= createCanvas(1300, 700);
	

	engine = Engine.create();
	world = engine.world;

	Paper1= new PaperClass(200,500,60,PI/2)
	Ground1= new Ground(650,680,1300,20)

	bottomSprite=createSprite(950,590,200,18)
	bottomSprite.shapeColor=color("red")
	bottomSprite.addImage("hi",bottomImg)
	bottomSprite.scale=0.5

	lsideSprite=createSprite(1020,610,14,120)
	lsideSprite.shapeColor=color("lightpink")

	rsideSprite=createSprite(880,610,14,120)
	rsideSprite.shapeColor=color("lightpink")

	bottom= Bodies.rectangle(950,680,200,18,{isStatic:true})
	
	console.log(width)
	World.add(world,bottom)

	lside= Bodies.rectangle(1020,610,14,120,{isStatic:true})
	World.add(world,lside)	

	rside= Bodies.rectangle(880,610,14,120,{isStatic:true})
	World.add(world,rside)	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background("pink");

  Paper1.display()
  Ground1.display()
  drawSprites();

 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(Paper1.body,Paper1.body.position,{x:563,y:-800})
	}
}


