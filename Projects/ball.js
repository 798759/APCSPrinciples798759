class ball{
    constructor(id,dy,grav,x,y){
      this.dy=dy;
      this.grav=grav;
      this.loc = createVector(x,y);
      this.velocity = createVector(random(1,5),this.dy);
      this.id=id;
      this.clr= color(0,0,0);
      this.acc = createVector(0,this.grav);
    }
    run(){
      this.check();
      this.checkHitbox();
      this.update();
      this.render();
    }
    check(){
      if(this.loc.x<=0){
        this.velocity.x = -this.velocity.x;
      }
      if(this.loc.x>=width){
        this.velocity.x = -this.velocity.x;
      }
      if(this.loc.y<=0){
        this.velocity.y= -this.velocity.y;
      }
      if(this.loc.y>=height){
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
    checkHitbox(){
var vec;
      if(this.loc.x > p1.loc.x&& this.loc.x < p1.loc.x+p1.l
      && this.loc.y> p1.loc.y&& this.loc.y<p1.loc.y+30){
        this.velocity.y= -this.velocity.y;
        score++;
        this.velocity.add(vec=createVector(.2,-.5));
      }
      }

}
