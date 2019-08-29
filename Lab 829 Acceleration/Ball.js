class ball{
constructor(x,y,dx,dy){
this.location=  createVector(x,y)
this.velocity =  createVector(dx,dy)
this.acc = createVector(0,.1);
this.clr=color(random(255),random(255),random(255));
}

Run(){
//background(5, 5, 5);
  this.checkedges();
  this.update();
  this.render();

}
checkedges(){
  if(this.location.x<0|| this.location.x>width){
    this.velocity.x= -this.velocity.x;
  }
  if(this.location.y<0|| this.location.y>height){
    this.velocity.y= -this.velocity.y;
  }
//if(this.velocity.x<.01){
  //this.velocity.x=.5
  //this.velocity.y=.5
//}
}



update(){
this.velocity.add(this.acc);
this.location.add(this.velocity);


}
render(){
  fill(this.clr);
  ellipse(this.location.x,this.location.y,50,50);
}


  }
