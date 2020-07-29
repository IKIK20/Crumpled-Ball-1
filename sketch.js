
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bottomSprite,lsideSprite,rsideSprite,bottom,lside,rside;

//function preload(){
	
//}

function setup() {
	var canvas= createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	Paper1= new PaperClass(200,500,50,PI/2)
	Ground1= new Ground(650,680,1300,20)

	bottomSprite=createSprite(950,650,200,18)
	bottomSprite.shapeColor=color("red")

	lsideSprite=createSprite(1050,610,18,100)
	lsideSprite.shapeColor=color("red")

	rsideSprite=createSprite(850,610,18,100)
	rsideSprite.shapeColor=color("red")

	bottom= Bodies.rectangle(950,650,200,18,{isStatic:true})
	console.log(width)
	World.add(world,bottom)

	lside= Bodies.rectangle(1050,610,18,100,{isStatic:true})
	World.add(world,lside)	

	rside= Bodies.rectangle(850,610,18,100,{isStatic:true})
	World.add(world,rside)	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  //rectMode(CENTER);
  background(0);

  keyPressed()
  
  Paper1.display()
  Ground1.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(Paper1.body,Paper1.body.position,{x:35,y:-35})
	}
}


