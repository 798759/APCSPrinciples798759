

var balls =[];
var p1;
var score=0;
var firstRun=0;
var gameStart=0;
var mode;
var textX=200;
var textY=400;
var b1;
var x;
var mouseState;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
}

//  The draw function is called @ 30 fps
function draw() {
b1= new Button(100,100,25,25,25);
b1.loadButton();
textSize(64)
text("Welocme to Fun \n With Balls",textX,textY)
if(mouseState=== 1){
  x =1;
  z = null;
  w = null;
  textX =100000;
  textY = 100000;
}
if(x===1) gameStates(1);
}


function loadObjects(num,lengthOfPaddle){
for(var i =0; i<num; i++){
  balls[i] =  new ball(i,1,.1,random(100,800),30);
}
p1= new paddle(lengthOfPaddle,300,600);
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
  if(mode===1) gameStart = 1;
  if(gameStart==1){
    background(255,255,255,60);
    if(firstRun==0)loadObjects(5,250);
    firstRun++;
    runObjects();
    textSize(32);
    text(("Score: "+score),10,30);
    deleteBalls();
    if(booleanState()===false){
      background(255,255,255);
      textSize(40);
      text(("Score: "+score),300,450);
      textSize(64);
      text("Game Over",300,400);
      gameStart = 0;
    }
  }
}
function mouseClicked(){
  if(mouseX > 25 && mouseX < 75
  && mouseY> 25 && mouseY <75){
    mouseState= 1;
  }
  if(mouseX > 200 && mouseX < 250
  && mouseY> 25 && mouseY <75){
    mouseState= 2;
}
}

function deleteBalls(){
  for(var i=balls.length-1; i>=0; i--){
    if(balls[i].loc.y>height){
      balls.splice(i, 1);
    }
  }
}
