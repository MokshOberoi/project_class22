var background , backgroundImage ;
var fairy , fairyImage;
var star , starImage;

//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function preload()
{
   //preload the images here
   backgroundImage = loadImage("images/starnight.png");
   fairyImage = loadImage("images/fairy2.png",);
   starImage = loadImage("images/star.png");
}

function setup() {
  createCanvas(800, 750);

  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  fairy = createSprite(150,450,20,20);
  fairy.addImage(fairyImage);
  fairy.scale = 0.3;

  star = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add (myWorld, star );
 
  
console.log(star);


}


function draw() {

  background(backgroundImage);
  
  if (keyDown(LEFT_ARROW)){
      fairy.x = fairy.x - 10;
  }

  if (keyDown(RIGHT_ARROW)){
      fairy.x = fairy.x + 10;
  }

  if (keyDown(DOWN_ARROW)){
      star.isStatic = false ;
    
}

  Engine.update (myEngine);

  ellipseMode(RADIUS);
  ellipse (star.position.x,star.position.y,20,20);

  drawSprites();
}
