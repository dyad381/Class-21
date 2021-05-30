var fixedRect,movingRect, fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 100, 50, 80);
  movingRect= createSprite(400, 100, 80, 30);
  fixedRect1= createSprite(200, 100, 50, 80);

  movingRect.velocityX = -3;
  fixedRect.velocityX = 3;
}

function draw() {
  background(255,255,255); 
  bounceOff(movingRect, fixedRect)

if(isTouching(movingRect, fixedRect))
  {movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";

}
else if(isTouching(movingRect, fixedRect1)){
  movingRect.shapeColor="blue";
  fixedRect1.shapeColor="blue";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
fixedRect1.shapeColor = "green";

}


  drawSprites();
}
