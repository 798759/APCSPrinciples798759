class square{
  constructor(x,y,clr){
  this.x=x;
  this.y=y;
  this.clr = clr;
  }

  render(){
    if(this.clr%2===0){
    fill(255);
  } else {
    fill(35,26,161);
  }
    rect(this.x,this.y,100,100);
  }
}
