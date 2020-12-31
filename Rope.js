class Rope{
    constructor(body1,point2){
        var options={
            bodyA : body1,
            pointB : point2,
            stiffness : 1.0,
            length : 450

        }
        this.pointB=point2;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);      
    }
    

    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(4);
            stroke("red");
            line(pointA.x,pointA.y-30,pointB.x,pointB.y);
        }
       
    }
    
}