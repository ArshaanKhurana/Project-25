
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
   dustbinImg = loadImage("dustbingreen.png");


   
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	ground1 = Bodies.rectangle(width / 2, 600, width, 10,
		{
			isStatic: true
		});

		World.add(world,ground1);



	paper1 = new Paper(100, 300, 10);


	dustbin1 = new Dustbin(720, 590, 100, 10);
	dustbin2 = new Dustbin(675,545,10,90);
	dustbin3 = new Dustbin(770,545,10,90);

 
}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	rect(ground1.position.x, ground1.position.y, width, 10)
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper1.display();
	image(dustbinImg,675, 500,100,100);
	drawSprites();

}

function keyPressed() {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-4})
	}



