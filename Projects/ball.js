class ball(){
    construcor(id){
      var grav=.5;
      var dy=1;
      var state;
      this.location = createVector(random(200,600),30)
      this.velocity = createVector(random(100,200),dy)
      this.id=id;
      this.clr= color(random(255),random(255),random(255));
      this.acc = createVector(0,grav);
    }
    run(){
      this.check();
      this.update();
      this.render();
    }
    check(){
      if(this.location.x=<0){
        this.velocity.x = -this.velocity.x;
      }
      if(this.location.x >= width){
        this.velocity.x = -this.velocity.x;
      }
      if(this.location.y=<0){
        balls.splice(id);
        state = false;
      }
      if(this.location.y>=height){
        this.velocity.y= -this.velocity.y;
      }
    }
    update(){
      this.velocity.add(this.acc);
      this.location.add(this.velocity)
    }
    render(){
      fill(this.clr);
      ellipse(this.location.x, this.locaion.y, 30,30);
    }
}
