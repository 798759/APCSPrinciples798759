class paddle{
  constructor(l,x,y){// constructor fot the method
    this.loc = createVector(x,y);
    this.l = l;
    this.clr= color(51,109,255);
  }
    run(){
      this.move();
      this.render();

    }
    render(){ // a method to render the paddle
      fill(this.clr); 
      rect(this.loc.x,this.loc.y,this.l,30);
    }
    move(){
      if(keyIsDown(65)||keyIsDown(LEFT_ARROW)){// a method to move the paddle left
  if(this.loc.x>0&&this.loc.x<width){
        this.loc.x=this.loc.x-20;
      }
        }
      if(keyIsDown(68)||keyIsDown(RIGHT_ARROW)){ // a method to move the paddle right
      if(this.loc.x+this.l>0&&this.loc.x+this.l<width){
      this.loc.x=this.loc.x+20;
      }
    }
  }
}
