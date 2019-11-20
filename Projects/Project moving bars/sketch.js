
var bars=[];

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
//  loadBars();
loadBarsColor();
  frameRate(5);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function draw(){
//bubblesort();
bubblesortColor();
}

function move(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(235);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}
function bubblesort(){
    for (var j=0; j<bars.length-1; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        move();
      }
    }
  }
  function bubblesortColor(){
      for (var j=0; j<bars.length-1; j++){
        if(bars[j].avrg>bars[j+1].avrg){
          swap(bars, j, j+1);
          move();
        }
      }
    }



function loadBars(){
  for (var x=0; x<32; x++){
    var w=int(random(1,32));
    r=255;
    b=23;
    g=201;
    bars[x]= new Bar(25*x,800-(25*w),25,(25*w),r,g,b)
  }
}
function loadBarsColor(){
  for (var x=0; x<32; x++){
    var r=int(random(1,255));
    var b=int(random(1,255));
    var g=int(random(1,255));
    bars[x]= new Bar(25*x,800-(200),25,(700),r,g,b)
  }
}
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
