//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1,b2,b3,b4,b5,b6;
var balls=[];
var bigball;
function RunBalls(){
  for(var i=0; i<balls.length; i++){
    balls[i].Run();
  }
  bigball.Run();
}
  function LoadBalls(){
    for(var i=0; i<100; i++){
      balls[i]= new ball(5,5,i,25,25);
    }
    bigball = new ball(2,2,-1,75,75);
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5,20);
  fill(200, 30, 150);
LoadBalls();
//Creates balls
}

//  The draw function is called @ 30 fps
function draw() {
background(5, 5, 5,20);
  RunBalls();


}
