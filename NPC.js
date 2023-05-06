class NPC extends Person{
    constructor(x, y){
        super(x,y);
        this.spr = new Sprite();
        this.spr.x = x + 10;
        this.spr.y = y + 10;
        this.spr.d = 40;
        this.spr.strokeWeight = 4; 
        this.spr.stroke = '#000000';
        this.spr.color = this.skinTone;
        this.spr.collider = 'static'; 
        this.spr.layer = 1; 
        //this.spr.pos = createVector(x + 10, y + 10);
        this.spr.vel = createVector(random(.5), 0);

    }


    display(){
        this.spr.draw();
     }

    //Check if the person has died
    dies(){
        this.spr.life = 0;

    }

     //Check if the person has died
     isDead(){
        if(this.health == 0){
            this.spr.life = 0;
            return true; 
        }
        return false;
    }

    //Moves our sprite to a random position
    move(x, y){
        //Move x position 
         if(x > this.spr.position.x){
            this.spr.position.x = round(this.spr.position.x)+ 1; 
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