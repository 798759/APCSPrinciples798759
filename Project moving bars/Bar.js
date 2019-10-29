
class Bar{
  constructor(x,y,w,h,c,r,g,b){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.r=r;
    this.g=g;
    this.b=b;
    this.avrg = (this.b+this.g+this.r)/3
  }
run(){

  this.render();

}
render(){
  fill(this.r,this.g,this.b);
  rect(this.loc.x,this.loc.y,this.w,this.h);
  //fill(this.r,this.g,this.b);
}
set(i){
  this.loc.x=i*25;
}
}
