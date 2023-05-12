/*
Friends is a subclass of Person so it'll have a lot of the same functionality as
person but will have slight differences!

*/ 

class Friends extends Person{
    constructor(x, y, name){
        super(x,y);
        this.spr = new Sprite();
        this.spr.x = x;
        this.spr.y = y;
        this.spr.d = 40;
        this.spr.visible = false;
        this.name = name; 
        this.spr.stroke = '#00b4d8';
        this.spr.color =  '#ade8f4';
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
