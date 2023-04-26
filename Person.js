let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 

class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.x = x;
        this.y = y;
        this.health = 100; 

    }

    display(){
        stroke('#000000'); 
        strokeWeight(4);
        fill(this.skinTone);
        ellipse(this.x, this.y, 40);
    }
}