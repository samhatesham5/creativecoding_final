class NPC extends Person{
    constructor(x, y){
        super(x,y);
        this.spr = new Sprite(x  + 10, y + 10, 40); 
        this.spr.strokeWeight = 4; 
        this.spr.stroke = '#000000';
        this.spr.color = this.skinTone;
        this.spr.collider = 'static'; 
        this.spr.layer = 1; 
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
}