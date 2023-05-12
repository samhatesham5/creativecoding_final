let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 
let inven = [];  

class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.health = 30; 

    } 


    //If a person gets hit
    hit(){
        this.health -= 10; 
    }

    //Make the spr visible
    display(){
        this.spr.visible = true; 
    }
    
    //Make characters attack
    //Will throw a new ball at the 
    attack(player){
       let currBall = new Dodgeball(this.spr.position.x, this.spr.position.y); 
       currBall.visible(); 
       currBall.ball.draw(); 
       let ang = currBall.ball.angleTo(player);
       curr.ball.direction = ang;
       curr.ball.speed = 3;
    }



    //Moves our sprite to a random position
    move(x, y){
        //Move x position 
         if(x > this.spr.position.x){
            this.spr.position.x = round(this.spr.position.x) + 1; 
        }
         else if(x < this.spr.position.x){
            this.spr.position.x = round(this.spr.position.x) - 1;
        }
        
        
        //Move y position
        if(y > this.spr.position.y){
            this.spr.position.y = round(this.spr.position.y) + 1;
        }
        else if(y < this.spr.position.y){
            this.spr.position.y = round(this.spr.position.y) - 1; 
        }
        //Check if we've moved
        if(this.spr.position.x == x && this.spr.position.y == y){
            return true;
        }
        else{
            return false
        }

        
    
    }

   
}