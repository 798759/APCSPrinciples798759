class snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.s = 25;
  }
  run(){
    render()
    move()
  }
  render(){
    fill(255,255,0); /// Set Color of Snake
    rect(this.loc.x,this.loc.y,this.s,this.s)
  }
  move(){
    if(keyCode===LEFT_ARROW){
      this.loc.x = this.loc.x -this.s;
    }
    if(keyCode===RIGHT_ARROW){
      this.loc.x = this.loc.x + this.s;
    }
    if(keyCode===38){
      this.loc.y= this.loc.y + this.s;
    }
    if(keyCode===40){
      this.loc.y = this.loc.y - this.s;
    }
  }
}

class segment{
  var segmentList = [];
  constructor(x,y){
    this.loc = createVecctor(x,y);
  }
}
