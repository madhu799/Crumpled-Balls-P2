class Paper
{
  constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:1,
        density:1.3
    
    
    }
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    this.image = loadImage("paper.png");
    World.add(world,this.body)
   

  }

  display()
  {
var paperpos=this.body.position;
var angle = this.body.angle;
push()
translate(paperpos.x,paperpos.y);
rotate(angle)
imageMode(CENTER)
image(this.image,this.x,this.y,this.r,this.r);
pop()
  }
  }
