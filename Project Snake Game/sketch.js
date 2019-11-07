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
}

//  The draw function is called @ 30 fps
function draw() {
paintLines();
line()
//background(5,5,5);
//snake1.run();
}

function paintLines(){
  stroke(255,255,2555);
for(var i=0; i>width; i=i*cell){
  line(i,0,i,height);
  }
}
