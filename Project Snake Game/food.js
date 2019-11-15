class Food{
  constructor(x,y,size){
    this.x=x;
    this.y=y;
    this.size = size;
  }
  run(){
    this.render()
  }
  render(){
    fill(240,20,5);
    rect(this.x,this.y,this.size,this.size);
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
}
