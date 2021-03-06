class Ground {
  constructor(x,y,width,height){
      var options={
          restitution:1,
          friction:0,
          density:1,
          isStatic:true
      }
      this.x = x;
      this.y = y;
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(this.x,this.y,width,height,options);
      World.add(world,this.body);
  }

  display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     pop();
  }
}
