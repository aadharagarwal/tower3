const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gr
var b1
var backgroundImg 
function preload(){
  polygon_img=loadImage("polygon.png");
  getTime()
}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  gr3 = new ground(360,560,800,20)
  gr = new ground(235, 490, 200, 10)
  gr2 = new ground(610, 380, 280, 10)
  b1 = new cube(172,464)
  b2 = new cube(203,464)
  b3 = new cube(234,464)
  b4 = new cube(265,464)
  b5 = new cube(296,464)
  b6 = new cube(203,423)
  b7 = new cube(234,423)
  b8 = new cube(265,423)
  b9 = new cube(235,382)
  b10 = new cube(514,354)
  b11 = new cube(545,354)
  b12 = new cube(576,354)
  b13 = new cube(607,354)
  b14 = new cube(638,354)
  b15 = new cube(669,354)
  b16 = new cube(700,354)
  b17 = new cube(545,313)
  b18 = new cube(576,313)
  b19 = new cube(607,313) 
  b20 = new cube(638,313)
  b21 = new cube(669,313)
  b22 = new cube(576,272)
  b23 = new cube(607,272)
  b24 = new cube(638,272)
  b25 = new cube(607,231)

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
s1 = new Slingshot(ball,{x:150,y:330})
  Engine.run(engine);
}

function draw() {

  if( backgroundImg ) {
    background(backgroundImg);
}
  rectMode(CENTER);
  //background("saddlebrown");
  text(mouseX + ' ,' + mouseY, mouseX, mouseY);
  Engine.update(engine)


  gr.display()
  gr2.display()

  fill ("skyblue")
  b1.display()
  fill ("skyblue")
  b2 .display()
  fill ("skyblue")
  b3 .display()
  fill ("skyblue")
  b4 .display()
  fill ("skyblue")
  b5.display()
  fill ("aquamarine")
  b6.display()
  fill ("aquamarine")
  b7.display()
  fill ("aquamarine")
  b8.display()
  fill ("pink")
  b9.display()
  fill ("skyblue")
  b10.display()
  fill ("skyblue")
  b11.display()
  fill ("skyblue")
  b12.display()
  fill ("skyblue")
  b13.display()
  fill ("skyblue")
  b14.display()
  fill ("skyblue")
  b15.display()
  fill ("skyblue")
  b16.display()
  fill ("pink")
  b17.display()
  fill ("pink")
  b18.display()
  fill ("pink")
  b19.display()
  fill ("pink")
  b20.display()
  fill ("pink")
  b21.display()
  fill ("aquamarine")
  b22.display()
  fill ("aquamarine")
  b23.display()
  fill ("aquamarine")
  b24.display()
  fill ("gray")
  b25.display()
  gr3.display()
  s1.display()

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  s1.fly();
}

async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata ") 
  var responseJSON = await response.json();
  console.log(responseJSON)
  var dt = responseJSON.datetime;
  console.log(dt);
  var hour = dt.slice(11,13);
  console.log(hour);


  if(hour >=6 && hour <= 18){
      bg = "bg.png";
  }
  else
      bg = "bg2.jpg";
  
  backgroundImg = loadImage(bg);
}