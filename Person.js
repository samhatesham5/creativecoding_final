let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 

class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.spr = new Sprite(x, y, 40); 
        this.health = 100; 
        this.sprstrokeWeight = 4; 
        this.spr.stroke = '#000000';
        this.spr.color = this.skinTone;
        this.spr.collider = 'static'; 

    }

    display(){
        this.spr.draw();
        
    }

    //If a ball gets hit
    hit(){
        let storeColor = this.skinTone;
        this.skinTone = '#e63946'; 
        this.health -= 10; 
        this.skinTone = storeColor; 

    }
}