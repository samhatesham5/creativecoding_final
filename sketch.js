/*
Name: Sam Whitley
Creative Coding Final
*/

//Variables

//Position
let x;
let y;
/*
let goUp;
let goDown;
let goRight;
let goLeft;
*/ 

//Options
let option = 1; 

//Characters
let players; //npcs
let mc; //The player
let crush; //Our crush
let friends; //Our friends (stored in an array)

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width /2;
  y = width/2; 
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



