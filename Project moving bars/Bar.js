class bar{
  constructor(height,x,y){
    this.height = height;
    this.width = width/10;
    this.loc = createVector(x,y);
  }
  render(){
    rect(this.height,this.width,this.loc.x,this.loc.y);
  }
  run(){
    render();
  }
}
