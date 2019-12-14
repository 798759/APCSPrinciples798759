//Connor Spackman's Program

var balls=[];
var ship;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls();
  loadShip();
}

function draw() {
background(0,0,0);
runBalls();
ship.run();
}

function loadBalls(){
  for(var i=0; i<10; i++){
  balls[i] = new Ball(random(0,10),random(0,10));
}
}
function loadShip(){
  ship = new Ship(random(width),random(height),random(0,10),random(0,10));
}

function runBalls(){
  for(var i=0; i<balls.length; i++){
  balls[i].run();
}
}
