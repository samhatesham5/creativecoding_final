class Crush extends Person{
    constructor(x,y){
        super(x,y); 
        this.name = "Alex";
        this.spr = new Sprite();
        this.spr.x = x;
        this.spr.y = y;
        this.spr.d = 40;
        this.spr.visible = false;
        this.spr.stroke = '#00b4d8'; 
        this.spr.color = '#e56b6f';
        this.spr.strokeWeight = 4; 
        this.spr.collider = 'static';
    }

    display(){
        this.spr.visible = true;
        noStroke(); 
        textSize(14); 
        textFont(arial, 16);
        if(this.health > 0)
            text(this.name, this.spr.x - 2, this.spr.y + 40);
    }
}