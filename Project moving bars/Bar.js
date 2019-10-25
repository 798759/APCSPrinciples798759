
class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
  }
run(){

  this.render();

}
render(){
  fill(255,23,201);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
set(i){
  this.loc.x=i*25;
}
}
