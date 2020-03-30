var fixedRect, movingRect;
var Obj3, Obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Obj3 = createSprite(200,400,80,40);
  Obj3.shapeColor = "blue";
  Obj3.debug = true;
  Obj4 = createSprite(400,400,80,40);
  Obj4.shapeColor = "blue";
  Obj4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  Obj3.x = World.mouseX;
  Obj3.y = World.mouseY;
  bounceOff(fixedRect, movingRect );
  if(isTouching ( Obj3, Obj4 )){
  Obj3.shapeColor="yellow";
  Obj4.shapeColor="yellow";
  }
else{
  Obj3.shapeColor="blue";
  Obj4.shapeColor="blue";
}
  
  drawSprites();
}

