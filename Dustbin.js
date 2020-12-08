class Dustbin{

    constructor(x,y,width,height){


        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }

    display(){
    
        var pos = this.body.position;
        imageMode(CENTER);
        stroke("green")
    image(this.image,1000,550,250,270);
    }
}