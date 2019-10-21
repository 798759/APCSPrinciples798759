//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [6,8,7,9,5];
var temp;
var numOfSwaps=0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  console.log(list);
  selectionSort();

}

//  The draw function is called @ 30 fps
function draw() {

}

function insertionSort(){
  for(var i=1; i<list.length; i++){
    for(var x=i; x>0; x--){
      if(list[x]<list[x-1]){
      swap(x,x-1);
      }
    }
  }
    console.log(list);
}

function selectionSort() {
  //var n = list.length;
  var index;
  for(var i=0; i < list.length; i++){
    var index = i;
    var min = list[i];
    for(var j = i+1; j<list.length; j++){
      if(min< list[j]){
        min =list[j];
        index = j;
      }
    }
    swap(list[index],list[i]);
  }
  console.log("Swaps: "+numOfSwaps);
  console.log(list);
}

function swap(a,b){
temp = list[a];
list[a]=list[b];
list[b] = temp;
numOfSwaps++;
}
