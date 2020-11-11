var fixedRect, movingRect
var ball

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,30,70);
  ball = createSprite(280,100,10,10);
  ball.velocityX = 3;
  ball.velocityY = 3;
  sprite1 = createSprite(250,300,50,10);
  sprite2 = createSprite(300,400,50,50);
  ball2 = createSprite(260,100,10,10);
  ball2.velocityX = 2;
  ball2.velocityY = 2;

}

function draw() {
  background(255,255,255); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(isTouching(sprite1,movingRect)){
    fixedRect.x = fixedRect.x + 20;
  }

  bounceOff(ball,fixedRect);
  bounceOff(ball2,fixedRect);
 
  drawSprites();
  console.log(addition(4,5));
}


