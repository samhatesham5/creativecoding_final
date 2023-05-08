let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 
//let skinTones= [ color(237, 196, 179), color(222, 171, 144), color(119, 73, 54), color(176, 125, 98), color(255, 229, 217), color(255, 215, 186)]; 


class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.health = 50; 

    } 


    //If a person gets hit
    hit(){
        this.health -= 10; 
    }

    //Make the spr visible
    display(){
        this.spr.visible = true; 
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