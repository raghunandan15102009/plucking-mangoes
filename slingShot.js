class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 3
        }        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){   
        if(this.sling.bodyA){
            stroke("black");
            strokeWeight(4);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;       
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
    }  
}