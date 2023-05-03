let skinTones= ["#EDC4B3", "#DEAB90", "#774936", "#B07D62", "#FFE5D9", "#FFD7BA"]; 
//let skinTones= [ color(237, 196, 179), color(222, 171, 144), color(119, 73, 54), color(176, 125, 98), color(255, 229, 217), color(255, 215, 186)]; 


class Person{

    constructor(x, y){
        //Attributes
        this.skinTone = skinTones[round(random(0, skinTones.length - 1))]; 
        this.health = 50; 

    } 


    //If a person gets hit
    hit(){
        this.health -= 10; 
    }

   
}