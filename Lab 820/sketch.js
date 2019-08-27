//  Your Name
// 	Date or version number
//  This is a comment

//  The setup function function is called once when your program begins
var x;
var y;
var xSpeed;
var ySpeed;
xSpeed=10;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
x=200;
y=200;

}

//  The draw function is called @ 30 fps

function draw() {
background(5, 5, 5);
ellipse(x, y, 55, 55);
x=x+xSpeed;
y=y+ySpeed;
if(x>0){
xSpeed=-1*xSpeed;
}
if(x<width){
  xSpeed=-1*xSpeed;
}
}
if(y>0){
ySpeed=-1*ySpeed;
}
if(y<height){
  ySpeed=-1*ySpeed;
}
}
//ellipse(x, y, 55, 55);
//ellipse(56, 46, 55, 55);
//ellipse(56, 46, 55, 55);
