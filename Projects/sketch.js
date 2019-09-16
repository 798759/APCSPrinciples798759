

var balls =[];
var b1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
b1 = new ball(1);
}

//  The draw function is called @ 30 fps
function draw() {
b1.run()
}
