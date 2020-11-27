class Mango {
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution: 0.3,
            friction: 20,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,50, options)
        World.add(world, this.body);
        this.radius=50;
        this.image=loadImage("Plucking mangoes/mango.png");
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0, 0,40,40);
        pop()
    }
}