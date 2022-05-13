var infinitebg,playerfrog,seaweedimg,coinimg;
var frog,seaweed,coin,coingroup,xpos,score=0,bg,seaweedgroup;

//Game States
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
    infinitebg=loadImage("images/water.jpg");
    playerfrog=loadImage("images/frog.png");
    seaweedimg=loadImage("images/seaweed.png");
    coinimg=loadImage("images/coin.png");
}

function setup(){
    createCanvas(800,700);
    bg=createSprite(400,300);
    bg.addImage("Infinite bg",infinitebg);
    bg.scale=2.4;
    frog=createSprite(300,520);
    frog.addImage("Frog",playerfrog);
    frog.scale=0.2;
    coingroup=new Group();
    seaweedgroup=new Group();
    frog.setCollider("rectangle", 0, 0, 20, 80, -45);
}
function draw(){
  background(infinitebg);
  drawSprites();
 if(gameState === PLAY){
  bg.setVelocity(0,2);
  if(bg.position.y >250){
      bg.position.y =0;
    }
    
  //For moving the sprite 
  if (keyWentDown("space")){
      
      frog.setVelocity(0,Math.round(random(-4,-8)));
     
      
  }
   
  if (keyWentUp("space")|| keyWentUp("left")||keyWentUp("right")){
    frog.setVelocity(0,5);
    
    //frog.y+=30;
  }
  if (keyWentDown("left")){
    frog.setVelocity(-6,2);
   
  }
  if (keyWentDown("right")){
    frog.setVelocity(6,2);
   
  }
  if (keyWentUp("left")){
    frog.setVelocity(0,0);
   
  }
  if (keyWentUp("right")){
    frog.setVelocity(0,0);
   
  }
  
  fill("red")
  textSize(30)
  text("SCORE :"+score,350,50) //For displaying score
  fallingSeaweed();
  // For increasing score
     if(coingroup.isTouching(frog)){
       coingroup.destroyEach();
       score=score+1;
    
       
    }
 //for making velocity zero when frog touching seaweed
    if(frog.isTouching(seaweedgroup)){
        
        frog.setVelocity(0,0);
     
      }
    /* if(frog.isTouching(bg)){
        
        frog.setVelocity(0,6);
        //gameState = END;
     
      }*/
    }
    else if(gameState === END){
        
        bg.setVelocity(0,0);
        frog.visible=false;
        seaweedgroup.destroyEach();
        coingroup.destroyEach();
        fill("red")
        textSize(100)
        textFont("Algerian");
        text("GAME OVER",150,350)
       
        
      }
  

}
//function for creating seaweed and coin
function fallingSeaweed(){
    xpos=Math.round(random(200,500)),0,200,50;
    if(frameCount%200===0){
      seaweed = createSprite(Math.round(random(200,500)),0,200,50);
      seaweed.addImage("seaweed",seaweedimg);
      seaweed.setVelocity(0,2);
      seaweedgroup.add(seaweed);
      seaweed.lifetime = 350;
      seaweed.scale = 0.5;
      coin = createSprite(seaweed.x,seaweed.y-100,200,50);
      coin.addImage("coin",coinimg);
      coin.setVelocity(0,2);
      coin.scale=0.2;
      coingroup.add(coin);
      coin.lifetime=700;
     
       
      }
     
     /* if(frog.x==seaweedgroup.x && frog.y==seaweedgroup.y-70){
        frog.setVelocity(0,-2);
        frog.setVelocity(0,1);
      }*/
      
    
     
    }


  
