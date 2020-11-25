var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRect = createSprite(300,350,50,55);
 movingRect.shapeColor = "blue";
 fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
   movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
   fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "blue";
    
  }
 else{  movingRect.shapeColor = "blue";
 fixedRect.shapeColor = "green";}
  drawSprites();
}