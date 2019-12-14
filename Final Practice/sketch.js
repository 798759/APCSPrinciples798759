//Connor Spackman's Program

var ball;
var ships =[];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBall();
  loadShip();
}

function draw() {
background(0,0,0);
ball.run();
runShips();
}

function loadBall(){
  ball = new Ball(random(0,10),random(0,10));
}

function loadShip(){
  for(var i=0; i<10; i++){
    ships[i] = new Ship(random(width),random(height),random(0,10),random(0,10));
  }
}

function runShips(){
  for(var i=0; i<ships.length; i++){
    ships[i].run();
  }
}
