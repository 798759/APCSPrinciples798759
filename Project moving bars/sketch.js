var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars();

}

//  The draw function is called @ 30 fps
function draw() {

}

function loadBars(){
  for(var i=0; i<10; i++){
    list[i]=new bar(random(height),(10*i),0);
  }
}
function spitBars(){
  for(var i=0; i<10; i++){
    list[i].run();
  }
}
function bubbleSort(){
  for(var i=0; i<list.length; i++){
    for(var x=0; x<list.length-1-i; x++){
      if(list[x]>list[x+1]){
      swap(x,x+1);
      }
    }
  }
}

function swap(a,b){
temp = list[a];
list[a]=list[b];
list[b] = temp;
}
