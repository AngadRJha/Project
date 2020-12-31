const Render= Matter.Render
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var circle,sling;
var ground
function preload()
{
	var canvas = createCanvas(1200,400);
    
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball = new Circle(400,450);
	ball1 = new Circle(340,450);
	ball2 = new Circle(280,450);
	ball3 = new Circle(460,450)
	ball4 = new Circle(520,450)
	sling = new Rope(ball.body,{x:400,y: 30})
	sling1 = new Rope(ball1.body,{x:340,y: 30})
	sling2 = new Rope(ball2.body,{x:280,y: 30})
	sling3 = new Rope(ball3.body,{x:460,y: 30})
	sling4 = new Rope(ball4.body,{x:520,y: 30})
	ground = new Ground(400,30,800,100)


	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 700,
            showAngleIndicator: true
        }
    });

	Render.run(render);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")
  ball.display();
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  sling.display()
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x:1,y:1})
	}
}


