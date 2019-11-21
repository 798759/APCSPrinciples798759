class snake{
  constructor(x,y,size){
    this.loc = createVector(x,y);
    this.s = size;
    this.vel = createVector(this.s,this.s);
    this.body = [];
  }
  run(){
    this.render();
    this.move();
    //this.loadSegments();
    //this.update();
    this.renderSegments();
  }
  render(){
    fill(4,181,54); /// Set Color of Snake
    rect(this.loc.x,this.loc.y,this.s,this.s);
  }
  move(){// moves the snake
    if(keyCode===LEFT_ARROW||keyCode===65){
      this.loc.x = this.loc.x - this.vel.x;
    }
    if(keyCode===RIGHT_ARROW||keyCode===68){
      this.loc.x = this.loc.x + this.vel.x;
    }
    if(keyCode===38||keyCode===87){
        this.loc.y = this.loc.y-this.vel.y;
    }
    if(keyCode===40||keyCode===83){
      this.loc.y=this.loc.y + this.vel.y;
    }
    this.update();
  }
  checkEdges(){
  if(this.loc.x<0|| this.loc.x> width){
    this.vel.x = -this.vel.x;
    }
  }
  loadSegments(){
    var x = this.loc.x;
    //var y = this.loc.y;
    this.body.push(createVector(0,0))
  }
  renderSegments(){
    for(var i=0; i>this.body.length; i++){
      fill(4,181,54);
      rect(this.body.x,this.body.y,this.s,this.s);
    }
  }
  update(){
    if(this.body.length>0){
    for(var i=this.body.length-1; i>0; i--){
      this.body[i].x=this.body[i-1].x;
      this.body[i].y=this.body[i-1].y;
    }
   this.body[0].x=this.loc.x;
   this.body[0].y=this.loc.y;
  }
}
  getX(){
    return this.loc.x;
  }
  getY(){
    return this.loc.y;
  }
}
