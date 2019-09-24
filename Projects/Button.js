class Button{
  constructor(x,y,r,g,b,id){
  this.x =x;
  this.y =y;
  this.w = 25;
  this.z= 25;
  this.r =r;
  this.g =g;
  this.b=b;
  this.id=id;
  }
  loadButton(){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.z);
  }
  mouseClicked(){
    if(mouseX > this.x && mouseX < this.x+
    && mouseY> 25 && mouseY <75){
      mouseState= 1;
    }
    if(mouseX > 200 && mouseX < 250
    && mouseY> 25 && mouseY <75){
      mouseState= 2;
}
}
