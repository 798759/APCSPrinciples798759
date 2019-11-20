var snake1;
var cell;
var score =0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cell = width/32;
  snake1 = new snake(100,100,cell);
  food = new Food(50,50,cell);
  frameRate(10);
}

//  The draw function is called @ 30 fps
function draw() {
background(5,5,5);
toggleGrid();
snake1.run();
runFood();
runScore();
}



function paintLines(r,g,b){
  stroke(r,g,b);
  for(var i=0; i<width; i=i+cell){
    line(i,0,i,height);
  }
  for(var i=0; i<height; i=i+cell){
    line(0,i,height,i);
  }
}
function toggleGrid(){
var temp = keyCode;
var on;
  if(keyCode===71){
    
  }
}

function runFood(){
  food.render();
  if(eaten()===true){
    changeFood();
  }
}
function changeFood(){
    var x = int(random(0,32))*cell;
    var y = int(random(0,32))*cell;
    food = new Food(x,y,cell);
    score ++;
}
function runScore(){
  fill(255,255,255);
  textSize(16);
  text(("Score: "+score),width-100,50);
}


function eaten(){
  if(food.getX()===snake1.getX()&&food.getY()===snake1.getY()){
    return true;
  }
}
