//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [9,8,7,6,5,4,3,2,1];
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
  var t1 = millis();
  var index;
  for(var i=0; i < list.length-1; i++){
    var index = i;
    var min = list[i];
    for(var j = i+1; j<list.length; j++){
      if(list[j]< list[index]){
        index = j;
      }
    }
    var small = list[index];
    list[index] = list[i];
    list[i]=small;
    numOfSwaps++;
  }
  var t2 = millis();
  var seconds = (t2-t1)/1000;
  console.log("Swaps: "+numOfSwaps);
  console.log(list);
  console.log("Seconds: "+seconds);

}

function swap(a,b){
temp = list[a];
list[a]=list[b];
list[b] = temp;
numOfSwaps++;
}

function time(t1){
var t2 = millis()
}
