var canvas;
var music;
var box1,box2,box3,box4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(150,550,100,10);
    box2=createSprite(300,550,100,10);
    box3=createSprite(450,550,100,10);
    box4=createSprite(600,550,100,10);
    ball=createSprite(250,250,50,50);
    
    


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    ball.velocityX=5;
    ball.velocityY=5;

  if(box2.isTouching(ball)){
      ball.ShapeColour=rgb(255,128,0);
      ball.velocityX=0
      music.stop();
  }
    //create edgeSprite

box1.display();
box2.display();
box3.display();
box4.display();
ball.display();




    //add condition to check if box touching surface and make it box
}
