class Circle{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:1.0
            
        }
        this.body= Bodies.circle(x,y,30,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,30,30);
        pop()

    }
}