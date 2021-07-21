class Rubber{

    constructor(x,y){
    
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1,
        }
    
        this.body = Bodies.rectangle(x,y,150,150,options);
        this.width = 80;
        this.height = 80;
        //this.radius = 30;
    
        World.add(world, this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("black");
        ellipse(0,0,this.width,this.height);
        pop();
    
    
    }
    
    }