class Crush extends Person{
    constructor(x,y){
        super(x,y); 
        this.name = "Alex";
    }

    display(){
        stroke('#e56b6f'); 
        strokeWeight(4);
        fill(this.skinTone);
        ellipse(this.x, this.y, 40);
        noStroke();
        fill('#000000');   
        textSize(14); 
        text(this.name, this.x - 13, this.y + 40);
    }
}