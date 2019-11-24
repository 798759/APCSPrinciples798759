var snake1;
var cell;
var score =0;
var on=1;
var gameState;// global variables
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cell = width/32;
  snake1 = new snake(width/2-300,height/2,cell);
  food = new Food(width/2,height/2,cell);// sets of food and snake
  frameRate(10);
}

//  The draw function is called @ 30 fps
function draw() {
titleScreen(); // draws title screen
if(gameState===2){
  background(5,5,5);
  toggleGrid(on); // method for toggling on and off grid
  snake1.run(); // runs the game
  runFood();
  runScore();
  }
if(gameState===3){ // all game over screen
  clear()
  background(20,20,20)
  textSize(25);
  fill(4,181,54);
  text('GAME OVER',width/2,height/2);
  text('Score: '+score,width/2,height/2+50);
}
}
function titleScreen(){ // bunch of boring stuff
  textSize(75);
   fill(4,181,54);
   text('Snake Game',200,200);
   textSize(25);
   fill(0,255,0)
   text('Start',375,550);
   rect(375,575,50,50);
   fill(0,0,255);
   text('Click start to begin the game.',50,350);
   text('Use WASD or Arrow Keys to move.',50,375);
   text('Grow your snake by eating food.',50,400);
   text('toogle GridLines at any time by pressing g',50,425)
   text(' Good luck!',50,450);
   if(mouseIsPressed&& // button
       mouseX>375&&
       mouseX<425&&
       mouseY>575&&
       mouseY<625){
         clear();
         gameState=2;
       }
 }



function paintLines(r,g,b){ // paints grid
  stroke(r,g,b);
  for(var i=0; i<width; i=i+cell){
    line(i,0,i,height);
  }
  for(var i=0; i<height; i=i+cell){
    line(0,i,height,i);
  }
}
function toggleGrid(on){ // toggles grid
  if(on%2==0){
    paintLines(255,255,255);
  }
}

function runFood(){
  food.render();
  if(eaten()===true){
    changeFood();
  }
}
function changeFood(){ // changes score puts food at new location
    var x = int(random(0,32))*cell;
    var y = int(random(0,32))*cell;
    food = new Food(x,y,cell);
    score ++;
    snake1.loadSegments();
}
function runScore(){ // loads score
  fill(255,255,255);
  textSize(16);
  text(("Score: "+score),width-100,50);
}


function eaten(){ // checks if food has been eaten
  if(food.getX()===snake1.getX()&&food.getY()===snake1.getY()){
    return true;
  }
}
function keyPressed(){ // key listeners also changes direction of snake
  if(keyCode===LEFT_ARROW||keyCode===65){
    snake1.vel = createVector(-cell,0);
  }
  if(keyCode===RIGHT_ARROW||keyCode===68){
    snake1.vel = createVector(cell,0);
  }
  if(keyCode===38||keyCode===87){
      snake1.vel = createVector(0,-cell);
  }
  if(keyCode===40||keyCode===83){
    snake1.vel = createVector(0,cell);
  }
  if(keyCode===71){
    on++;
  }
}
