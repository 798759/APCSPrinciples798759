//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [6,8,7,9,5];
var temp;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  console.log(list);
  bubbleSort();

}

//  The draw function is called @ 30 fps
function draw() {

}

function bubbleSort(){
  for(var i=0; i<list.length-1; i++){
    for(var x=0; x<list.length-1-x; x++){
      if(list[x]>list[x+1]){
      temp= list[i];
      list[x]= list[x+1];
      list[x+1] = temp;
      }
    }
  }
    console.log(list);
}
