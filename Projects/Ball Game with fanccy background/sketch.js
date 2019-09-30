

var balls =[]; // An Array for Balls
var p1;
var score=0;
var firstRun=0;
var textX;
var textY;
var gameState=3; // gameState the driving force and biggest pain in the neck of this game
var mouseState;
var b1,b2;
var track;
var bg;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  bg = new bg();
 textY = height/2;// Sets position of text
 textX = width/2-200;
 bg.setupBackground();
 frameRate(60); // Forces the game to run at 60 frame cause this game is not ment for chrombooks
}

//  The draw function is called @ 30 fps
function draw() {
  bg.setDraw();
  if(gameState===0){
  gameStates(0); /// Logic to decide on gamemode
  }
  if(gameState===1){
  gameStates(1);
  }
  if(gameState===2){
    gameStates(2);
  }
  if(gameState===3){
    loadStartScreen();
  }

}


function loadObjects(num,lengthOfPaddle){ // a method to load Objects
for(var i =0; i<num; i++){
  balls[i] =  new ball(i,1,.035,random(100,width/1.5),0+100*i);
}
p1= new paddle(lengthOfPaddle,height/2,width/2+250);
}

function intGame(gameState){
  if(gameState===0){
    loadObjects(4,300);
  }
  if(gameState===1){
    loadObjects(6,250);
  }
  if(gameState===2){
    loadObjects(6,100)
  }
}

function runObjects(){ // A method to run objects
for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
  p1.run();
}

function booleanState(){ // a method to check if the game is over
var check=0;
  for(var i=0; i<balls.length; i++){
    if(balls[i] == null) check++;
  }
  if(check===balls.length){
    return false;
  }
}

function gameStates(mode){ // A method that runs the given gamemode
    background(255,255,255,60);
    if(firstRun==0){
      intGame(gameState);
      track=gameState;
    }
    firstRun++;
    runGame();
}
  function runGame(){ // a method to run the game
    runObjects();
    textX =100000;
    textY = 100000;
    textSize(32);
    text(("Score: "+score),10,30);
    deleteBalls();
    if(booleanState()===false){
      gameState=0;
      endGame();
    }
}

function endGame(){ // a method to load the end game screen
  if(booleanState()===false){
    background(255,255,255);
    textSize(40);
    text(("Score: "+score),300,450);
    textSize(64);
    text("Game Over",300,400);
    b1 = new Button((width/2-150)+0*150,height/2+200,141,219,255,3);
    b1.ForceLoad();
    b1.Restart();
    mouseState=false;
    }
}
function loadStartScreen(numOfButtons){ // a method to load buttons
  var buttons =[];
  for(var i=0; i<3; i++){
    buttons[i] = new Button((width/2-150)+i*150,height/2+200,141,219,255,i);
    buttons[i].loadButton();
    buttons[i].CheckMouse();
    }
  fill(0,0,0);
  textSize(64);
  text("Welcome to the \nBall Game",textX,textY);
  textSize(32)
  text("Use the A and D keys \nor the Arrow Keys to move",textX,textY+130)
}
function mouseClicked(){
  mouseState = true;
}

function deleteBalls(){ // a method to delete balls from the array when the fall off the screen
  for(var i=balls.length-1; i>=0; i--){
    if(balls[i].loc.y>height){
      balls.splice(i, 1);
    }
  }
}
