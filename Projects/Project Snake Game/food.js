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
    rect(this.x,this.y,this.size,this.size);// renders food
  }
  getX(){
    return this.x; // getters for eaten method
  }
  getY(){
    return this.y;
  }
}
