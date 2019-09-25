class Button{
  constructor(x,y,r,g,b,id){
  var strings =["Easy","Hard","2\nPlayer","Restart"];
  this.x =x;
  this.y =y;
  this.w = 70;
  this.z= 70;
  this.r =r;
  this.g =g;
  this.b=b;
  this.id=id;
  this.str = strings[this.id];
  }
  loadButton(){
    if(typeof gameState == "undefined"){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.z);
    fill(0,0,0);
    textSize(20);
    text(this.str,this.x,this.y,this.w,this.z)
    }
  }
  CheckMouse(){
    if(mouseX > this.x && mouseX < this.x+this.w
    && mouseY> this.y && mouseY <this.y+this.z &&
    mouseState=== true){
      gameState= this.id;
    }
  }
}
