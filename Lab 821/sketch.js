//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1,b2,b3,b4,b5,b6;
let img;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
b1 = new ball();
b2 = new ball();
b3 = new ball();
b4 = new ball();
b5 = new ball();
b6 = new ball();//Creates balls

//function preload() {
// img = loadImage('Patrick.png');
}


//  The draw function is called @ 30 fps


function draw() {
background(5, 5, 5);
b1.Run();
b2.Run();
b3.Run();//Moves balls
b4.Run();
b5.Run();////
b6.Run();//////
///////////////\
//image(img,0,0);

  //ellipse(56, 146, 55, 55);
  //ellipse(100, 146, 55, 55);
}
