

var balls =[];
var p1;
var score=0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //frameRate(120);
  loadObjects(2);
}

//  The draw function is called @ 30 fps
function draw() {
background(255,255,255,30);
runObjects();
textSize(32);
text(("Score: "+score),10,30);
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
