class snake{
  constructor(x,y,size){
    this.loc = createVector(x,y);
    this.s = size;
    this.vel = createVector(this.s,this.s);

  }
  run(){
    this.render();
    this.move();
  }
  render(){
    fill(255,255,0); /// Set Color of Snake
    rect(this.loc.x,this.loc.y,this.s,this.s)
  }
  move(){
    if(keyCode===LEFT_ARROW){
      this.loc.x = this.loc.x - this.vel.x;
    }
    if(keyCode===RIGHT_ARROW){
      this.loc.x = this.loc.x + this.vel.x;
    }
    if(keyCode===38){
        this.loc.y = this.loc.y-this.vel.y;
    }
    if(keyCode===40){
      this.loc.y=this.loc.y + this.vel.y;
    }
  }
  checkEdges(){
  if(this.loc.x<0|| this.loc.x> width){
    this.vel.x = -this.vel.x;
  }
  }
  eaten(){
    if(f1.getX()===this.loc.x&&f1.getY()===this.loc.y){
      
    }
  }

}

class segment{
  constructor(x,y){
    this.loc = createVecctor(x,y);
      this.segmentList = [];
  }
}
