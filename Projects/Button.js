class Button{
  constructor(x,y,r,g,b,id){
  var strings =["Easy","Hard","Really\n Hard","Restart"];//Names of the Buttons
  this.x =x;
  this.y =y;
  this.w = 70;
  this.z= 70;
  this.r =r;
  this.g =g;
  this.b=b;
  this.id=id;
  this.str = strings[this.id];
  }
  loadButton(){ // A method to load buttons give the game is not playing
    if(gameState=== 3){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.z);
    fill(0,0,0);
    textSize(20);
    text(this.str,this.x,this.y,this.w,this.z)
    }
  }
  CheckMouse(){ //Method to check if the button has been clicked
    if(mouseX > this.x && mouseX < this.x+this.w
    && mouseY> this.y && mouseY <this.y+this.z &&
    mouseState=== true){
      gameState= this.id; // Sets the gamemode
    }
  }
  ForceLoad(){ // A method to load buttons no matter the gameState
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.z);
    fill(0,0,0);
    textSize(20);
    text(this.str,this.x,this.y,this.w,this.z)
  }
  Restart(){ // A method to Restart the game
    if(mouseX > this.x && mouseX < this.x+this.w
    && mouseY> this.y && mouseY <this.y+this.z &&
    mouseState=== true){
      gameState=track;
      firstRun=0;
    }
  }
}
