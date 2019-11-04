var snake1;
var cell;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  cell = width/32;
snake1 = new snake(100,100,cell);
frameRate(10);
runFood();
}

//  The draw function is called @ 30 fps
function draw() {
snake1.run();
//runFood();
}

function runFood(){
  var x = int(random(0,32));
  var y= int(random(0,32));
  var f1 = new food(x*cell,y*cell,25,25);
  f1.run()
}
