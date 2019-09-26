

var balls =[];
var p1;
var score=0;
var firstRun=0;
var gameStart=0;
var mode;
var textX;
var textY;
var x;
var gameState=-1;
var mouseState;
var b1,b2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
 textY = height/2;
 textX = width/2-200;
 frameRate(60);
 intGame();
}

//  The draw function is called @ 30 fps
function draw() {
loadStartScreen();
mouseState=false;
if(gameState=== 0){
  x =0;
  textX =100000;
  textY = 100000;
}
if(x===0) gameStates(0);
}


function loadObjects(num,lengthOfPaddle){
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
}

function runObjects(){
for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
  p1.run();
}

function booleanState(){
var check=0;
  for(var i=0; i<balls.length; i++){
    if(balls[i] == null) check++;
  }
  if(check===balls.length){
    return false;
  }
}

function gameStates(mode){
  if(mode===0) gameStart = 1;
  if(gameStart==1){
    background(255,255,255,60);
    if(firstRun==0)loadObjects(4,300);
    firstRun++;
    runObjects();
    textSize(32);
    text(("Score: "+score),10,30);
    deleteBalls();
    endGame();
  }
}
function gameStateEasy(){

}
function endGame(){
  if(booleanState()===false){
    background(255,255,255);
    textSize(40);
    text(("Score: "+score),300,450);
    textSize(64);
    text("Game Over",300,400);
    gameStart = 0;
    gameState=-1;
    b1 = new Button((width/2-150)+0*150,height/2+200,141,219,255,4);
    b1.loadButton();
    b1.CheckMouse();

  }
}
function loadStartScreen(numOfButtons){
  var buttons =[];
  for(var i=0; i<3; i++){
    buttons[i] = new Button((width/2-150)+i*150,height/2+200,141,219,255,i);
    buttons[i].loadButton();
    buttons[i].CheckMouse();
    }
  fill(0,0,0);
  textSize(64);
  text("Welcome to Fun \n With Balls",textX,textY);
}
function mouseClicked(){
  mouseState = true;
}

function deleteBalls(){
  for(var i=balls.length-1; i>=0; i--){
    if(balls[i].loc.y>height){
      balls.splice(i, 1);
    }
  }
}
