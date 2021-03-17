var canvas;
var music;

var box1,box2,box3,box4; 
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas= createCanvas(800,600);

box1=createSprite(700,500,100,10);
box1.shapeColor="red";

box2=createSprite(500,500,100,10);
box2.shapeColor="blue";

box3=createSprite(300,500,100,10);
box3.shapeColor="green";

box4=createSprite(100,500,100,10);
box4.shapeColor="yellow";


ball=createSprite(random(20,750),300,30,30);
ball.shapeColor="white";
ball.velocityX=5;
ball.velocityY=5;
    //create box sprite and give velocity

}

function draw() {
     background(rgb(169,169,169)); 
     edges=createEdgeSprites(); 
     ball.bounceOff(edges); 
     if(box1.isTouching(ball) && ball.bounceOff(box1)){ 
      ball.shapeColor ="red";
      ball.velocityX = 0; 
    ball.velocityY = 0;
     music.play();
     } 
     if(box2.isTouching(ball) && ball.bounceOff(box2)){ 
    ball.shapeColor = "blue"; 
     ball.velocityX = 0; 
    ball.velocityY = 0;
    music.stop();
    }
    if(box3.isTouching(ball) && ball.bounceOff(box3)){ 
    ball.shapeColor = "green" 
    ball.velocityX = 0; 
    ball.velocityY = 0;
         }
    if(box4.isTouching(ball) && ball.bounceOff(box4)){ 
    ball.shapeColor = "yellow"
    ball.velocityX = 0; 
    ball.velocityY = 0;
    } 
    drawSprites(); 
    }


    



    