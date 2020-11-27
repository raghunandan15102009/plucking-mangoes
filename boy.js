class Boy{
    constructor(x,y,width,height){
       var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("Plucking mangoes/boy.png")
    }
    display(){
        var pos=this.body.position
        translate(pos.x,pos.y)
        push();
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}