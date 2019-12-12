class Ship{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
  //  this.acl = createVector(10,10);
    this.clr = color(255,255,255); // SET COLOR OF SHIP
    this.angle  = this.loc.dist(ball.loc);
  }
  run(){
    this.render();
    this.update();
    this.checkedges();
  }

  render(){
    fill(this.clr);
    this.angle = this.angle + 0.1;
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8);
    pop();
  }
  checkedges(){
  if(this.loc.x<0 || this.loc.x>width){
    this.vel.x= -this.vel.x
  }
  if(this.loc.y<0 || this.loc.y>height){
    this.vel.y= -this.vel.y
  }
}

  update(){
    var distanceToBall;
    distanceToBall = this.loc.dist(ball.loc);
      this.acl = p5.Vector.sub(ball.loc, this.loc);
      this.acl.normalize();
      this.acl.mult(0.1);
      this.vel.add(this.acl);
      this.loc.add(this.vel);
      this.vel.limit(sliderAttraction.value());
  }
}
