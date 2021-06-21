const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var con;
var con2;
var con3;
var con4;
var con5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	options = {restitution:0.8}

    ball = Bodies.circle(346,300,13,options);
    World.add(world, ball);

    ball1 = Bodies.circle(373,300,13,options);
    World.add(world, ball1);

	ball2 = Bodies.circle(400,300,13,options);
    World.add(world, ball2);

	ball3 = Bodies.circle(427,300,13,options);
    World.add(world, ball3);

	ball4 = Bodies.circle(454,300,13,options);
    World.add(world, ball4);

	con = Matter.Constraint.create({
		pointA: {x:350, y:100},
		bodyB: ball,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	});
	World.add(world, con);

	con2 = Matter.Constraint.create({
		pointA: {x:377, y:100},
		bodyB: ball1,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	});
	World.add(world, con2);

	con3 = Matter.Constraint.create({
		pointA: {x:404, y:100},
		bodyB: ball2,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	});
	World.add(world, con3);

	con4 = Matter.Constraint.create({
		pointA: {x:431, y:100},
		bodyB: ball3,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	});
	World.add(world, con4);

	con5 = Matter.Constraint.create({
		pointA: {x:458, y:100},
		bodyB: ball4,
		pointB: {x:0, y:0},
		length: 200,
		stiffness: 0.1
	});
	World.add(world, con5);


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}






function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball.position.x, ball.position.y, 13);
  ellipse(ball1.position.x, ball1.position.y, 13);
  ellipse(ball2.position.x, ball2.position.y, 13);
  ellipse(ball3.position.x, ball3.position.y, 13);
  ellipse(ball4.position.x, ball4.position.y, 13);

  push();
  strokeWeight(3);
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  line(con2.pointA.x, con2.pointA.y, ball1.position.x, ball1.position.y);
  line(con3.pointA.x, con3.pointA.y, ball2.position.x, ball2.position.y);
  line(con4.pointA.x, con4.pointA.y, ball3.position.x, ball3.position.y);
  line(con5.pointA.x, con5.pointA.y, ball4.position.x, ball4.position.y);
  pop();
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.008, y:0})
	}
}