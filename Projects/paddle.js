class paddle{
  constructor(l,x,y){
    this.loc = createVector(x,y);
    this.l = l;
    this.clr= color(random(255),random(255),random(255));
  }
    run(){
      this.move();
      this.render();

    }
    render(){
      fill(this.clr);
      rect(this.loc.x,this.loc.y,this.l,30);
    }
    move(){
    if(keyIsDown(65)){
      //console.log("hi")
      this.loc.x=this.loc.x-15;
    }
    if(keyIsDown(68)){
      //console.log("hi")
      this.loc.x=this.loc.x+15;;
    }

    }
}
