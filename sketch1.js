var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a1=createSprite(100,100,50,50);
  a1.shapeColor = "blue";

  a2=createSprite(200,100,50,50);
  a2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);
  a1.x = mouseX;
  a1.y = mouseY;
  if(isTouching(a1, a2)){
      a1.shapeColor = "green";
      a2.shapeColor = "green";
  }
  else{
    a1.shapeColor = "blue";
      a2.shapeColor = "blue";  
  }  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

