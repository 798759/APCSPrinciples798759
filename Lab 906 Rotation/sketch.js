//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var tris=[];s
var bigball;

function RunObjects(){
   bigball.Run();
  for(var i=0; i<tris.length; i++){
    tris[i].Run();
  }
}
  function LoadObjects(){
    bigball = new ball(random(-0.5,0.5),random(-0.5,0.5)-1s)
    for(var i=0; i<100; i++){
      tris[i]= new Ship(5,5,i);
    }
  }
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5,20);
  fill(200, 30, 150);
LoadObjects();
//Creates balls
}

//  The draw function is called @ 30 fps
function draw() {
background(5, 5, 5,20);
  RunObjects();


}
