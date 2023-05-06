/*
Name: Sam Whitley
Creative Coding Final
*/

//Variables

//Position and movement
let x = 0; 
let y = 0; 
let newPos = [];  //Stores positions of each NPC
let interval = 0; //Assits with loop through newPos array

//Throwing, hitting, attacking
let throwIt = false; 
let hit = [];
let killCount = 0; //Once killCount == the length of our players, we win!

//Options
let option = 1; 

//Characters
let players; //array of npcs
let mc; //The player
let crush; //Our crush
let friends; //Our friend (stored in an array)


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; 
  y = width /2; 
  //Opponents
  
  players = [new NPC(random(50, width - 50), random(0, 50)),new NPC(random(55, width - 50), random(0, 55)), new NPC(random(55, width - 50), random(0, 55))];
  index = players.length - 1; 
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
    //Display our main character
      mc.display();
      
      //Generating NPC movement at the start of program
      for(let i = players.length - 1; i >= 0; i-= 1){  
        //Each player should have their own unique position to move to
        if(newPos.length < players.length * 2)
          getRandom();
      }

        //For each value, we access their respective indexes for their positions
        //We check if they've moved to that position and if so, we generate a random number to pass in
        for(let i = 0; i < players.length; i++){   
          if(players[i].move(newPos[i + interval], newPos[i + interval + 1]) == true){
            //replace with new random values (Replacing X)
            newPos.splice(i + interval, 1, round(random(10, width - 10)));
            //Replacing y
            newPos.splice(i + interval + 1, 1, round(random(10, height /2)));

          }

          interval += 1;

        }
      

      //Resetting our interval
      if(interval >= newPos.length / 2){
        interval = 0;
      }


      

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
            if(hit[n].isDead()){
              //Remove player from our array
              killCount +=1; 
              console.log(killCount);
            }    
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

//Returns an array of random values
function getRandom(){
  let tempX = round(random(10, width - 10));
  let tempY = round(random(10, height /2));
  newPos.push(tempX);
  newPos.push(tempY); 


}




//Allows us to attack
function mouseClicked(){
  throwIt = true; 
}

//When WASD is pressed, set our booleans to true
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




