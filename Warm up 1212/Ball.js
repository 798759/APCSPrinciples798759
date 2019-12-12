class Ball{
  constructor(dx,dy){
    this.loc = createVector(random(width),random(height));
    this.vel = createVector(dx,dy);
  //  this.acl = createVector(0,0);
    this.clr = color(255,255,255); //SETS COLOR OF BALL;
  }
  run(){
    this.slider();
    this.checkedges();
    this.update();
    this.render();
    this.toClose();
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
    this.vel.add(this.acl);
    this.loc.add(this.vel);
    this.vel.limit(5);

  }
  render(){
    ellipse(this.loc.x,this.loc.y,50,50);
    fill(this.clr);
  }
  toClose(){
    var distanceToShip;
     distanceToShip=this.loc.dist(ship.loc);
     if(distanceToShip<100){
       this.loc.x = random(width);
       this.loc.y = random(height);
     }
  }
  slider(){
    if(this.vel.x<0){
      this.vel.x = -sliderVel.value();
    }else{
      this.vel.x= sliderVel.value();
    }
    if(this.vel.y<0){
      this.vel.y = -sliderVel.value();
    }else{
      this.vel.y= sliderVel.value();
    }
  }
}
