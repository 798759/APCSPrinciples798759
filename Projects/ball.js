class ball{
    constructor(id,dy,grav,x,y){
      this.dy=dy;
      this.grav=grav;
      this.loc = createVector(x,y);
      this.velocity = createVector(random(1,5),this.dy);
      this.id=id;
      this.clr= color(random(255),random(255),random(255));
      this.acc = createVector(0,this.grav);
    }
    run(){
      this.check();
      this.update();
      this.render();
    }
    check(){
      if(this.loc.x<=0){
        this.velocity.x = -this.velocity.x;
      }
      if(this.loc.x >= width){
        this.velocity.x = -this.velocity.x;
      }
      if(this.loc.y<0){
        balls.splice(this.id);
        //state = false;
      }
      if(this.loc.y>height){
        this.velocity.y= -this.velocity.y;
      }
    }
    update(){
      this.velocity.add(this.acc);
      this.loc.add(this.velocity)
    }
    render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 30,30);
    }
}
