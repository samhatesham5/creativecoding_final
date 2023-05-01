let goUp;
let goDown;
let goRight;
let goLeft;
//Attack function
let count = 9; //Number of dodgeballs a user can throw at a time 
let inventory = [];  //The user gets 10 balls

//Player is the playable character!
//This class uses a lot of function from Spirte and some basic concepts from it's parent class, Person
class Player extends Person{
    constructor(x,y){
        super(x, y);
        this.sprite = new Sprite(x, y, 40); 
        this.name = "You"; 
        this.health = 200;
        this.sprite.strokeWeight = 4; 
        this.sprite.stroke = '#ffba08';
        this.sprite.color = this.skinTone;
        this.sprite.collider = 'static';  //Objects will bound off of our player
        this.inventory = inventory; 
      
      }

    display(){
        this.sprite.draw(); 
        noStroke();
        fill('#000000');   
        textSize(14); 
        text(this.name, this.sprite.position.x - 13, this.sprite.position.y + 40);

        //Controlling the movement of our player
        if(goUp){
            if(this.sprite.position.y > 0)
            this.sprite.position.y = this.sprite.position.y - 3;
          }
          if(goDown){
            if(this.sprite.position.y  < width)
            this.sprite.position.y = this.sprite.position.y + 3;
          }
          if(goLeft){
            if(this.sprite.position.x > 0)
              this.sprite.position.x = this.sprite.position.x - 3;
        
          }
          if(goRight){
            if(this.sprite.position.x < width)
            this.sprite.position.x = this.sprite.position.x +  3; 
          }
    }

    //Picking up balls in the area
    pickUp(){

    }

    //User, when Q is pressed, will throw a ball
    attack(){
      if(count >= 1){ 
        //Add a ball (should shoot out from center of our sprite even with position changing as we move around)
        this.pushInventory();
        //Pop it out for reference
        let curr = this.inventory.pop(); 
        //Then store it back into our inventory for later reference
        this.pushInventory(); 
        curr.visible();
        curr.ball.draw(); 
        let ang = curr.ball.angleTo(mouse);
        curr.ball.direction = ang;
        curr.ball.speed = 3;
        count--; 
      }      
    }

    pushInventory(){
      this.inventory.push(new Dodgeball(this.sprite.position.x, this.sprite.position.y - 15));
      return this.inventory; 
    }

    //Allows our main sketch file to access the references to the dodgeball instances
    getInventory(){
      return this.inventory;

    }

    //May want to use this when our count hits 0 and we want to reset
    clearInventory(){
      this.inventory = [];
      return this.inventory; 

    }

    getBall(){
      let curr = this.inventory[0];
      return curr.nba
    }

}

//When WASD is pressed, set our booleans to true
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
  
  //When WASD is released, set to false (this stops user from moving once they let go of keys)
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