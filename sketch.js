/*
Name: Sam Whitley
Creative Coding Final
*/

//Variables

//Position
let x = 0; 
let y = 0; 

//Throwing, hitting
let throwIt = false; 
let hit = [];

//Options
let option = 1; 

//Characters
let players; //npcs
let mc; //The player
let crush; //Our crush
let friends; //Our friend (stored in an array)

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; 
  y = width /2; 
  //Will eventually populate using an array maybe? Create like 10 players?
  players = [new NPC(random(50, width - 50), random(0, 50)),new NPC(random(55, width - 50), random(0, 55))];
  //Playable character
  mc = new Player(x, y);
  //Creating our crush
 //crush = new Crush(300, 200); 
 // friends = [new Friends(400, 100, "Lloyd"), new Friends(400, 200, "Denise"), new Friends(400, 300, "Merideth")];
  //ballsThrown = mc.getInventory(); 
}

function draw() {
  background(220);
  if(option == 0){
    //DISPLAY SCREEN
  }
  if(option == 1){
      mc.display();
      if(throwIt){
        //Checking the ball that we've thrown
        let currBall = mc.attack();       
       //If we've thrown a ball, check if it's a hit
       if(currBall != -1){
        //Check to see which players we hit
        for(let i = players.length - 1; i >= 0; i--){
          currBall.ball.collides(players[i].spr, () => hit.push(players[i])) 
        }

        //Reduce life points and check if that player has died
       if(hit.length >= 0){
          for(let n = hit.length - 1; n >= 0; n--){
            hit[n].hit();   
            hit[n].isDead();        
          }
        }
      
       }
       else{
        //Need to pick up balls
       }
       
      
       //Finished throwing
      throwIt = false
      //Reset our array (since all the characters that got hit had reduced their health)
      hit = [];


    }

  }
  

}





//Toggle between screen
function keyPressed(){
  //Press play
  if(key == 'p'){
    if(option >= 1){
      option = 1; 
    }
    else{
      option++; 
  
    }
  }
 
}


function mouseClicked(){
  throwIt = true; 
}

//When WASD is pressed, set our booleans to true
function keyPressed(){
  //Press play
  if(key == 'p'){
    if(option >= 1){
      option = 1; 
    }
    else{
      option++; 
  
    }
  }
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




