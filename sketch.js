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
let hit = false;
let invenIndex = 0; //Keeps track of how many balls we've shot out; we can only do 10 at a time
let ballsThrown = []; 

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
  players = new Person(200, 200);
  //Playable character
  mc = new Player(x, y);
  //Creating our crush
  crush = new Crush(300, 200); 
  friends = [new Friends(400, 100, "Lloyd"), new Friends(400, 200, "Denise"), new Friends(400, 300, "Merideth")];

}

function draw() {
  background(220);
  if(option == 0){
    //DISPLAY SCREEN
  }
  if(option == 1){
      mc.display();
      players.display();
      if(throwIt){
        mc.attack(); 
        throwIt = false
        ballsThrown = mc.getInventory();
        console.log(ballsThrown);
      }
      //If we've thrown a ball, check if it's a hit
      if((ballsThrown.length > 0)){
        if(ballsThrown[invenIndex].ball.collides(players.spr)){
          console.log("hit"); 
        }
        hit = true; 
      }
    //  if(invenIndex < ballsThrown.length)
        //invenIndex++; 
      
      
     //Issue: Getting to see why its not detecting that we hit it
      //Issue: My key pressed isn't working
        

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




