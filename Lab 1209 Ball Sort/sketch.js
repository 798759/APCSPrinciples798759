

var balls=[];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  load();
frameRate(5);
}

//  The draw function is called @ 30 fps
function draw() {
  for(var i=0; i<balls.length-1; i++){
    if(balls[i].getR()>balls[i+1].getR()){
      balls[i].x = 50*i;
      balls[i].render();
      swap(i,i+1);
    }
  }
}

function swap(a,b){
temp = balls[a];
balls[a]=balls[b];
balls[b] = temp;
}

function load(){
  for(var i=0; i<10; i++){
    balls[i] = new ball(random(100,255),0,0,50*i+150,400);
  }
}
