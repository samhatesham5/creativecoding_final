/*
Friends is a subclass of Person so it'll have a lot of the same functionality as
person but will have slight differences!

*/ 
class Friends extends Person{
    constructor(x, y, name){
        super(x,y);
        this.name = name; 
    }

    display(){
        stroke('#00B4D8'); 
        strokeWeight(4);
        fill(this.skinTone);
        ellipse(this.x, this.y, 40);
        noStroke();
        fill('#000000');   
        textSize(14); 
        text(this.name, this.x - 16, this.y + 40);
    }
}
