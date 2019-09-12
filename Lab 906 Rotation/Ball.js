class ball{
constructor(dx,dy,id,sizeX){
this.location=  createVector(random(width/2),random(height/2))
this.velocity =  createVector(dx,dy)
this.acc = createVector(0,.1);
this.clr=color(random(255),random(255),random(255));
this.id=id;
this.sizeX=sizeX;
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
}



update(){
// var distanceToBigBall;
// if(this.id>=0){
//   distanceToBigBall = this.location.dist(bigball.location);
//   if(distanceToBigBall < 250){
//     this.acc = p5.Vector.sub(bigball.location, this.location);
//     this.acc.normalize();
//     this.acc.mult(0.1);
//     }
//   if(distanceToBigBall<150){
//     this.acc = p5.Vector.sub(bigball.location, this.location);
//     this.acc.normalize();
//     this.acc.mult(0.5);
//     }
//   }
//this.velocity.add(this.acc);
this.velocity.add(this.acc);
this.location.add(this.velocity);
this.velocity.limit(5);
  }

render(){
  //fill(this.clr);
  ellipse(this.location.x,this.location.y,this.sizeX,this.sizeX);
    fill(this.clr);
  }
}
