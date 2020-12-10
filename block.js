class Block{
    constructor(x, y, width, height,colour) {
        var options = {
           
            restitution :0.4,
            friction :0.05
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height,colour, options);
        this.width = width;
        this.height = height;
        this.colour=colour;
        World.add(world, this.body);
        
      }
     
      display(){
        //console.log(this.body.speed);
        fill(this.colour);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
      }
    }
}
