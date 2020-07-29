class PaperClass{
    constructor(x,y,radius,angle){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,radius,options,angle)
        this.angle=angle
        this.radius= radius
        World.add(world, this.body)
    }
    display(){
        ellipseMode(RADIUS)
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5)
        stroke("yellow")
        fill("blue");
        ellipse(0,0,this.radius,this.radius)
        pop()
      }
}