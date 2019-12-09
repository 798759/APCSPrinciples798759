class ball {
  constructor(r,g,b,x,y){
    this.r =r;
    this.g =g;
    this.b =b;
    this.loc = createVector(x,y);
  }
  render(){
    fill(this.r,this.g,this.b);
    ellipse(this.loc.x,this.loc.y,40,40);
  }
  getR(){
    return this.r;
  }
}
