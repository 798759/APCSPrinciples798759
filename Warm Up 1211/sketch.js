//Connor Spackman
var arr = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadArray(11);
  print();
  bubbleSort();
  print();
  average();
  median();
}

//  The draw function is called @ 30 fps

function loadArray(num){
  for(var i=0; i<num; i++){
    arr[i] = random(1,100);
  }
}

function bubbleSort(){
  for(var i =0; i<arr.length-1; i++){
    for(var j=0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log("Sorted")
}

function print(){
console.log("List:")
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function average(){
var sum =0;
  for(var i=0; i<arr.length; i++){
     sum = sum+arr[i];
  }
  console.log("Average: "+sum/arr.length);
}
function median(){
  var half = int(arr.length/2);
  console.log("Median: "+arr[half]);
}
