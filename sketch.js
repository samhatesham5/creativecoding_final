/*
Name: Sam Whitley
Creative Coding Final
*/

//Font
let pixelFont;
let arial;

//Image
let court;

//Position and movement
let x = 0; 
let y = 0; 
let newPos = [];  //Stores positions of each NPC (opponents)
let teamPos = []; //Stores positions of each NPC (team)
let interval = 0; //Assits with loop through newPos array
let teamInterval = 0; //Same as interval but for the teamPos array

//Throwing, hitting, attacking, catching
let throwIt = false; 
let hit = []; //Keeps track of the opponents the player hits
let hitUs = []; //Keeps track of teammates the opponnents hit 
let killCount = 0; //Once killCount == the length of our players, we win!
let teamCount = 0; //If teamCount == the length of our players, we lose. 
let friendCount = 0; //Keeps track of how many friends got out
let canCatch = false;

//Options (Toggles between loading, main, and ending screen(s))
let option = 0; 
let ending = 0;
//Different options and endings
/*
0 = Loading screen
1 = Main game
2 = Good ending (Everyone lives and all opps die
3 = Bad friend/teammate ending (saved crush, not all friends)
4 = No crush (saved friends not crush)
5 = MC dies (Game Over)
*/
//Characters
let mc; //The player
let players; //array of npcs
let crush; //Our crush
let friends; //Our friend (stored in an array)


function setup() {
  createCanvas(windowWidth, windowHeight);
  //Loading screen (Option 0)
  pixelFont = loadFont('assets/04B.TTF');
  pixelDensity(5);
  arial = loadFont('assets/Arial.ttf');
  court = loadImage('assets/court2.jpg');
  //Main game (Option 1)
  x = width / 2; 
  y = height /2 + 50; 
  //Playable character
  mc = new Player(x, y);
  //Opponents
  players = [new NPC(random(50, width - 50), random(0, 50), true),new NPC(random(55, width - 50), random(0, 55), true), new NPC(random(55, width - 50), random(0, 55), true)];
  //Teammates (Includes NPCs, friends, and our crush)
  crush = new Crush(random(55, width - 50), random(360, height - 10)); 
  barry = new Friends(random(55, width - 50), random(360, height - 10), "Barry");
  team = [new NPC(random(55, width - 50), random(360, height - 10), false), crush, barry];
  index = players.length - 1; 


}

function draw() {
  background(0);
  //Loading screen
  if(option == 0){
    //DISPLAY SCREEN
    mc.display();
    textFont(pixelFont, 42);
    textAlign(CENTER);
    fill('#FFFFFF');
    text("Dodgeball!",width /2, 100);
    textSize(24);
    fill('#b8c0ff');
    text("Press p to play", width /2, 180);
    fill('#FFFFFF');
    text("Protect your ", width/2 - 60, 240);
    fill('#ade8f4');
    text("friends", width/2 + 130, 240);
    fill('#FFFFFF');
    text("Protect your ", width/2 - 60, 270);
    fill('#fb6f92');
    text("crush", width/2 + 115, 270);
    fill('#FFFFFF');
    textSize(16);
    text("Click to shoot at the other team!", width/2 + 15, 670);

    //Control info
    text("W", width / 2, height / 2 );
    text("S", width / 2, height / 2 + 130);
    text("A", width / 2 - 50, height / 2 + 60);
    text("D", width / 2 + 50, height / 2 + 60);
  }
  //Main game
  if(option == 1){
    image(court, 0, -50, width, height + 100);
    //Display our main character
      mc.display();
      //Plays all our players and teammates
      displayNPC();
      //Kill counts for each team
      textFont(pixelFont, 18);
      stroke('#FFFFFF');
      strokeWeight(3); 
      fill(0);
      text("Black Team: ", 100, 50); //20
      text(killCount, 190, 50);
      text("/", 210, 50);
      text(3, 230, 50);
      //Blue
      fill('#00b4d8');
      text("Blue Team: ", 93, 80); //20
      text(teamCount, 190, 80);
      text("/", 210, 80);
      text(4, 230, 80); // Includes our character
      noStroke(); 

      //Generating NPC movement at the start of program
      for(let i = players.length - 1; i >= 0; i-= 1){  
        //Each player should have their own unique position to move to
        if(newPos.length < players.length * 2)
          getRandomOpp(); //Modify so that way we get random for X and Y
      }
      for(let i = team.length - 1; i >= 0; i-= 1){
        //Keep adding values to our array so long as there's a teammate that needs an X,Y value
        if(teamPos.length < team.length * 2){
          getRandomTeam(); 
        }
      }

        //For each value, we access their respective indexes for their positions
        //We check if they've moved to that position and if so, we generate a random number to pass in
        for(let i = 0; i < players.length; i++){   
          if(players[i].move(newPos[i + interval], newPos[i + interval + 1]) == true){
            //replace with new random values (Replacing X)
            newPos.splice(i + interval, 1, round(random(50, windowWidth - 50))); 
            //Replacing y
            newPos.splice(i + interval + 1, 1, round(random(10, 340))); //Make a get random for Y
          }

          interval += 1;

        }
        //Repeat the same process for our other team
        for(let i = 0; i < team.length; i++){   
          if(team[i].move(teamPos[i + teamInterval], teamPos[i + teamInterval + 1]) == true){
            //replace with new random values (Replacing X)
            teamPos.splice(i + teamInterval, 1, round(random(50, windowWidth - 50))); 
            //Replacing y
            teamPos.splice(i + teamInterval + 1, 1, round(random(380, height - 10))); //Make a get random for Y
            
          }

          teamInterval += 1;

        }

      //Resetting our interval
      if(interval >= newPos.length / 2){
        interval = 0;
      }
      if(teamInterval >= teamPos.length /2){
        teamInterval = 0; 
      }
      //Every 100 framecounts, the opponents will shoot a ball at player's team
      if(frameCount % 100 == 0){
        //Pick a random number 
        let pickTarget = round(random(0, 2));
        //Pick ONE player to throw
        //If pickTarget less than 0, attack teammates
        if(pickTarget <= 0){
          for(let i = players.length -1; i >= 0; i--){
            if(players[i].health > 0){
              let playerBall = players[i].attack(team[i].spr.position); 
              //If we can catch the ball and we do by hovering over it
              if(canCatch){
                if(kb.pressing('q'))
                  playerBall.ball.overlaps(mc.sprite, () => playerBall.ball.remove())
              }
              //Check if team can still be hit
              if(playerBall.ball > 0){
                 //Check if opp hit a teammate
                playerBall.ball.collides(team[i].spr, () => hitUs.push(team[i]));
                //Still check if the opp hit us or our crush (because that should still count)
                //Only if we can't catch
                if(!canCatch)
                 playerBall.ball.collides(mc.sprite, () => hitUs.push(mc));
                playerBall.ball.collides(crush.spr, () => hitUs.push(crush));
              }
            }
          } 
        }
        //If pickTarget greater than 0, attack our crush directly
        else{
          for(let i = players.length - 1; i >= 0; i--){
            //Only throw a ball if their health is greater than 0
            if(players[i].health > 0){
              let playerBall = players[i].attack(crush.spr.position);
              if(canCatch){
                  if(kb.pressing('q'))
                  playerBall.ball.overlaps(mc.sprite, () => playerBall.ball.remove()); 
              }
              if(playerBall.ball.life > 0){
                //Check if our crush gets hit 
                playerBall.ball.collides(crush.spr, () => hitUs.push(crush));
                //Still check if the opp hit a teammate or us (should still count)
                playerBall.ball.collides(team[i].spr, () => hitUs.push(team[i]));
                if(!canCatch)
                  playerBall.ball.collides(mc.sprite, () => hitUs.push(mc));

              }
            }
            
          }        
             
        }   
      }  
        //Checking what the opponents hit
        if(hitUs.length >= 0){
          for(let i = hitUs.length - 1; i >= 0; i--){
            hitUs[i].hit();
             //If the player that just died is us, GAME OVER
             console.log(players, mc.health); 
            if((hitUs[i] instanceof Player) && (mc.health == 0)){
              option = 5; 
              break;
            }
            //Check if our friend died
            if(hitUs[i].isDead() && hitUs[i] instanceof Friends){
              teamCount += 1;
              friendCount += 1; 
              //Remove teammate from the array
              //If all of our friends are out/dead, get the bad friend ending 
              //Only reassign if there's no ending yet
              if(friendCount >= 1 && ending <= 0)
                ending = 3; 
            }
             //Check if our crush died
             if(hitUs[i].isDead() && hitUs[i] instanceof Crush){
              teamCount += 1;
              //Get the bad crush ending (but good friend) 
              //If there's no ending yet, assign it
              if(ending <= 0)
                ending = 4; 
        
            }
            //Check if any NPC teammates that died
            if(hitUs[i].isDead()){
              //Removes teammate from our array
              teamCount += 1; 
            }
           
          }
        }
        //Reset the characters players hit
        hitUs = []; 
      
 
      //If we threw a ball
      if(throwIt){
        //Tracking the ball that we've thrown
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
            if(hit[n].isDead()){
              //Remove player from our array
              killCount +=1; 
            }   
            hit[n].hit(); 
          }
          
          
        }
       }
      
       //Finished throwing
      throwIt = false
      //Reset our array (since all the characters that got hit had reduced their health)
      hit = [];
    }
    //If we won by killing all the opponents
    if(killCount == 3){
      //If all our teammates live
      if(teamCount == 0)
        option = 2;
      else
        count = 3; 
    }

    //If everyone died
     if(teamCount == 3){
      //If your crush dies
      if(ending == 4)
        option = 4;
      //If all your friends die (and teammates)
      else
          option = 3;
      }

    //TODO: DIFFERENT ENDING SCREENS
    //TODO: Being able to stand in front of our crush or NPC and block balls for them
    //TODO: Get our team to fire back at the other team (but probably less intervals?)
  }
  //If you kill are your opponents
  if(option == 2){
   

  }
  //GAME OVER FOR MC
  if(option == 5){

  }
  

}

//Displays teammates and players (we will always have the same size for both)
function displayNPC(){
  for(let i = 0; i < players.length; i++){   
    players[i].display();
    team[i].display(); 
  }
 

}

//Displays the line seperating the two sides
function theLine(){
  stroke(0); 
  strokeWeight(4);
  line(0, 390, width, 390);
  noStroke(); 
}

//Returns an array of random x, y values for our team
function getRandomTeam(y){
  let tempX = round(random(10, width - 10));
  let tempY = round(random(380, height - 10));
  teamPos.push(tempX);
  teamPos.push(tempY); 
 
}

//Returns an array of random x, y values for our opponent
function getRandomOpp(){
  let tempX = round(random(10, width - 10));
  let tempY = round(random(10, 370));

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
  if(key == 'q'){
    mc.sprite.collider = 'none'; 
    canCatch = true;
  }
 


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
  if(key == 'q'){
    mc.sprite.collider = 'static'; 
    canCatch = false; 
  }
 


}




