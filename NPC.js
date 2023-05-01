class NPC extends Person{
    constructor(x, y){
        super(x,y);
        this.spr = new Sprite(x  + 10, y + 10, 40); 
        this.spr.strokeWeight = 4; 
        this.spr.stroke = '#000000';
        this.spr.color = this.skinTone;
        this.spr.collider = 'static'; 
    }


display(){
    this.spr.draw();
     
 }
}