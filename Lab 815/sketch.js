//  Connor Spackman
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

var x =0;
//  The draw function is called @ 30 fps
//function draw() {
//  triangle(30, 75, 58, 20, 86, 75);
function draw() {

  if (keyIsPressed === true) {
var x +=1;
      fill(x);
    }
    rect(25, 25, 50, 50);
  }
