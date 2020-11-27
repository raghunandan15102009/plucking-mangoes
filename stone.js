class Stone {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 20,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x, this.y,50,50, options)
        World.add(world, this.body);
        this.radius=50;
        this.image=loadImage("Plucking mangoes/stone.png");
    }
    display() {
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0, 0,50,50);
        pop()
    }
}