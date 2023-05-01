let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 

class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.health = 100; 


    } 


    //If a ball gets hit
    hit(){
        let storeColor = this.skinTone;
        this.skinTone = '#e63946'; 
        this.health -= 10; 
        this.skinTone = storeColor; 

    }
}