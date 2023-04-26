let goUp;
let goDown;
let goRight;
let goLeft;

class Player extends Person{
    constructor(x,y){
        super(x, y);
        this.name = "You"; 
    }

    display(){
        stroke('#ffba08'); 
        strokeWeight(4);
        fill(this.skinTone);
        ellipse(this.x, this.y, 40);
        noStroke();
        fill('#000000');   
        textSize(14); 
        text(this.name, this.x - 13, this.y + 40);

        //Controlling the movement of our player
        if(goUp){
            if(this.y > 0)
              this.y -= 3;
          }
          if(goDown){
            if(this.y < width)
              this.y += 3;
          }
          if(goLeft){
            if(this.x > 0)
              this.x -= 3;
        
          }
          if(goRight){
            if(this.x < width)
             this.x += 3; 
          }
    }
}


//Toggle between screen
function keyPressed(){
    //WASD movements
    if(key == 'w'){
      goUp = true;
    }
    if(key == 's'){
      goDown = true;
  
    }
    if(key == 'a'){
      goLeft = true;
  
    }
    if(key == 'd'){
      goRight = true;
  
    }
    //Q will be THROW
  
  
  }
  
  
  function keyReleased(){
    if(key == 'w'){
      goUp = false; 
    }
    if(key == 's'){
      goDown = false;
  
    }
    if(key == 'a'){
      goLeft = false;
  
    }
    if(key == 'd'){
      goRight = false;
  
    }
  
  
  }