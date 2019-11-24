class snake{
  constructor(x,y,size){//snake constructor
    this.loc = createVector(x,y);
    this.s = size; // size of snake
    this.vel = createVector(0,0);
    this.body = [];
  }
  run(){
    this.render();// renders everything
    this.move(); // move everything
    this.isSnakeAlive(); // chechs to see if u lost
  }
  render(){
    fill(4,181,54); /// Set Color of Snake
    rect(this.loc.x,this.loc.y,this.s,this.s);//Renders head
    if(this.body.length>0){
      for(var i=0; i<this.body.length; i++){//renders body
        fill(4,181,54);
        rect(this.body[i].x,this.body[i].y,this.s,this.s);
      }
    }
  }
  move(){// moves the snake
    this.update();
    this.loc.add(this.vel);
  }
  checkEdges(){
  if(this.loc.x<0|| this.loc.x> width){
    this.vel.x = -this.vel.x;
    }
  }
  loadSegments(){
    this.body.push(createVector(this.loc.x,this.loc.y))
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
isSnakeAlive(){
  for(var i=0; i<this.body.length; i++){
    if(this.loc.x===this.body[i].x&&this.loc.y===this.body[i].y){// checks if snake ran into itself
      gameState=3;
    }
  }
  if(this.loc.x>width||this.loc.y>height||this.loc.x<0||this.loc.y<0){// checks if snake hit the edge of map
    gameState=3;
  }
}
  getX(){
    return this.loc.x;// getters used for eaten method
  }
  getY(){
    return this.loc.y;
  }
}
