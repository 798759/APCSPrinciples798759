class ball{
constructor(){
this.x=random(500);
this.y=random(500);
this.dx=random(-3,3);
this.dy=random(-3,3);
this.clr=color(random(255),random(255),random(255));
}
Run(){
//background(5, 5, 5);
  this.checkedges();
  this.update();
  this.render();

}
checkedges(){
  if(this.x<0|| this.x>width){
    this.dx= -this.dx;
  }
  if(this.y<0|| this.y>height){
    this.dy= -this.dy;
  }
}
update(){
  this.x=this.x+this.dx;
  this.y=this.y+this.dy;

}
render(){
  fill(this.clr);

  ellipse(this.x,this.y,50,50);
}
}
