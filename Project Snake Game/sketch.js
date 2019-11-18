var snake1;
var cell;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cell = width/32;
  snake1 = new snake(100,100,cell);
  food = new Food(50,50,cell);
  frameRate(7);
}

//  The draw function is called @ 30 fps
function draw() {
background(5,5,5);
paintLines(108, 110, 89);
snake1.run();
runFood();
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

function runFood(){
  var first = 1;
  var ate;
  ate = eaten();
  if(first===1||ate===true){
    var x = random(0,32)*cell;
    var y = random(0,32)*cell;
    food = new Food(x,y,cell);
    first++;
    ate = false;
  }
  food.render();
}

function eaten(){
  if(food.getX()===snake1.getX()&&food.getY()===snake1.getY()){
    return true;
  }
}
