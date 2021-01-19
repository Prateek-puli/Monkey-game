
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, survivaltime = 0;
var ground, ground2;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 400);
  
  ground = createSprite(800, 360, 1100, 10);
  ground2 = createSprite(590, 360, 100, 10)
  ground.x = ground.width /2;
  
 
  monkey = createSprite(85, 310, 50, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  monkey.collide(ground);
  monkey.debug = false;
  monkey.setCollider("circle", 0, 0, 300);
  
  obstacleGroup = new Group();
  foodGroup = new Group();

  score = 0
  score.scale = 5;
}


function draw() {
background(250);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    } 
   ground.velocityX = -3; 
  
  spawnBanana();
  spawnObstacle();
  
  
    if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  
  fill("black");
  textSize(20);
  text("Survival Time:"+score, 180, 80);
  score = score + Math.round(frameCount/400);
  
  //console.log(World.mouseY)
  

     
  
  drawSprites();
}





function spawnObstacle() {
  if(frameCount % 300 === 0) {
    
     obstacle = createSprite(550, 322, 50, 50);
  obstacle.addImage("image", obstacleImage);
  obstacle.scale =0.18;
  
  
  obstacle.velocityX = ground.velocityX;
  
  obstacleGroup.add(obstacle);
    
    if(obstacleGroup.isTouching(monkey)) {
      
      monkey.velocityX = 0; 
    }
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
  
}//spawnObstacle


function spawnBanana() {
  if(frameCount % 300 === 0) {
    
  banana = createSprite(410, 160, 50, 50);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.13;
    
  banana.x = random(400, 430);
  banana.y = random(120, 200);
    
  banana.velocityX = ground.velocityX
    
 
    
 foodGroup.add(banana);

  }//if frameCount
  
  
}//spawnbanana






