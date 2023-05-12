class Dodgeball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.ball = new Sprite(x, y, 10); 
        this.ball.r = 10; 
        this.ball.visible = false; 
        this.ball.color = '#f34213';
     
    }

    visible(){
        this.ball.visible = true; 
        this.ball.life = 200; 
    
    }
}
