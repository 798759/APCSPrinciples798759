

var balls =[];
var p1;
var score;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(2);
}

//  The draw function is called @ 30 fps
function draw() {
background(20,20,20);
runObjects();
//texsize(25);
text("Score"+score);
}

function loadObjects(num){
for(var i =0; i<num; i++){
  balls[i] =  new ball(i,1,.1,random(100,800),30);
}
p1= new paddle(200,300,600);
}

function runObjects(){
for(var i =0; i<balls.length; i++){
  balls[i].run();
}
p1.run();
}
function gameStates(){

}
