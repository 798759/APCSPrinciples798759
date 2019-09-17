

var balls =[];
var b1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
b1 = new ball(1,1,.5,random(200,600),30);
}

//  The draw function is called @ 30 fps
function draw() {
background(20,20,20);
b1.run();
//background(20,20,20)
}
