class Dodgeball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.ball = new Sprite(x, y, 10); 
        this.ball.r = 10; 
        this.ball.visible = false; 
        this.ball.color = '#bc6c25';
     //   this.ball.pos = createVector(this.x, this.y);
      //  this.ball.vel = createVector(random(0, 0.5));
    }

    visible(){
        this.ball.visible = true; 
    
    }

    getBall(){
        return this.ball; 
    }
}
