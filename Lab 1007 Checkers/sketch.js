
var squares = new Array(8);

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadSquares();
runSquares();

}

//  The draw function is called @ 30 fps
function loadSquares() {
for(var i=0; i<squares.length; i++){
  squares[i]= new Array(8)
}
  for(var c=0; c<8; c++){
    for(var r=0; r<8; r++){
        squares[r][c]= new square((c*100),(r*100),r+c);
    }
  }
}

function runSquares(){
  for(var c=0; c<8; c++){
    for(var r=0; r<8; r++){
        squares[r][c].render();
    }
  }

}
