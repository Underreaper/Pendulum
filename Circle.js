class Circle {
    constructor(x,y,width,height){
        this.body = ellipse(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        ellipse(0,0,width,height);
        fill("blue")
    }
}