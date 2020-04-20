class Circle {
    constructor(x,y,radius){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius

        World.add(world, this.body);
    }
    
    move(){
        this.body.position.x = mouseX; this.body.position.y = mouseY;    
       }

    display(){
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
} 